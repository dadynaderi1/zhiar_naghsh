import { UserRole } from "../../types/user";

export interface DashboardUserDto {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  companyName?: string;
}

export interface DashboardStatsDto {
  totalModels: number;
  userModels: number;
  totalCategories: number;
}

export interface DashboardCategoryDto {
  id: number;
  name: string;
  modelCount: number;
}

export interface DashboardModelDto {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: {
    id: number;
    name: string;
  };
  creator: {
    id: number;
    username: string;
  };
  creationDate: Date;
}

export interface DashboardResponseDto {
  user: DashboardUserDto;
  stats: DashboardStatsDto;
  recentModels: DashboardModelDto[];
  topCategories: DashboardCategoryDto[];
}