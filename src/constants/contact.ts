export const FIRSTNAME = 'Christophe';
export const LASTNAME = 'GODARD';
export const FULLNAME = `${FIRSTNAME} ${LASTNAME}`;

export const ADDRESS = '23 Hautefeuille, 77510 Sablonnières';

const rawPhoneNumber = '0632915821';
const rawPhoneNumberWithoutZero = rawPhoneNumber.replace(/^0/, '');

export const PHONE = {
  RAW: rawPhoneNumber,
  NATIONAL: rawPhoneNumber.replace(/(\d{2})(?=\d)/g, '$1 ').trim(),
  INTL: `(+33) ${rawPhoneNumberWithoutZero.replace(/(\d{1,2})(?=\d)/g, '$1 ').trim()}`,
  E164: `+33${rawPhoneNumberWithoutZero}`,
};
