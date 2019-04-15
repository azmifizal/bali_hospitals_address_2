# Bali hospital address

### Intro
[PORTO] Graphql API of hospital address in Bali, made with node js, express js, graphql and mongo db.
Data source: http://sirs.yankes.kemkes.go.id/rsonline/report/

### Routes
| Method | Route | Purpose | Need token | permission |
| --- | --- | --- | --- | :---: |
| POST | `/auth/login` | login | No | all users |
| GET | `/auth/logout` | logout | No | all users |
| GET | `/v3/user/who` | get user data | No | all users |
| GET | `/v3/users` | get all users | Yes | all users |
| GET | `/v3/users/:id` | get user by id | Yes | admin or user it self |
| POST | `/v3/user/reg` | register new user | No | all users |
| PATCH | `/v3/users/:id` | update user by Id | Yes | admin or user it self |
| DELETE | `/v3/users/:id` | delete user by Id | Yes | admin or user it self |
| GET | [`/v3/hospitals`](https://balihospitaladdress.herokuapp.com/v3/hospitals) | get all hospital | Yes | all users |
| GET | `/v3/hospital?search=:key` | get hospital address by keywords | Yes | all users |
| GET | `/v3/hospital/:id` | get hospital address by Id | Yes | all users |
| POST | `/v3/hospital` | send new hospital data | Yes | only admin |
| PATCH | `/v3/hospital/:id` | edit hospital by Id | Yes | only admin |
| DELETE | `/v3/hospital/:id` | delete hopital by Id | Yes | only admin |

### Demo
<!-- [balihospitaladdress.herokuapp.com](https://balihospitaladdress.herokuapp.com/)  -->
soon!

### To run this app locally :
* Clone this repo
* Run `npm install`
* Run `npm run start`
* Open browser and server will be in `http://127.0.0.1:4000/`

### To access the route
You need jwt token to access several route, first go to `^^` to register your user account, send a body json with name, email and password inside, after that you can loggin to `^^` with email and password as a body json and jwt token will provided. Put the token in headers as Authorization and you will have access the route.