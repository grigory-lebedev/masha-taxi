import { ELanguageListItem } from './enums/language';
import { ERole } from './enums/role';

export const roles = [
  { id: 1, value: ERole.client },
  { id: 2, value: ERole.driver },
];

export const languages = [
  ELanguageListItem.english,
  ELanguageListItem.russian,
  ELanguageListItem.german,
];
