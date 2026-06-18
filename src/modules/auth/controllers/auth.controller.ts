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
<<<<<<< HEAD
    summary: 'Đăng ký tài khoản',
    description: 'Tạo user mới, hash password và trả accessToken/refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Đăng ký thành công.' })
  @ApiResponse({ status: 409, description: 'Email đã tồn tại.' })
=======
    summary: 'Dang ky tai khoan',
    description: 'Tao user moi, hash password va tra accessToken/refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Dang ky thanh cong.' })
  @ApiResponse({ status: 400, description: 'Request body khong hop le.' })
  @ApiResponse({ status: 409, description: 'Email da ton tai.' })
>>>>>>> feat/project
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiOperation({
<<<<<<< HEAD
    summary: 'Đăng nhập',
    description: 'Nhập email/password để lấy accessToken và refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Đăng nhập thành công.' })
  @ApiResponse({ status: 401, description: 'Sai email hoặc mật khẩu.' })
=======
    summary: 'Dang nhap',
    description: 'Nhap email/password de lay accessToken va refreshToken.',
  })
  @ApiResponse({ status: 201, description: 'Dang nhap thanh cong.' })
  @ApiResponse({ status: 400, description: 'Request body khong hop le.' })
  @ApiResponse({ status: 401, description: 'Sai email hoac mat khau.' })
>>>>>>> feat/project
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('refresh')
  @ApiBearerAuth()
  @ApiOperation({
<<<<<<< HEAD
    summary: 'Làm mới token',
    description:
      'Dán refreshToken vào nút Authorize dạng Bearer token trước khi gọi API này.',
  })
  @ApiResponse({ status: 201, description: 'Cấp token mới thành công.' })
  @ApiResponse({ status: 401, description: 'Refresh token không hợp lệ.' })
=======
    summary: 'Lam moi token',
    description:
      'Dan refreshToken vao Authorize dang Bearer token truoc khi goi API nay.',
  })
  @ApiResponse({ status: 201, description: 'Cap token moi thanh cong.' })
  @ApiResponse({ status: 401, description: 'Refresh token khong hop le.' })
>>>>>>> feat/project
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
<<<<<<< HEAD
    summary: 'Đăng xuất',
    description:
      'Dán accessToken vào Authorize. API sẽ xóa refresh token hash trong DB.',
  })
  @ApiResponse({ status: 201, description: 'Đăng xuất thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
=======
    summary: 'Dang xuat',
    description:
      'Dan accessToken vao Authorize. API se xoa refresh token hash trong DB.',
  })
  @ApiResponse({ status: 201, description: 'Dang xuat thanh cong.' })
  @ApiResponse({ status: 401, description: 'Access token khong hop le.' })
>>>>>>> feat/project
  @UseGuards(AccessTokenGuard)
  logout(@CurrentUser() user: AuthUser) {
    return this.authService.logout(user);
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({
<<<<<<< HEAD
    summary: 'Lấy thông tin user hiện tại',
    description:
      'Dán accessToken vào Authorize để xem thông tin user đang đăng nhập.',
  })
  @ApiResponse({ status: 200, description: 'Lấy thông tin thành công.' })
  @ApiResponse({ status: 401, description: 'Access token không hợp lệ.' })
=======
    summary: 'Lay thong tin user hien tai',
    description: 'Dan accessToken vao Authorize de xem user dang dang nhap.',
  })
  @ApiResponse({ status: 200, description: 'Lay thong tin thanh cong.' })
  @ApiResponse({ status: 401, description: 'Access token khong hop le.' })
>>>>>>> feat/project
  @UseGuards(AccessTokenGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.authService.getMe(user);
  }

  private extractBearerToken(authorization: string) {
    return authorization.replace(/^Bearer\s+/i, '').trim();
  }
}
