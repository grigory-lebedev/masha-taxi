import { ICar } from "src/app/shared/models/car.model";

export interface ISignUpData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: string;
  car?: ICar;
}
