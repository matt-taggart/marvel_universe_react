import validator from 'validator';

export const validateCredentials = (email, password, err = {}) => {
  const errors = err || {};

  if (!email) {
    errors.email = 'Email must be provided.';
  }

  if (!password) {
    errors.password = 'Password must be provided.';
  }

  if (email && !validator.isEmail(email)) {
    errors.email = 'Invalid email address.';
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

export const validateRegistration = (name, email, password, age, gender) => {
  const errors = {};

  if (!name) {
    errors.name = 'Name must be provided.';
  }

  if (!age) {
    errors.age = 'Age must be provided.';
  }

  if (!gender) {
    errors.gender = 'Gender must be provided.';
  }

  validateCredentials(email, password, errors);

  if (name && !validator.matches(name, /^[a-zA-Z ]*$/)) {
    errors.name = 'Name format is invalid.';
  }

  if (age && !validator.isNumeric(age)) {
    errors.age = 'Age format is invalid.';
  }

  return errors;
};
