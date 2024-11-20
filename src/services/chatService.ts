import type { Message } from '../contexts/ChatContext';

const API_URL = process.env.VITE_API_URL || 'https://api.example.com';

export class ChatService {
  static async sendMessage(content: string): Promise<Message> {
    try {
      // For now, simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate AI response based on content
      let response = '';
      if (content.toLowerCase().includes('python') || content.toLowerCase().includes('code')) {
        response = `Here's an example in Python:
\`\`\`python
def calculate_fibonacci(n):
    if n <= 1:
        return n
    else:
        return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)

# Example usage
n = 10
result = calculate_fibonacci(n)
print(f"The {n}th Fibonacci number is: {result}")
\`\`\``;
      } else if (content.toLowerCase().includes('machine learning') || content.toLowerCase().includes('ai')) {
        response = `Let me explain some key concepts in AI and Machine Learning:

1. Supervised Learning: Training a model using labeled data
2. Unsupervised Learning: Finding patterns in unlabeled data
3. Neural Networks: Inspired by human brain structure
4. Deep Learning: Using multiple layers of neural networks

Would you like to learn more about any of these topics?`;
      } else {
        response = `I understand your question about "${content}". Let me help you with that.

To explain this concept effectively, let's break it down into steps:

1. First, let's understand the basics
2. Then, we'll look at practical examples
3. Finally, we'll practice with exercises

Would you like to start with any specific aspect?`;
      }

      return {
        id: Date.now(),
        content: response,
        isAI: true,
        timestamp: new Date(),
        type: response.includes('```') ? 'code' : 'text',
        status: 'sent',
      };
    } catch (error) {
      console.error('Error sending message:', error);
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
