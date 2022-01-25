// @ts-nocheck

import passwordHash from 'password-hash';

export function sleep(ms: number): Promise<void> {
  return new Promise(res => setTimeout(res, ms));
}

export function passwordGenerate(str): string {
  return passwordHash.generate(str);
}

export function ucwords(str: string): string {
  return str.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
}
