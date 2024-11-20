// Mock auth service for development
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    emailVerified?: boolean;
  };
  token: string;
}

class AuthService {
  private mockToken = 'mock-jwt-token';

  private getStoredUser(): AuthResponse['user'] | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  private setStoredUser(user: AuthResponse['user'] | null): void {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }

  getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setAuthToken(token: string | null): void {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  async validateToken(): Promise<AuthResponse> {
    const token = this.getAuthToken();
    const user = this.getStoredUser();
    
    if (!token || !user) {
      throw new Error('No token or user found');
    }

    // In a real app, we would validate the token with the backend
    if (token === this.mockToken || token === 'mock-github-jwt-token') {
      return { user, token };
    }

    throw new Error('Invalid token');
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation - accept both test@example.com and the user's email
    if ((credentials.email === 'test@example.com' || credentials.email === 'nicholasdelnegro80@gmail.com') && 
        credentials.password === 'password') {
      const user = {
        id: '1',
        email: credentials.email,
        name: credentials.email === 'test@example.com' ? 'Test User' : 'Nicholas Del Negro',
        emailVerified: true
      };
      
      this.setStoredUser(user);
      this.setAuthToken(this.mockToken);
      
      return { user, token: this.mockToken };
    }
    
    throw new Error('Invalid credentials. Please use test@example.com/password or your registered email.');
  }

  async loginWithGithub(): Promise<AuthResponse> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = {
      id: '2',
      email: 'github@example.com',
      name: 'GitHub User',
      emailVerified: true
    };
    
    const token = 'mock-github-jwt-token';
    this.setStoredUser(user);
    this.setAuthToken(token);
    
    return { user, token };
  }

  async signup(credentials: SignupCredentials): Promise<AuthResponse> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const user = {
      id: Date.now().toString(),
      email: credentials.email,
      name: credentials.name,
      emailVerified: false
    };
    
    this.setStoredUser(user);
    this.setAuthToken(this.mockToken);
    
    return { user, token: this.mockToken };
  }

  async logout(): Promise<void> {
    this.setStoredUser(null);
    this.setAuthToken(null);
  }

  async verifyEmail(token: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async requestPasswordReset(email: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

export const authService = new AuthService();
