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