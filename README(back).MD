# Bali hospital address in Graphql

### #Intro
[PORTO] Graphql API of hospital address in Bali, made with node js, express js, graphql and mongo db.
Data source: http://sirs.yankes.kemkes.go.id/rsonline/report/

### #Demo
<!-- [balihospitaladdress.herokuapp.com](https://balihospitaladdress.herokuapp.com/)  -->
soon!

### To run this app locally:
#### 1) Clone this repo

```bash
  git clone https://github.com/assmuni/bali_hospitals_address_2.git
  cd bali_hospital_address_2
```

#### 2) Install all npm packages

```bash
  npm install
```

#### 3) Run the app
```bash
  npm run start
```

#### 4) Open the browser and Graphiql will be in `http://127.0.0.1:4000/`

### #To access the route
You need jwt token to access several query, first try to create a user account

#query
```graphql
  mutation($data: insertUser){
    addUser(data: $data){
      name,	
      email
    }
  }
```

#query variables
```graphql
  {
    "data": {
      "name": "your_name",
      "email": "your_email",
      "password": "your_password"
    }
  }
```
and you need login to get access token

#query
```graphql
  query($data: insertLogin){
    login(data: $data) {
      userId,
      token,
      permissionLevel
    }
  }
```

#query variables
```graphql
  {
    "data": {
      "email": "your_email",
      "password": "your_password"
    }
  }
```

#result
```graphql
  {
  "data": {
    "login": {
      "userId": "5cb3e5a10de5021e3f579370",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1Y2IzZTVhMTBkZTUwMjFlM2Y1NzkzNzAiLCJwZXJtaXNzaW9uTGV2ZWwiOjEsImlhdCI6MTU1NTI5NDQ3OX0.ELCUrpB9hb9uLFsW-FScSKvYc5-KHn3tOyqx77hjqeX",
      "permissionLevel": 1
    }
  }
}
```
now you have a token so put the token in HTTP headers as Authorization and you will have access the route (*read documentation section on graphiql ^_^ ).
