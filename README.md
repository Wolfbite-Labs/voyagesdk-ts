# VoyageSDK - TS/JS

This is the TypeScript/JavaScript SDK for Packbase and other *base projects. This SDK is used by Packbase itself, so
everything that Packbase can do, you can do as well.

This can be used for any scope of project, including but not limited to;

- Third-party Packbase clients
- Bots (user interactions, cron jobs, specific auto mods, etc.)

> [!CAUTION]
> This SDK is still in development and is not yet ready for production use. **Only email/password login is currently
> supported**.

## Development

> [!NOTE]
> Due to the API types relying on pulling from a private server repository, only Wildbase staff can contribute to the
> schema.

This project is built using [Bun](https://bun.sh/).

```bash
# Install dependencies
bun install

# Wildbase staff: Pull the latest schema. Ensure `GITHUB_TOKEN` is set in your environment - either in your shell or in a `.env` file.
# Also ensure that the token only has read access to the server repository.
bun run pull

# Test
bun test

# Build the project
bun build
```

You should now have a `dist` folder with the compiled code.
