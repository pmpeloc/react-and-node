import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/users/entities/user.entity';

export const HasRoles = (...role: UserRole[]) => SetMetadata('role', role);
