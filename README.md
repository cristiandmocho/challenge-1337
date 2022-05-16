# <svg width="100" height="35" viewBox="0 0 100 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M83.9883 9.36963V13.4347H95.4257L84.3272 33.8754H88.9021L100.001 13.4635V9.36963H83.9883Z" fill="#0c0c91"></path><path d="M10.4208 1.18213H6.41062L0.847218 6.8617L2.88054 10.552L6.41062 6.94819V21.594H0V25.6879H16.0124V21.594H10.4208V1.18213Z" fill="#0c0c91"></path><path d="M24.0039 13.3771L28.7201 18.1917C25.9525 19.4891 24.0039 22.3433 24.0039 25.6588C24.0039 30.1852 27.5905 33.8178 31.996 33.8178C36.4015 33.8178 39.9881 30.1563 39.9881 25.6588H35.9779C35.9779 27.9076 34.1705 29.7527 31.9678 29.7527C29.765 29.7527 28.0141 27.9364 28.0141 25.6588C28.0141 23.41 29.8497 21.5649 32.0525 21.5649L34.0858 17.9034L29.652 13.3771H40.0163V9.31201H24.0039V13.3771Z" fill="#0c0c91"></path><path d="M60.0116 5.24723H70.3759L65.9421 9.77358L67.9754 13.435C70.1782 13.435 72.0138 15.2802 72.0138 17.5289C72.0138 19.7777 70.2064 21.6228 68.0037 21.6228C65.8009 21.6228 63.9935 19.7777 63.9935 17.5289H59.9833C59.9833 22.0553 63.5699 25.6879 67.9754 25.6879C72.381 25.6879 75.9675 22.0265 75.9675 17.5289C75.9675 14.2135 74.0189 11.3593 71.2513 10.0619L75.9675 5.24723V1.15332H59.9551V5.24723H60.0116Z" fill="#0c0c91"></path><path class="divider" d="M48.0098 35L51.9917 33.8756V0L48.0098 1.09555V35Z" fill="#05E273"></path></svg> Coding Challenge

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
