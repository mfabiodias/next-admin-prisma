// @ts-nocheck

import passwordHash from 'password-hash';

export function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

export function passwordGenerate(str) {
  return passwordHash.generate(str);
}
