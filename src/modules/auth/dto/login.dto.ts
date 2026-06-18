import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'member@example.com',
<<<<<<< HEAD
    description: 'Email đã đăng ký.',
=======
    description: 'Email da dang ky.',
>>>>>>> feat/project
    maxLength: 255,
  })
  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty({
    example: 'password123',
<<<<<<< HEAD
    description: 'Mật khẩu của tài khoản.',
=======
    description: 'Mat khau cua tai khoan.',
>>>>>>> feat/project
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}
