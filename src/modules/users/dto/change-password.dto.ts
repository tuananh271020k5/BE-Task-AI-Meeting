import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty({
    example: 'password123',
<<<<<<< HEAD
    description: 'Mật khẩu hiện tại của tài khoản.',
=======
    description: 'Mat khau hien tai cua tai khoan.',
>>>>>>> feat/project
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
<<<<<<< HEAD
      'Mật khẩu mới. Sau khi đổi mật khẩu, refresh token cũ sẽ bị vô hiệu hóa.',
=======
      'Mat khau moi. Sau khi doi mat khau, refresh token cu se bi vo hieu hoa.',
>>>>>>> feat/project
    minLength: 8,
    maxLength: 72,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  newPassword: string;
}
