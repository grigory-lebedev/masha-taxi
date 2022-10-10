import { Component } from '@angular/core';

enum ELanguageListItem {
  english = 'English',
  russian = 'Russian',
  german = 'German',
}

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
