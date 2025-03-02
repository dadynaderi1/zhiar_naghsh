export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner',  // Add this missing role
  MANUFACTURER = 'manufacturer',
  ARTIST = 'artist'
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  access_token: string;
}
// Add this interface to the existing user.ts file
export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
}

export interface RegisterResponse {
  access_token: string;
}