import { Brain, MessageSquare, Workflow, Code, Database } from 'lucide-react';
import { Lesson } from '../types';

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Understanding AI Basics",
    icon: <Brain className="w-6 h-6" />,
    description: "Learn the fundamentals of AI and how it can enhance your workflow",
    duration: "15 mins",
    content: {
      overview: "Discover the core concepts of AI and how it can be leveraged in your daily workflow.",
      sections: [
        {
          title: "What is Generative AI?",
          content: "Generative AI refers to artificial intelligence systems that can create new content, including text, images, code, and more. These systems learn patterns from existing data to generate new, original outputs.",
          examples: [
            "Text generation for content creation",
            "Code completion and generation",
            "Image creation from text descriptions"
          ],
          interactive: {
            initialCode: `// Write a prompt that asks an AI to generate a product description
// Example: "Write a compelling product description for a new smartphone"

function createProductDescriptionPrompt(product, features, targetAudience) {
  // Your code here
}`,
            expectedOutput: `function createProductDescriptionPrompt(product, features, targetAudience) {
  return \`As a marketing expert, write a compelling product description for a new \${product}.
Key features to highlight: \${features.join(', ')}
Target audience: \${targetAudience}
Include benefits and unique selling points.\`;
}`,
            hint: "Remember to include the role (marketing expert), task (write description), and specific details (features, audience) in your prompt"
          }
        },
        {
          title: "Key Components",
          content: "Understanding the basic building blocks of AI interactions: inputs, processing, and outputs. Learn how AI models interpret and respond to your requests.",
          examples: [
            "Natural language processing",
            "Context understanding",
            "Pattern recognition"
          ],
          interactive: {
            initialCode: `// Create a function that structures an AI request with context
// The function should include: role, task, and constraints

function createAIRequest(role, task, constraints) {
  // Your code here
}`,
            expectedOutput: `function createAIRequest(role, task, constraints) {
  return {
    context: \`You are a \${role}\`,
    instruction: task,
    constraints: constraints,
    format: "Please provide your response in a clear, structured manner"
  };
}`,
            hint: "Think about what information an AI needs to provide the best response: who it should act as, what it should do, and any limitations"
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: "What is the primary purpose of Generative AI?",
          options: [
            "To store data",
            "To create new content",
            "To delete files",
            "To send emails"
          ],
          correctAnswer: 1,
          explanation: "Generative AI's main purpose is to create new content by learning patterns from existing data."
        }
      ]
    }
  },
  {
    id: 2,
    title: "Prompt Engineering",
    icon: <MessageSquare className="w-6 h-6" />,
    description: "Master the art of crafting effective prompts for AI",
    duration: "20 mins",
    content: {
      overview: "Learn how to write clear and effective prompts that get you the best results from AI systems.",
      sections: [
        {
          title: "Prompt Structure",
          content: "A good prompt consists of context, instruction, and examples. Learn how to structure your prompts for optimal results.",
          examples: [
            "Context: 'As a data scientist...'",
            "Instruction: 'Write a function that...'",
            "Examples: 'For instance, input X should yield output Y'"
          ],
          interactive: {
            initialCode: `// Create a function that generates a code review prompt
// The prompt should ask AI to review code with specific focus areas

function createCodeReviewPrompt(code, focusAreas) {
  // Your code here
}`,
            expectedOutput: `function createCodeReviewPrompt(code, focusAreas) {
  return \`As an expert software engineer, please review this code:

\${code}

Focus on these areas:
\${focusAreas.map(area => \`- \${area}\`).join('\\n')}

Provide specific suggestions for improvement and explain your reasoning.\`;
}`,
            hint: "Include the role (expert engineer), the code to review, specific areas to focus on, and what kind of feedback you want"
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: "What are the three main components of a well-structured prompt?",
          options: [
            "Code, Data, Output",
            "Context, Instruction, Examples",
            "Input, Process, Output",
            "Start, Middle, End"
          ],
          correctAnswer: 1,
          explanation: "A well-structured prompt includes context (background/role), instruction (what to do), and examples (to guide the output)."
        }
      ]
    }
  },
  {
    id: 3,
    title: "AI-Assisted Coding",
    icon: <Code className="w-6 h-6" />,
    description: "Learn to leverage AI for more efficient coding",
    duration: "30 mins",
    content: {
      overview: "Discover how to use AI tools to enhance your coding productivity and code quality.",
      sections: [
        {
          title: "Code Generation",
          content: "Learn how to effectively use AI for generating code snippets and entire functions.",
          examples: [
            "Function generation from comments",
            "Test case generation",
            "Documentation generation"
          ],
          interactive: {
            initialCode: `// Write a function that generates test cases using AI
// The function should create test cases for a given function specification

function generateTestCases(functionSpec) {
  // Your code here
}`,
            expectedOutput: `function generateTestCases(functionSpec) {
  return \`As a QA engineer, please generate comprehensive test cases for this function:

Function Specification:
\${functionSpec}

Please include:
- Edge cases
- Common use cases
- Error scenarios
- Input/Output examples

Format each test case as:
- Test name
- Input values
- Expected output
- Test scenario description\`;
}`,
            hint: "Think about what information a QA engineer would need to create comprehensive test cases"
          }
        }
      ],
      quiz: [
        {
          id: 1,
          question: "What is a key benefit of AI-assisted coding?",
          options: [
            "It writes perfect code every time",
            "It helps increase coding productivity while maintaining control",
            "It eliminates the need for human programmers",
            "It only works for simple tasks"
          ],
          correctAnswer: 1,
          explanation: "AI-assisted coding helps increase productivity while allowing developers to maintain control and make final decisions."
        }
      ]
    }
  }
];