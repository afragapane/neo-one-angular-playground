/* @hash fbda1b5a3748c1a7fb1d40aed3965ec2 */
// tslint:disable
/* eslint-disable */
import { createWithContracts, TestOptions, WithContractsOptions } from '@neo-one/smart-contract-test';
import { Contracts } from './contracts';
import * as path from 'path';

export const withContracts: (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
) => Promise<void> = createWithContracts([
  { name: 'Token', filePath: path.resolve(__dirname, '../../neo-one/contracts/Token.ts') },
  { name: 'ICO', filePath: path.resolve(__dirname, '../../neo-one/contracts/ICO.ts') },
]);
