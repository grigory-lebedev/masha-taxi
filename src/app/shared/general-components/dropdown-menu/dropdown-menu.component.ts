import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tx-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
  @Input() items: string[] = [];

  public chosenItem: string | undefined;
  public displayedItems: string[] = [];

  ngOnInit() {
    this.chosenItem = this.items[0];
    this.setDisplayedItems();
  }

  public displayMenu(item: string): void {
    this.chosenItem = item;
    this.setDisplayedItems();
  }

  private setDisplayedItems(){
    this.displayedItems = this.items.filter((item) => item != this.chosenItem);
  }
}
