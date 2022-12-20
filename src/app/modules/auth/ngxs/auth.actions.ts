import { ICar } from 'src/app/shared/models/car.model';

export class SignUp {
  static readonly type = '[Sign-up] Sign Up Request';
  constructor(
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public role: string,
    public car?: ICar
  ) {}
}

export class SignIn {
  static readonly type = '[Sign-in] Sign In Request';
  constructor(public email: string, public password: string) {}
}

export class ResetPassword {
  static readonly type = '[ResetPassword] Reset Password Request';
  constructor(public email: string) {}
}
