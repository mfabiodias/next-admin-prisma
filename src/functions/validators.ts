import passwordHash from 'password-hash';

export function isEmail(str) {
  const re =
    /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
  return re.test(str);
}

export function isEmpty(str) {
  return str.trim().length === 0;
}

export function isSame(str1, str2) {
  return str1 === str2;
}

export function isValidPasswordHash(str, hash) {
  return passwordHash.verify(str, hash);
}
