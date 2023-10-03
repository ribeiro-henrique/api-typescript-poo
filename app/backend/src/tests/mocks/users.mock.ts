const validUser = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
};

const validBody = {
  email: 'admin@admin.com',
  password: 'secret_admin'
};

const noEmailBody = {
  email: '',
  password: 'secret_admin'
}

const noPasswordBody = {
  email: 'admin@admin.com',
  password: ''
}

const invalidEmail = {
  email: 'exemplo@exemplo',
  password: 'secret_admin'
}

const invalidPassword = {
  email: 'admin@admin.com',
  password: 'supersecret_admin'
}

const tokenPayload = {
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: 'secret_admin'
}

export {
  validUser,
  validBody,
  noEmailBody,
  noPasswordBody,
  invalidEmail,
  invalidPassword,
  tokenPayload,
}