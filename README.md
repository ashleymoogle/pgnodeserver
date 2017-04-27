# pgnodeserver

### node api with postgre connector


---

### Start your fucking guide already

As a backend developper there are two cases that you will usually meet when building an API.
1) I'm receiving a request and answering to it through my API
2) I have a long-polling job such as a CRON task

This guide aims to answer to the 1).

My arbo > Your Arbo
---


Nothing much new under the sun here.

*Note: The `bin` folder is for CLI tools that you might need to call either from one of your files or from your `makefile` and/or bash.*

```
bin
--| clean-database.js
lib
--| logger.js
--| config.js
api
--| server.js
--| cactuar
--|--| index.js
--|--| model.js
--|--| controller.js
--| chocobo
--|--| index.js
--|--| model.js
--|--| controller.js
```

Naming like a hero
---

### Imports and Exports
Naming conventions go a long way to help readability through the code. I don't think there is a best system per se but here's how I mostly do.

Ideally, always have an `index.js` to import and export **default** to and from a dir.

Example: 
```
`export {default as model} from './model.js';`
`export {default as controller} from './controller.js';`
```
```
`export * from './model.js';`
`export * from './controller.js';`
```
Those exports will be resoved as `import {model, controller} from '../my-model';`

Default exports usually make for very good module autocompletion on proper IDEs. Which is a gain of time. Not to mention how clean and readable they make your code.

### Models
JS is `camelCase` so let's make the database outputs über-recognizable so you do not mix-up your variables. Since models are always `snake_cased` in SQL databases:
1) Keep the snakecased exit from the database. 
2) Don't keep it, it makes for cleaner code.

Secret: I picked (1). You'll know the difference between that `user_id` and this other `userId`.
Easy convention to know what comes from the database and whatnot.

PostgreSQL models should always be singular except for reserved words (`user` is reserved, for instance).
