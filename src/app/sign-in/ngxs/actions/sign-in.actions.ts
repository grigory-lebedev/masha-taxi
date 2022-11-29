import { ISignInRequest } from "src/app/shared/models/signInRequest";

export class SignIn {
  static readonly type = '[Sign-in] Sign In Request';
  constructor(public payload: ISignInRequest) {}
}
