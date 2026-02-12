import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const FIRSTNAME = 'Christophe';
export const LASTNAME = 'GODARD';
export const FULLNAME = `${FIRSTNAME} ${LASTNAME}`;
export const ADDRESS = '23 Hautefeuille, 77510 Sablonnières';

const phone = parsePhoneNumberFromString('+33681308558');

export const PHONE = {
  E164: phone?.number,
  FORMAT_NATIONAL: phone?.formatNational(),
  FORMAT_INTL: phone?.formatInternational(),
};
