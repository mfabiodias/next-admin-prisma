const dt = new Date();

export const SYSVAR = Object.freeze({
  ADMIN: {
    LOGIN_PAGE_LAYOUT: 2, // Options: 1 (Simple Layout) ou 2 (Half Layout -> Image/Form)
    REGISTER_ENABLE: true, // Habilita o cadastro de novos usuários
    DEFAULT_THEME: 'dark', // Claro ('') e Escuro ('dark')
    REGISTER_DEFAULT_ENABLE: false, // Resgitro de usuários com conta ativa automaticamente
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
