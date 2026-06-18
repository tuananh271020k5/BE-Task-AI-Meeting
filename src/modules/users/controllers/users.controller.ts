import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';
import type { AuthUser } from '../../auth/types/auth-user.type';
import { ChangePasswordDto } from '../dto/change-password.dto';
import { UpdateProfileDto } from '../dto/update-profile.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(AccessTokenGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({
    summary: 'Xem hồ sơ cá nhân',
    description:
      'Dán accessToken vào Authorize để lấy profile của user hiện tại.',
  })
  @ApiResponse({ status: 200, description: 'Lấy profile thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
  getProfile(@CurrentUser() user: AuthUser) {
    return this.usersService.getProfile(user.id);
  }

  @Patch('me')
  @ApiOperation({
    summary: 'Cập nhật hồ sơ cá nhân',
    description:
      'Dán accessToken vào Authorize, sau đó gửi các field profile muốn cập nhật.',
  })
  @ApiResponse({ status: 200, description: 'Cập nhật profile thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
  updateProfile(@CurrentUser() user: AuthUser, @Body() dto: UpdateProfileDto) {
    return this.usersService.updateProfile(user.id, dto);
  }

  @Patch('me/password')
  @ApiOperation({
    summary: 'Đổi mật khẩu',
    description:
      'Dán accessToken vào Authorize. Cần nhập currentPassword và newPassword.',
  })
  @ApiResponse({ status: 200, description: 'Đổi mật khẩu thành công.' })
  @ApiResponse({
    status: 401,
    description: 'Access token không hợp lệ hoặc currentPassword sai.',
  })
  changePassword(
    @CurrentUser() user: AuthUser,
    @Body() dto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(user.id, dto);
  }
}
