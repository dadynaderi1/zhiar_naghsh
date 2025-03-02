import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { DashboardResponseDto } from '@zhiarnaghsh/shared';

@Controller()
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('dashboard')
  async getDashboard(@Request() req): Promise<DashboardResponseDto> {
    return this.dashboardService.getDashboardData(req.user.id);
  }

  @Get('api/dashboard')
  async getApiDashboard(@Request() req): Promise<DashboardResponseDto> {
    return this.dashboardService.getDashboardData(req.user.id);
  }
}