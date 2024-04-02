# Microfrontend + Turbo + Vite - Monorepo

This is a small POC which combines [Turbo repo](https://turbo.build/repo) and [Vite plugin federation](https://github.com/originjs/vite-plugin-federation) in order to hopefully provide a better alternative to (the [deprecated](https://github.com/single-spa/single-spa/issues/1070)) [single-spa](https://single-spa.js.org/).

## Requirements

- [pnpm](https://pnpm.io/) is the package manager used in this project.

## Usage

Run `pnpm dev` so start both applications, here you will find a host and a remote app. 

- The host app is just a simple shell for the remote(s) with layout and navbar from MUI.
- The remote is using Tailwind.
- The profile is using mui/emotion and zustand 
- Are using vite (rather the CRA)

There is an example to use custom events to communicate microfrontends and share state with zustand.

Pending: configure env variables to be able to infer the URLs from each module.

## Limitations

- For now, only the host can start in development mode, the remote apps are meant to use a production build in order to generate a `remoteEntry.js`.
- I haven't gotten the shell to detect when a remote has undergone changes, so you need to reload the page.
- An ideal workflow (for now), would be to run your remote in development (standalone) and just let the shell do it's job to wrap it.
