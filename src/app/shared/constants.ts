import { EColor } from './enums/color';
import { ELanguageListItem } from './enums/language';
import { ERole } from './enums/role';

export const roles = [ERole.client, ERole.driver];

export const carColors = [
  EColor.white,
  EColor.black,
  EColor.red,
  EColor.green,
  EColor.blue,
  EColor.grey,
];

export const languages = [
  ELanguageListItem.english,
  ELanguageListItem.russian,
  ELanguageListItem.german,
];
