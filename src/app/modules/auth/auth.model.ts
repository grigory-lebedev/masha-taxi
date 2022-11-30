export interface IAuthData {
  refreshToken: string | null;
  accessToken: string | null;
  expirationTime: number | null;
}
