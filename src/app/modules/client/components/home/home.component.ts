import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { IUserData } from 'src/app/shared/models/user.model';
import { ClientService } from '../../client.service';

@Component({
  selector: 'tx-client-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class ClientHomeComponent implements OnInit, OnDestroy {
  public currentUser!: IUserData;
  public currentUserSubscription$!: Subscription;
  
  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.currentUserSubscription$ = this.clientService.getUser()
      .subscribe({
        next: (userData: IUserData) => {
          this.currentUser = {
            ...userData,
          };
        },
    });
  }

  ngOnDestroy(): void {
    this.currentUserSubscription$.unsubscribe();
  }
}
