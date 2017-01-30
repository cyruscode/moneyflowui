import { Component, OnInit } from '@angular/core';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  providers: [AccountsService]

})
export class AccountsComponent implements OnInit {
  accounts;

  constructor(accountService : AccountsService) {
    this.accounts= accountService.getAccounts();

   }

  ngOnInit() {
  }

}
