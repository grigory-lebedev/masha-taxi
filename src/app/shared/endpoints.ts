import { environment } from "src/environments/environment";

export const ENDPOINTS = {
  login: `${environment.baseApiUrl}/login`,
  register: `${environment.baseApiUrl}/register`
};
