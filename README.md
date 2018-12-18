# Geckos-Team-19

## Set database connection
* Create .env config file
```
cp .env-sample .env
```

* Edit .env and change all 'change_me' strings to  valid values

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
