export function validateEmail(value: any) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

export function validateLength(
  value: string | null | void,
  maxLength: number,
  minLength = 0
) {
  if (minLength === 0 && !value) return true;
  if (value === null || value === undefined) return false;
  return (
    Boolean(value) && value.length <= maxLength && value.length >= minLength
  );
}

export function validatePhone(value: any) {
  const re = /^[-0-9+()\s]*$/;
  return re.test(String(value)) && validateLength(value, 13, 5);
}
