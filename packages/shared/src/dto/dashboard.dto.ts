export interface DashboardUserDto {
  id: number;
  username: string;
  email: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface DashboardCategoryDto {
  id: number;
  name: string;
  modelCount: number;
}

export interface DashboardStatsDto {
  totalModels: number;
  publishedModelCount: number;
  totalCategories: number;
  userModels?: number; // Add this new optional property
}

export interface DashboardResponseDto {
  user: DashboardUserDto;
  recentModels: any[]; // You might want to create a specific DTO for models
  topCategories: DashboardCategoryDto[];
  stats: DashboardStatsDto;
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