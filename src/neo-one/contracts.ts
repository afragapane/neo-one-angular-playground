/* @hash e7952d19af0e56f27d850b1a3e3619cb */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client';

import { ICOSmartContract, ICOMigrationSmartContract } from './ICO/types';
import { TokenSmartContract, TokenMigrationSmartContract } from './Token/types';

import { createICOSmartContract } from './ICO/contract';
import { createTokenSmartContract } from './Token/contract';

export interface Contracts<TClient extends Client = Client> {
  readonly ico: ICOSmartContract<TClient>;
  readonly token: TokenSmartContract<TClient>;
}

export interface MigrationContracts {
  readonly ico: ICOMigrationSmartContract;
  readonly token: TokenMigrationSmartContract;
}

export const createContracts = <TClient extends Client>(client: TClient): Contracts<TClient> => ({
  ico: createICOSmartContract(client),
  token: createTokenSmartContract(client),
});
