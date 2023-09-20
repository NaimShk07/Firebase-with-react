# Firebase

- make account in firebase and make one project
- ```
  npm install firebase
  ```
- firebase will give you some piece of code when you will creating your project ,make one config file copy paste that code into that file
- ```
  npm install -g firebase-tools
  ```

## Authentication

- authentication with email password

1. import getAuth > in config file > put app inside it > store it in a variable > export
2. import auth in another file > import createUserWithEmailAndPassword
3. onclick run this imported funtion and give auth ,email,pass in parameter

- authentication with google email

1. import googleauthprovider > store it in a variable with **new** keyword > export
2. import the variable in another file > import signinwithpopup
3. onclick call signinwithpopup function with auth,variable inside it

## Database

