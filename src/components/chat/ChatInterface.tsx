import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Image, Code, HelpCircle, Bot, User, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from '../../contexts/ChatContext';
import { ChatService } from '../../services/chatService';

interface Message {
  id: number;
  content: string;
  isAI: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  type?: 'text' | 'code' | 'image';
  codeLanguage?: string;
}

const ChatInterface: React.FC = () => {
  const { messages, isTyping, addMessage, setTyping } = useChat();
  const [input, setInput] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !selectedFile) return;

    // Add user message
    addMessage(input, false);
    setInput('');
    setSelectedFile(null);
    
    try {
      setTyping(true);
      
      // Handle file upload if present
      if (selectedFile) {
        const fileUrl = await ChatService.uploadFile(selectedFile);
        addMessage(`File uploaded: ${fileUrl}`, false);
      }

      // Get AI response
      const aiResponse = await ChatService.sendMessage(input);
      addMessage(aiResponse.content, true);
    } catch (error) {
      console.error('Error in chat:', error);
      addMessage('Sorry, I encountered an error. Please try again.', true);
    } finally {
      setTyping(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleCodeSnippet = () => {
    setInput(prev => prev + '\n```python\n# Your code here\n```');
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bot className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">AI Tutor</h2>
            <p className="text-sm text-gray-500">Always here to help</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
            >
              <div className="flex items-start max-w-[70%] space-x-3">
                {message.isAI && (
                  <div className="p-2 bg-blue-100 rounded-lg mt-2">
                    <Bot className="h-5 w-5 text-blue-600" />
                  </div>
                )}
                
                <div
                  className={`rounded-2xl p-4 ${
                    message.isAI
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.type === 'code' ? (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>{message.content}</code>
                    </pre>
                  ) : (
                    <p className="whitespace-pre-line">{message.content}</p>
                  )}
                  
                  <div className="flex items-center justify-between mt-2 text-xs opacity-70">
                    <span>{message.timestamp.toLocaleTimeString()}</span>
                    {!message.isAI && message.status && (
                      <span className="ml-2">
                        {message.status === 'sending' && (
                          <Loader className="h-3 w-3 animate-spin" />
                        )}
                        {message.status === 'sent' && '✓'}
                        {message.status === 'error' && '⚠️'}
                      </span>
                    )}
                  </div>
                </div>

                {!message.isAI && (
                  <div className="p-2 bg-blue-600 rounded-lg mt-2">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-gray-500"
          >
            <Bot className="h-5 w-5" />
            <span>AI is typing...</span>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t bg-white p-4">
        {selectedFile && (
          <div className="mb-2 p-2 bg-gray-100 rounded-lg flex items-center justify-between">
            <span className="text-sm text-gray-600">{selectedFile.name}</span>
            <button
              onClick={() => setSelectedFile(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <label className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*,.pdf,.doc,.docx"
              />
              <Paperclip className="h-5 w-5 text-gray-500" />
            </label>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Image className="h-5 w-5 text-gray-500" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={handleCodeSnippet}
            >
              <Code className="h-5 w-5 text-gray-500" />
            </button>
          </div>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          
          <button
            onClick={handleSend}
            disabled={!input.trim() && !selectedFile}
            className={`p-3 rounded-full transition-colors ${
              input.trim() || selectedFile
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center">
          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
            <HelpCircle className="h-4 w-4 mr-1" />
            Need help? Check out the quick tips
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
