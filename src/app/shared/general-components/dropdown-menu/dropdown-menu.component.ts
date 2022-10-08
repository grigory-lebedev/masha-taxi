import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

interface MenuItems {
  value: string;
  isChosen: boolean;
}

@Component({
  selector: 'tx-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownMenuComponent implements OnInit {
  @Input() items: MenuItems[] = [];

  public chosenItem: MenuItems = { value: '', isChosen: true };
  public displayedItems: MenuItems[] = [];

  ngOnInit() {
    this.chosenItem = this.items.find((item) => item.isChosen === true)!;
    this.displayedItems = this.items.filter((item) => item.isChosen === false);
  }

  public displayMenu() {
    this.displayedItems = this.items.filter((item) => item != this.chosenItem);
  }
}
