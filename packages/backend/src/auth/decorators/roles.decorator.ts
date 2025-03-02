import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@zhiarnaghsh/shared';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);
