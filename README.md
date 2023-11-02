# Book.io Signup/Login Wizard

## 🥞 Stack
- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Dart SCSS](https://sass-lang.com/)
- [Vitest](https://vitest.dev/)

## Summary
The general thinking behind the composition of this demo application is to demonstrate the ability to not only create reusable components, but have the components remain farely simple and independent of other components.

Ideally the Pages will handle interacting directly with APIs or stores, whereas the components will accept props and emit events.

Additionally, we have services found in `api/`, `middleware`, `composables`, and `utils`.

### Composables
How we handle state as suggested by Nuxt documentation. Though Pinia is another viable option -- I tried to go with the suggested path and considering some hiccups I have experienced with Pinia and losing Vue reactivity.

### Middleware
A contrived example of how we can utilize a `composable` to determine routing of a logged in user.

### API
A set of reusable functions specifically grouped for working with the API provided.

### Utils
Where we put reusables that can be used anywhere and might just prevent wasting time rewriting bits over and over again.

**Note:**
You will need to run the API server for this project to work.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:8000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

## Test

```bash
yarn test
```