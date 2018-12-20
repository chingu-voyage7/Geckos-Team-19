# Geckos-Team-19

## Set database connection
* Create .env config file
```
cp .env-sample .env
```

* Edit .env and change all 'change_me' strings to  valid values

## Create project database
To unify database name across all users, it's recommended to use one database name. To achive this, it is needed to have fully setup postgres db or create the db manualy.

Creates `nonprofit` database
```
yarn create-db
```

When any error appears, the db is not configured properly. Troubleshooting steps can be found here: https://www.postgresql.org/docs/11/tutorial-createdb.html.

_Or you can simply create the db manually..._


## Automatic project setup
* **Recomended procedure**

This will install all dependencies, run migrations and start the server - all in one command
```
yarn setup
```
*OR*
```
npm run setup
```

## Manual project setup
* Alternatively you can run commands one by one

### Installing dependencies
```
yarn
```
*OR*
```
npm install
```

### Running migrations
```
yarn migrate
```
*OR*
```
npm run migrate
```

### Running the server
* Starting the server
```
yarn server
```
*OR*
```
npm run server
```
