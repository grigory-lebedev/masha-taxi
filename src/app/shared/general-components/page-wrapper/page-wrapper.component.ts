import { Component } from '@angular/core';
import { languages } from '../../constants';

@Component({
  selector: 'tx-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
})
export class PageWrapperComponent {
  public isLoggedIn: boolean = true;
  public languageList = languages;
}
