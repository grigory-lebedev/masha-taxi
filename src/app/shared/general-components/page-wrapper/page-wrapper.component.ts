import { Component } from '@angular/core';

enum LanguageListItem {
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
    LanguageListItem.english,
    LanguageListItem.russian,
    LanguageListItem.german,
  ];
}
