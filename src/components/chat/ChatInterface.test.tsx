import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatProvider } from '../../contexts/ChatContext';
import ChatInterface from './ChatInterface';

// Mock the ChatContext
vi.mock('../../contexts/ChatContext', () => ({
  ChatProvider: ({ children }: { children: React.ReactNode }) => children,
  useChatContext: () => ({
    messages: [],
    addMessage: vi.fn(),
    clearMessages: vi.fn(),
    isTyping: false,
    setIsTyping: vi.fn(),
  }),
}));

describe('ChatInterface', () => {
  it('renders chat interface', () => {
    render(<ChatInterface />);
    const input = screen.getByPlaceholderText(/type your message/i);
    expect(input).toBeInTheDocument();
  });

  it('allows message input', () => {
    render(<ChatInterface />);
    const input = screen.getByPlaceholderText(/type your message/i);
    fireEvent.change(input, { target: { value: 'Hello AI Tutor!' } });
    expect(input).toHaveValue('Hello AI Tutor!');
  });

  it('displays message list', () => {
    render(<ChatInterface />);
    const messageContainer = screen.getByRole('complementary');
    expect(messageContainer).toBeInTheDocument();
  });
});
