import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateProfileDto {
  @ApiPropertyOptional({
    example: 'Nguyen Van A',
<<<<<<< HEAD
    description: 'Họ tên hiển thị mới.',
=======
    description: 'Ho ten hien thi moi.',
>>>>>>> feat/project
    minLength: 2,
    maxLength: 120,
  })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  fullName?: string;

  @ApiPropertyOptional({
    example: 'https://res.cloudinary.com/demo/image/upload/avatar.png',
<<<<<<< HEAD
    description: 'URL ảnh đại diện. Có thể là URL Cloudinary.',
=======
    description: 'URL anh dai dien. Co the la URL Cloudinary.',
>>>>>>> feat/project
    maxLength: 500,
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(500)
  avatarUrl?: string;

  @ApiPropertyOptional({
    example: '0900000000',
<<<<<<< HEAD
    description: 'Số điện thoại liên hệ.',
=======
    description: 'So dien thoai lien he.',
>>>>>>> feat/project
    maxLength: 30,
  })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  phoneNumber?: string;

  @ApiPropertyOptional({
    example: 'Backend Developer',
<<<<<<< HEAD
    description: 'Chức danh hoặc vai trò cá nhân.',
=======
    description: 'Chuc danh hoac vai tro ca nhan.',
>>>>>>> feat/project
    maxLength: 120,
  })
  @IsOptional()
  @IsString()
  @MaxLength(120)
  jobTitle?: string;
}
