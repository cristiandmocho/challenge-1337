# 13|37 Coding Challenge

> author: Cristian Mocho on 15/05/2022

## Setting up

The project was made using the following:

- Yarn
- Express
- CORS and Helmet (basic security setup)
- MySQL
- DotEnv
- Docker

To properly see this project running, it requires a quick set-up on the developer side, especially the environment variables required to connect to the database (which were not included on the repository).

You can set your own variables, either by using a script, or by setting the variables manually. The required variables are as follow:

```bash
DB_SERVER_USER = user_1337
DB_SERVER_PASSWORD = Passw0rd#1337
DB_SERVER_HOST = <host>
DB_SERVER_PORT = <port>
```

The details to put on these variables depend on your local configuration (host and port). The database can be used from a Docker container. To set up the container for the database, run the following on your terminal (replacing your `port` and `root password` to what you desire):

```bash
docker run -p 3306:3306 --name mysql-docker -eMYSQL_ROOT_PASSWORD=<password> -d mysql:latest
```

The script to create the database and table structure are included in this repository, but you don't need to run them as tehy are executed automatically by the application.

## Online version

For presentation purposes, there's a version of this API running at <https://api1337.ezsystems.net/>.

## Documentation

A simple documentation of this API is provided at <https://something.som>
