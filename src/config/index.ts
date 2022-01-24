const dt = new Date();

export default Object.freeze({
  ADMIN: {
    LOGIN_PAGE_LAYOUT: 2, // Options: 1 (Simple Layout) ou 2 (Half Layout -> Image/Form)
    REGISTER_ENABLE: false, // Habilita o cadastro de novos usuários
  },
  BUSSINESS: {
    NAME: 'COD3R.COM.BR',
    ALL_RIGHT: `© ${dt.getFullYear()} COD3R.COM.BR - All Rights reserved.`,
  },
  DEV: {
    NAME: 'Fabio Messias Dias',
    SITE: 'https://www.linkedin.com/in/fabio-messias-dias-6b572921/',
  },
});
