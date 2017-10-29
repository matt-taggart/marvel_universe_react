import validator from 'validator';

export const validateCredentials = (email, password) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email must be provided.';
  }

  if (!password) {
    errors.password = 'Password must be provided.';
  }

  if (email && !validator.isEmail(email)) {
    errors.username = 'Invalid email address.';
  }

  if (password && !validator.isLength(password, { min: 8 })) {
    errors.password = 'Password must be at least eight characters.';
    return errors;
  }

  if (password && !validator.matches(password, /(?=.*[a-z])/)) {
    errors.password = 'Password must contain at least one lowercase letter.';
    return errors;
  }

  if (password && !validator.matches(password, /(?=.*[A-Z])/)) {
    errors.password = 'Password must contain at least one uppercase letter.';
    return errors;
  }

  if (password && !validator.matches(password, /(?=.*[0-9])/)) {
    errors.password = 'Password must contain at least one number.';
    return errors;
  }

  return errors;
};

const validateRegistration = () => {

}
