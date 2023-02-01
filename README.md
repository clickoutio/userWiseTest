# Userwise test Application

This project is just a test project to check how many people logs in. Is not a real application, so just don't copy code to your production application, or do it at your own risk.

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Configuration


### Configure credentials

The project connects to airtable to store the user data and NextAuth as authentication provider (including google as identity provider. see [this video](https://www.youtube.com/watch?v=A5ZN--P9vXM)). You need to provide some env var for the project to work.

```sh
To do this, create the following env vars in the `.env.local` file at the root of the project(see more info about [loading environmental variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)):

NEXT_PUBLIC_BACKEND_URL='/api'

AIRTABLE_API_KEY=

#Next auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=supersecret
GOOGLE_ID=
GOOGLE_SECRET=
```

**Note1**: Make sure you replace `NEXTAUTH_SECRET` with your own secret (you can generate a suitable string using `openssl rand -hex 32` on the command line).

## Run the sample

### Compile and hot-reload for development

This compiles and serves the Next.js app and starts the API server on port 3000.

```bash
npm run dev
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.
