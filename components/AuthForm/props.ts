export const AuthProps = {
  authForm: {
    type: Object as PropType<AuthForm>,
    default: null,
    required: true,
  },
  books: {
    type: Array as PropType<Book[]>,
    default: [],
  },
  formType: {
    type: String,
    default: 'signup',
    required: false,
  }
}