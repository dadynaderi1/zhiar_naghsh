import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@zhiarnaghsh/shared';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

class ApiClient {
  private token: string | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  }

  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
    }
  }

  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }
  }

  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(credentials),
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    this.setToken(data.access_token);
    return data;
  }

  async logout() {
    this.clearToken();
  }

  async register(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(data),
        credentials: 'include'
      });
    
      if (!response.ok) {
        // Try to get detailed error message
        const errorData = await response.json().catch(() => null);
        console.error('Registration error details:', errorData);
        const errorMessage = errorData?.message || `Registration failed with status: ${response.status}`;
        throw new Error(errorMessage);
      }
    
      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }
}

// Create a singleton instance
const apiClient = new ApiClient();
export default apiClient;