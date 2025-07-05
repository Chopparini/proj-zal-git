function validateForm(name, email, message) {
const errors = [];
if (!name || name.trim().length < 2) {
errors.push('Imię musi mieć co najmniej 2 znaki');
}
//poprawka w walidacji email
if (!email || !email.trim().includes('@')) {
  errors.push('Nieprawidłowy adres email');
}
if (!message || message.trim().length < 10) {
errors.push('Wiadomość musi mieć co najmniej 10 znaków');
}
// zamiast { isValid, errors } zwracamy { success, issues }
return {
  success: errors.length === 0,
  issues: errors
};
}

function validatePhone(phone) {
  const regex = /^\+?[0-9\s\-]{7,15}$/;
  return regex.test(phone);
}

function validatePassword(password) {
  if (
    typeof password !== 'string' ||
    password.length < 8 ||
    !/[A-Z]/.test(password) ||      // wielka litera
    !/[0-9]/.test(password) ||      // cyfra
    !/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password) // znak specjalny
  ) {
    return false;
  }
  return true;
}

module.exports = { validateForm, validatePhone, validatePassword};