# ![logo](https://ezsystems.net/images/logo1337.svg) Coding Challenge

> author: Cristian Mocho on 16/05/2022

## Setting up

The project was made using the following:

- Yarn
- Express
- CORS and Helmet (basic security setup)
- Puppeteer
- DotEnv

To properly see this project running, it requires a quick set-up on the developer side. Some environment variables are required:

```bash
NODE_ENV = development

API_SERVER_PORT = 8085 # (or whatever port you prefer)

JWT_SECRET = <secret>
JWT_EXPIRATION = "1h"
```

The easiest way to create a "random" secret for the JWT is to open a `node` terminal and type the line below:

```javascript
require('crypto').randomBytes(32).toString('hex');
```

Example:

```javascript
$ node
Welcome to Node.js v17.9.0.
Type ".help" for more information.
> require('crypto').randomBytes(32).toString('hex')
'5542583fb7b99ea12b8cb19900d7c58eeb20db3955907e7512f8af17d97a1a59'
```

After downloading the project, install all the dependencies with `yarn`.

```bash
yarn
```

## Features

### API endpoints

This version of the API includes the following endpoints and features:

- `GET: /api/coworkers`, with pagination and filtering by name (using Regular Expressions)
- `GET: /api/coworker/:id`
- `POST: /api/coworker` for updating
- `PATCH: /api/coworker`, also for updating! [^1]

[^1]: The reason I decided to create an additional endpoint for updates is because the HTTP verb chosen for the challenge is not semantically correct.

### JWT Authentication

- `POST: /api/login`, validate the credentials and returns a token as plain text

### Data Persistence

On this version of teh application, the data is being persisted in a local JSON file.

## Documentation

A simple documentation of this API is provided at <https://something.som>, made with Postman.

## Public API

This API is available for testing at <https://api1337.ezsystems.net/>. There's a Postman Collection included in this project that you can import and easily use. The documentation for this API is also made with Postman, and it's available at <https://documenter.getpostman.com/view/10330941/Uyxkik6B>

I have a video on how to host Node/Express apps (or any other app for that matter) using NGINX and Certbot on a DigitalOcean VPS. I'm REALLY not a YouTuber, so I apologize for the lack of camera intimacy... 😂

<https://youtu.be/S_i30EChdNc>
