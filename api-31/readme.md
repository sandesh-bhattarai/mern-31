Mongodb Pwd: 9Ml3WBEOuGK9ncRX

# Server Side API Development 
## Framework 
- Express js 

# API 
- Application programming Interface 
- that connects your Frontend applications with BE server 
- URL - Endpoints

## CRUD Operation 
- Create
    - post method
- Read 
    - get method
- Update 
    - put/patch method
- Delete
    - delete method


## Design Pattern 
- MVC Pattern 
    - Model-View-Controller Pattern 
        - Model => DB Structure/ data - mongodb
        - View => Presentation / display - react 
        - Controller => logic / Business logic - express 

## Express Feature 
- Routing 
    - Endpoints defined on BE server  API
        => Listens for the request 
        => Responds to the client
    - RESTful services 
        => 5 methods to handle request 
            - get, post, put, patch, delete
    - triggers the action based on url and method (Controller)



## MVC Flow                            -------------------------------> 
User  ----- API Request -----> Routing ------ middleware/optional ----> Controller <------ Service <-----> Model ----> Real DB
Agent        login, post      url, method     validation                Business logic
                                                                            ------- Respond to Client ---> JSON response
                                                    -------------------- Respond to client --------------> JSON repsonse


## Ecommerce 
CRUD => create, read, update, delete
- Auth
    - login 
    - register 
    - activate
    - forget 
    - reset 
    - logout
- User
    - CRUD
- Products
    - CRUD
- Category
    - CRUD
- Brand
    - CRUD
- Orders 
    - CRUD
- payment/Transaction
    - CRUD


## MVC patten 
### Genral 
    - src/
        - config/
            => all the configuration files 
        - routes/
            => Modulear routes
            e.g auth.routes.js, user.routes.js, ....
        - middlewares/
            => 
        - controllers/
            => e.g auth.controller.js, ....
        - services/
            => e.g. auth.service.js, ...
        - models/
            ..... 
        
### Modular
    - src/
        - config/
            => router.config.js
        - modules/
            - auth/
                -> auth.routes.js
                -> auth.middleware.js
                -> auth.controller.js
                -> auth.service.js
                -> auth.model.js
                -> index.js ======> expose point
            - user/
            - brand/
            - category/
        - services/
        - middlewares/
        
==== Nest js 

## Class Work
-> Setup a  new/fresh express project. 

-> Create a modular route for some request.

### Steps: 

a. Create a directory at any location you want.

b. Initialize the proejct with 

    ```npm init -y``` 

c. Install packages using 

    ```npm i express```

d. Create a file ```index.js``` at your root location

e. Install nodemon as global package, only if not installed previously

    ```npm i nodemon -g```

f. modify your ```package.json``` with the following in  script: 

    ``` {```

    ```    ...,```

    ``` "script": { ```

    ```        ..., ```

    ```       "start": "nodemon ./index.js" ```

    ```}```

    ```}```

g. Setup node server in your ```index.js```

    ```const http = require("http");```

    ```const server = http.createServer()```

    ``` server.listen(9003, '127.0.0.1', (err) => { ```

    ``` if(!err) { ``` 

    ```     console.log("Server is running on port 9003")```

    ```     console.log("Press Ctrl+c to end server execution")```

    ```}```

    ```})```

h. Start your server 

    ``` npm start ``` 

    You should get some oputput like: 

    ``` Server is running on port 9003 ```

    ``` Press Ctrl+c to end server execution ```

# Setting express Application 
1. create a folder ``` src ``` in your project root directory
2. create a folder ``` config ``` inside ``` src ``` directory 
3. Create ``` express.config.js ``` file inside ```/src/config```
4. setup Express application in ``` express.config.js ```: 
    
    ``` const express = require("express");```
    
    ``` const app = express(); ```
    
    ``` module.exports = app; ```

5. import ```app``` in your ```index.js```. 

    ```./index.js```

    ```const http = require("http")```

    ``` const app = require("./config/express.config")```

6. load ``` app``` in your server 

    ``` ./index.js```

    ``` const server = http.createServer(app);```

7. reload your server and run ``` http://localhost:9003``` in your postman. 

# create a route for testing 
1. In your ``` express.config.js ``` file add below ``` const app = express()```

    ```app.use('/health', (req, res, next) => { ```

        ```res.json({```

            ```result: "I am inside healthcheck",```

            ```meta: null,```

            ``` message: "Server run success",```

            ```status: "SERVER_IS_RUNNING"```

        ```})```

    ```})```

2. Check the url ```http://localhost:9003/health``` in your postman

### HW 
====> you should be able to take some json content as a request body

===> Validate the data and throw some exception if invalid data are there 

===> Upon validation success, send some json response to the client 

// Hw/cw
## Setup a git repo, and assign collaborator to me - @sandesh-bhattarai


# Selection of the db 
a. Client 
    - mongodb cloud atlas
    - nosql 
    - non-relational dbms
    
mongodb uses json format


host        ===> localhost, atlas 
port        ===> 27017
protocol    ===> mongodb, mongodb+srv 
username    ===> none, db acesss username
password    ===> none, dbaccess password
dbname      ===> project based


mongodb://127.0.0.1:27017/
dbname => test


// users 
    age: number 
    ===> having age > 18
    db.users.find({})

    {age: 18}

#### filter 
## {key: value}   ===> key = 'value'

## {$operation:{key: value}}   ===> key $operation "value"

{$gt: {age: 18}} => age $gt 18 => age > 18 

## {key: {$operation: value}} 

[18,15, 19]
{age: {$in: [18,15,19]}} => age in (18,15,19)

$and, $or, $gt, $gte, $lt, $lte, $in, $nin, $eq, $ne

(x or y) and (y or z)

{
    $and: [
        {
            $or: [
                {x},
                {y}
            ]
        },
        {
            $or: [
                {y},
                {z}
            ]
        }
    ]
}



==> Active db 
==> table/collections



user, 
customer 

brand 
    slug

        facebook.com/username
        
category 
product


banners/
    _id 
    name
    image 
    link 
    status 
    startDate
    endDate
    createdBy
    updatedBy 
    createdAt
    updatedAt 