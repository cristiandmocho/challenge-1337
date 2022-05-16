# ![logo](https://gist.github.com/cristiandmocho/13706fe86d464784735e3e62df0c616f#file-logo-svg) Coding Challenge

> author: Cristian Mocho on 16/05/2022

## Setting up

The project was made using the following:

- Yarn
- Express
- CORS and Helmet (basic security setup)
- MySQL
- Puppeteer
- DotEnv

To properly see this project running, it requires a quick set-up on the developer side.

After downlaoding the project, install all the dependencies with `yarn`.

```bash
yarn
```

The script to create the database and table structure is included in this repository, although the database is not in sue on this first version! So no need to set up or run it.

## Features

This version of the API includes the following endpoints and features:

- `GET: /api/coworkers`, with pagination and filtering by name (using Regular Expressions)
- `GET: /api/coworker/:id`
- `POST: /api/coworker` for updating [^1]
- `PATCH: /api/coworker`, also for updating!

[^1]: The reason I decided to create an additional endpoint for updates is because the HTTP verb chosen for the challenge is not semantically correct.

## Documentation

A simple documentation of this API is provided at <https://something.som>, made with Postman.
