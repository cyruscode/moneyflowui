import { Injectable } from '@angular/core';

@Injectable()
export class AccountsService {

  constructor() { }

  getAccounts() : String[] {
    return ['Desjardins Chequing', 'Tangerine Chequing', 'Tangerine Savings'];
  }

}
