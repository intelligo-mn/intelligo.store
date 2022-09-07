export const maskPhoneNumber = (phone: any) => {
  //Example: 0(999) 999 99 99
  const x = phone
    .replace(/\D/g, '')
    .match(/(\d?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return !x[3]
    ? x[1] + x[2]
    : `${x[1]}(${x[2]}) ${x[3]}${x[4] ? ` ${x[4]}` : ''}${
      x[5] ? ` ${x[5]}` : ''
    }`;
};
