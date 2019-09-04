/* @hash 2c7255557fc505662437e814322955eb */
// tslint:disable
/* eslint-disable */
import { Injectable } from '@angular/core';
import { Client, DeveloperClients } from '@neo-one/client-browserify';
import { Contracts } from './contracts';
import { createClient, createDeveloperClients } from './client';
import { createTokenSmartContract } from './Token/contract';
import { createICOSmartContract } from './ICO/contract';

@Injectable({
  providedIn: 'root',
})
export class ContractsService {
  public client: Client;
  public developerClients: DeveloperClients;
  public token: Contracts['token'];
  public ico: Contracts['ico'];

  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.token = createTokenSmartContract(this.client);
    this.ico = createICOSmartContract(this.client);
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.token = createTokenSmartContract(this.client);
    this.ico = createICOSmartContract(this.client);
  }
}
