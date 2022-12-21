export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  id: string;
  currentOrder: string;
  car?: {
    make: string,
    model: string,
    year: number,
    color: string,
    photo: string,
  }
}
