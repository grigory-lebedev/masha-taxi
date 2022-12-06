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
