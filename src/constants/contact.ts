import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const FIRSTNAME = 'Christophe';
export const LASTNAME = 'GODARD';
export const FULLNAME = `${FIRSTNAME} ${LASTNAME}`;
export const ADDRESS = '23 Hautefeuille, 77510 Sablonnières';

const LATITUDE = 48.8809223;
const LONGITUDE = 3.3045934;

export const DIRECTIONS = {
  google: "https://www.google.com/maps/dir/?api=1&destination=Atelier+d'ailes",
  apple: `https://maps.apple.com/?daddr=${LATITUDE},${LONGITUDE}&q=Atelier%20d'ailes`,
  waze: `https://waze.com/ul?ll=${LATITUDE},${LONGITUDE}&navigate=yes`,
};

const phone = parsePhoneNumberFromString('+33681308558');

export const PHONE = {
  E164: phone?.number,
  FORMAT_NATIONAL: phone?.formatNational(),
  FORMAT_INTL: phone?.formatInternational(),
};
