import { EColor } from './enums/color';
import { ELanguageListItem } from './enums/language';
import { ERole } from './enums/role';

export const roles = [
  { id: 1, value: ERole.client },
  { id: 2, value: ERole.driver },
];

export const carColors = [
  { id: 1, value: EColor.white },
  { id: 2, value: EColor.black },
  { id: 3, value: EColor.red },
  { id: 4, value: EColor.green }, 
  { id: 5, value: EColor.blue },
  { id: 6, value: EColor.grey }, 
];

export const languages = [
  ELanguageListItem.english,
  ELanguageListItem.russian,
  ELanguageListItem.german,
];
