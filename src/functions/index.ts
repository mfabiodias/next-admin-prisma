// @ts-nocheck

import passwordHash from 'password-hash';

export function sleep(ms: number): Promise<void> {
  return new Promise(res => setTimeout(res, ms));
}

export function passwordGenerate(str): string {
  return passwordHash.generate(str);
}
