import { LoginRequest, LoginResponse } from '@zhiarnaghsh/shared';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function login(credentials: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}