import { Component, Input, OnInit } from '@angular/core';

interface MenuItem {
  value: string;
  isChosen: boolean;
}

@Component({
  selector: 'tx-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];

  public chosenItem: MenuItem = { value: '', isChosen: true };
  public displayedItems: MenuItem[] = [];

  ngOnInit() {
    this.chosenItem = this.items.find((item) => item.isChosen === true)!;
    this.displayedItems = this.items.filter((item) => item.isChosen === false);
  }

  public displayMenu(item: MenuItem): void {
    this.displayedItems = this.items.filter((item) => item != this.chosenItem);
  }
}
