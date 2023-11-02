export const validateField = (field: Field, authForm: AuthForm) => {
  authForm.errors[field] = !authForm[field] ? `${field} is required` : '';
}