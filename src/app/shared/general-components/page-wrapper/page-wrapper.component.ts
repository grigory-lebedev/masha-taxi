import { Component } from '@angular/core';
import { ELanguageListItem } from './../../enums/language';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  public isLoggedIn: boolean = true;
  public languageList = [
    ELanguageListItem.english,
    ELanguageListItem.russian,
    ELanguageListItem.german,
  ];
}
