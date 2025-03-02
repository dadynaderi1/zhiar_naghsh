import { DashboardResponseDto, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '@zhiarnaghsh/shared';

class ApiClient {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';
    // Try to load token from localStorage on initialization
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token');
    }
  }

  // Set auth token
  setToken(token: string) {
    this.token = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token);
    }
  }

  // Clear auth token
  clearToken() {
    this.token = null;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    }
  }
  // Make request method public
  public async request<T>(
    endpoint: string,
    method: string = 'GET',
    data?: any
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const options: RequestInit = {
      method,
      headers: this.getHeaders(),
      credentials: 'include',
      mode: 'cors',
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      console.log(`Making ${method} request to: ${url}`);
      const response = await fetch(url, options);
      
      // Handle 401 Unauthorized globally
      if (response.status === 401) {
        this.clearToken();
        if (typeof window !== 'undefined') {
          window.location.href = `/login?returnUrl=${encodeURIComponent(window.location.pathname)}`;
        }
        throw new Error('Authentication required');
      }

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`API Error (${response.status}):`, errorText);
        
        try {
          const errorData = JSON.parse(errorText);
          throw new Error(errorData.message || `Request failed with status ${response.status}`);
        } catch (e) {
          throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }
      }

      // For 204 No Content responses
      if (response.status === 204) {
        return {} as T;
      }

      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error('API Request error:', error);
      
      if (error instanceof TypeError && error.message.includes('NetworkError')) {
        throw new Error('Network connection error. Please check if the server is running.');
      }
      throw error;
    }
  }
  // Dashboard methods
  async getDashboardData(): Promise<DashboardResponseDto> {
    try {
      // Check if we're authenticated before making the request
      if (!this.isAuthenticated()) {
        throw new Error('Authentication required');
      }
      
      // Try the API endpoint with a version prefix as fallback
      try {
        return await this.request<DashboardResponseDto>('/dashboard', 'GET');
      } catch (error: any) {
        if (error.message.includes('404')) {
          // Try alternative endpoint if the first one fails with 404
          console.log('Trying alternative dashboard endpoint...');
          return await this.request<DashboardResponseDto>('/api/dashboard', 'GET');
        }
        throw error;
      }
    } catch (error: any) {
      if (error instanceof TypeError && error.message.includes('NetworkError')) {
        throw new Error('Network connection error. Please check if the server is running.');
      }
      if (error.message.includes('404')) {
        throw new Error('Dashboard data not available. The endpoint may not exist on the server.');
      }
      throw error;
    }
  }
  // Auth methods
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await this.request<LoginResponse>('/auth/login', 'POST', credentials);
    this.setToken(response.access_token);
    return response;
  }

  async register(userData: RegisterRequest): Promise<RegisterResponse> {
    return this.request<RegisterResponse>('/auth/register', 'POST', userData);
  }

  async logout() {
    try {
      await this.request('/auth/logout', 'POST');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearToken();
    }
  }

  // User methods
  async getCurrentUser() {
    return this.request<{ user: any }>('/user/me');
  }

  // Add isAuthenticated method
  public isAuthenticated(): boolean {
    return !!this.token;
  }

  // Add getHeaders method
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    return headers;
  }
}

// Create a singleton instance
const apiClient = new ApiClient();
export default apiClient;