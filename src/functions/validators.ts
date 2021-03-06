import passwordHash from 'password-hash';

export function isEmail(str: string): boolean {
  const re =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  return re.test(str);
}

export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

export function isSame(str1: string, str2: string): boolean {
  return str1 === str2;
}

export function isValidPasswordHash(str: string, hash: string): boolean {
  return passwordHash.verify(str, hash);
}

export function isLengthMin(str: string, size: number): boolean {
  return str.trim().length >= size;
}

export function isLengthMax(str: string, size: number): boolean {
  return str.trim().length <= size;
}
