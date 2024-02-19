# Online Contact Management System

## End-Points

`GET` Get all Users
> https://localhost:8080/api/v1/users

`GET` Get User by ID
> https://localhost:8080/api/v1/users/{id}

`POST` Create User
> https://localhost:8080/api/v1/users

`PUT` Update User
> https://localhost:8080/api/v1/users/{id}

`DELETE` Delete User by ID
> https://localhost:8080/api/v1/users/{id}

## User Model

* User_id (Primary Key)
* Name
* Phone Number
* Email

## Database

Database used here is H2-Database. You can access the admin panel from `https://localhost:8080/h2-console`

> Username and Password to login
> - username: sabi
> - password: sabi12