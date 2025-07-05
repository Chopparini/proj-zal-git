const { validateForm, validatePhone  } = require('./utils');

describe('Form validation', () => {
test('should pass validation for valid data', () => {
const result = validateForm('Jan Kowalski', 'jan@example.com', 'To jest przykładowa wiadomość');
expect(result.success).toBe(true);
expect(result.issues).toHaveLength(0);
});

test('should fail validation for short name', () => {
const result = validateForm('J', 'jan@example.com', 'To jest przykładowa wiadomość');
expect(result.success).toBe(false);
expect(result.issues).toContain('Imię musi mieć co najmniej 2 znaki');
});

test('should fail validation for invalid email', () => {
const result = validateForm('Jan Kowalski', 'nieprawidlowy-email', 'To jest przykładowa wiadomość');
expect(result.success).toBe(false);
expect(result.issues).toContain('Nieprawidłowy adres email');
});

test('fails when message is too short (covers line 11)', () => {
    const res = validateForm('Jan', 'jan@example.com', 'krótko');
    expect(res.success).toBe(false);
    expect(res.issues).toContain('Wiadomość musi mieć co najmniej 10 znaków');
  });

});

describe('Phone validation (covers lines 21-22)', () => {
  test('accepts valid phone number', () => {
    expect(validatePhone('+48 123 456 789')).toBe(true);
  });

  test('rejects invalid phone number', () => {
    expect(validatePhone('abc')).toBe(false);
  });
});