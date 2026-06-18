import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    example: 'member@example.com',
    description:
<<<<<<< HEAD
      'Email dùng để đăng nhập. Phải là email hợp lệ và không trùng.',
=======
      'Email dung de dang nhap. Phai la email hop le va khong trung.',
>>>>>>> feat/project
    maxLength: 255,
  })
  @IsEmail()
  @MaxLength(255)
  email: string;

  @ApiProperty({
    example: 'Nguyen Van A',
<<<<<<< HEAD
    description: 'Họ tên hiển thị của người dùng.',
=======
    description: 'Ho ten hien thi cua nguoi dung.',
>>>>>>> feat/project
    minLength: 2,
    maxLength: 120,
  })
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName: string;

  @ApiProperty({
    example: 'password123',
<<<<<<< HEAD
    description: 'Mật khẩu từ 8 đến 72 ký tự.',
=======
    description: 'Mat khau tu 8 den 72 ky tu.',
>>>>>>> feat/project
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password: string;
}
