import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from '../../../common/decorators/current-user.decorator';
import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { AccessTokenGuard } from '../guards/access-token.guard';
import { RefreshTokenGuard } from '../guards/refresh-token.guard';
import { AuthService } from '../services/auth.service';
import type { AuthUser } from '../types/auth-user.type';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Đăng ký tài khoản',
    description: 'Tạo user mới, hash password và trả accessToken/refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Đăng ký thành công.' })
  @ApiResponse({ status: 409, description: 'Email đã tồn tại.' })
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Đăng nhập',
    description: 'Nhập email/password để lấy accessToken và refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Đăng nhập thành công.' })
  @ApiResponse({ status: 401, description: 'Sai email hoặc mật khẩu.' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('refresh')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Làm mới token',
    description:
      'Dán refreshToken vào nút Authorize dạng Bearer token trước khi gọi API này.',
  })
  @ApiResponse({ status: 201, description: 'Cấp token mới thành công.' })
  @ApiResponse({ status: 401, description: 'Refresh token không hợp lệ.' })
  @UseGuards(RefreshTokenGuard)
  refresh(
    @CurrentUser() user: AuthUser,
    @Headers('authorization') authorization: string,
  ) {
    return this.authService.refreshTokens(
      user,
      this.extractBearerToken(authorization),
    );
  }

  @Post('logout')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Đăng xuất',
    description:
      'Dán accessToken vào Authorize. API sẽ xóa refresh token hash trong DB.',
  })
  @ApiResponse({ status: 201, description: 'Đăng xuất thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
  @UseGuards(AccessTokenGuard)
  logout(@CurrentUser() user: AuthUser) {
    return this.authService.logout(user);
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Lấy thông tin user hiện tại',
    description:
      'Dán accessToken vào Authorize để xem thông tin user đang đăng nhập.',
  })
  @ApiResponse({ status: 200, description: 'Lấy thông tin thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
  @UseGuards(AccessTokenGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.authService.getMe(user);
  }

  private extractBearerToken(authorization: string) {
    return authorization.replace(/^Bearer\s+/i, '').trim();
  }
}
