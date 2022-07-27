import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const userFind = await this.usersService.findOne(email);
    if (userFind && userFind.password === password) {
      return userFind;
    }
    return null;
  }
}
