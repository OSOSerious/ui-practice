import type { Message } from '../contexts/ChatContext';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.example.com';

export class ChatService {
  static async sendMessage(content: string): Promise<Message> {
    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();

      return {
        id: Date.now(),
        content: data.message,
        isAI: true,
        timestamp: new Date(),
        type: data.message.includes('```') ? 'code' : 'text',
        status: 'sent',
      };
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }

  static async getHistory(): Promise<Message[]> {
    try {
      const response = await fetch(`${API_URL}/chat/history`);
      if (!response.ok) {
        throw new Error('Failed to fetch chat history');
      }
      const data = await response.json();
      return data.map((message: any) => ({
        id: message.id,
        content: message.content,
        isAI: message.isAI,
        timestamp: new Date(message.timestamp),
        type: message.type,
        status: message.status,
      }));
    } catch (error) {
      console.error('Error fetching chat history:', error);
      throw error;
    }
  }

  static async uploadFile(file: File): Promise<string> {
    try {
      // Simulate file upload
      await new Promise(resolve => setTimeout(resolve, 2000));
      return URL.createObjectURL(file);
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }
}
