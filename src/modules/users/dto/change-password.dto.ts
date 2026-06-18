import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    example: 'password123',
    description: 'Mật khẩu hiện tại của tài khoản.',
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  currentPassword: string;

  @ApiProperty({
    example: 'newPassword123',
    description:
      'Mật khẩu mới. Sau khi đổi mật khẩu, refresh token cũ sẽ bị vô hiệu hóa.',
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  newPassword: string;
}
