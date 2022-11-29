export interface ISignInResponse {
  refreshToken: string | null;
  accessToken: string | null;
  expirationTime: number | null;
}
