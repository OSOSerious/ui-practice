import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface Message {
  id: number;
  content: string;
  isAI: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  type?: 'text' | 'code' | 'image';
  codeLanguage?: string;
}

interface ChatContextType {
  messages: Message[];
  isTyping: boolean;
  addMessage: (content: string, isAI: boolean) => void;
  setTyping: (typing: boolean) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI tutor. How can I help you today? I can assist you with:",
      isAI: true,
      timestamp: new Date(),
      type: 'text',
    },
    {
      id: 2,
      content: "• Learning AI concepts\n• Debugging code\n• Explaining complex topics\n• Providing examples",
      isAI: true,
      timestamp: new Date(),
      type: 'text',
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((content: string, isAI: boolean) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      isAI,
      timestamp: new Date(),
      status: isAI ? 'sent' : 'sending',
      type: content.includes('```') ? 'code' : 'text',
    };

    setMessages(prev => [...prev, newMessage]);
    return newMessage.id;
  }, []);

  const setTyping = useCallback((typing: boolean) => {
    setIsTyping(typing);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        messages,
        isTyping,
        addMessage,
        setTyping,
        clearMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
