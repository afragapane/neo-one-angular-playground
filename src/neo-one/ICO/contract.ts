/* @hash fe66ccb808e3bd41b55aa3abbd8090bb */
// tslint:disable
/* eslint-disable */
import { Client } from '@neo-one/client-browserify';
import { ICOSmartContract } from './types';
import { icoABI } from './abi';
import { sourceMaps } from '../sourceMaps';

const definition = {
  networks: {
    local: {
      address: 'Adiq4sMWabmjD7S45BCvW2uVgFDofmTbyo',
    },
  },
  abi: icoABI,
  sourceMaps,
};

export const createICOSmartContract = <TClient extends Client>(client: TClient): ICOSmartContract<TClient> =>
  client.smartContract(definition);
