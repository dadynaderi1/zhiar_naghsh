import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from '../entities/Model.entity';
import { User } from '../entities/User.entity';
import { Category } from '../entities/Category.entity';
import { DashboardResponseDto, DashboardUserDto, DashboardCategoryDto, DashboardStatsDto } from '@zhiarnaghsh/shared';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Model)
    private modelRepository: Repository<Model>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getDashboardData(userId: number): Promise<DashboardResponseDto> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    // Transform user to DashboardUserDto with all required properties
    const userDto: DashboardUserDto = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      firstName: user.first_name || '',
      lastName: user.last_name || ''
    };

    const recentModels = await this.modelRepository.find({
      where: { creatorId: userId },
      order: { creationDate: 'DESC' },
      take: 5,
    });
    
    // Get categories with model count
    const categories = await this.categoryRepository.find({
      take: 5,
    });
    
    // Transform categories to include modelCount
    const topCategories: DashboardCategoryDto[] = await Promise.all(
      categories.map(async (category) => {
        const modelCount = await this.modelRepository.count({
          where: { categoryId: category.id }
        });
        
        return {
          id: category.id,
          name: category.name,
          modelCount,
          // Add any other required fields from DashboardCategoryDto
        };
      })
    );

    // Create stats object with correct properties according to DashboardStatsDto
    // In the getDashboardData method
    const stats: DashboardStatsDto = {
      totalModels: await this.modelRepository.count({ where: { creatorId: userId } }),
      publishedModelCount: await this.modelRepository.count({
        where: { creatorId: userId, isAllowedToPublish: true } 
      }),
      totalCategories: await this.categoryRepository.count(),
      userModels: await this.modelRepository.count({ where: { creatorId: userId } }) // Same as totalModels for now
    };
    return {
      user: userDto,
      recentModels,
      topCategories,
      stats,
    };
  }
}