export interface LoginRequest { username: string; password: string; }
export interface RegisterRequest { username: string; email: string; password: string; confirmPassword: string; firstName: string; lastName: string; phoneNumber: string; }
export interface LoginResult { userId: number; username: string; email: string; fullName: string; roles: string[]; permissions: string[]; emailConfirmed: boolean; accessToken: string; refreshToken: string; emailConfirmationToken: string; }
export interface RefreshTokenRequest { refreshToken: string; }
export interface ForgotPasswordRequest { email: string; }
export interface ForgotPasswordResponse { message: string; resetToken: string; }
export interface ResetPasswordRequest { email: string; token: string; newPassword: string; confirmPassword: string; }
export interface ConfirmEmailRequest { userId: number; token: string; }
export interface CurrentUserResponse { username: string; roles: string[]; permissions: string[]; originalUserName: string; }
export interface ProfileResponse { id: number; username: string; email: string; firstName: string; lastName: string; phoneNumber: string; isActive: boolean; emailConfirmed: boolean; roles: string[]; permissions: string[]; }
export interface ActivityResponseItem { id: number; action: string; entityName: string; description: string; occurredAtUtc: string; }
