export class SignIn {
  static readonly type = '[Sign-in] Sign In Request';
  constructor(public email: string, public password: string) {}
}
