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

## Database(crud)

- make firestore database in website
- import getfirestore from firebase/firestore
- put app in getfirestore and store in a variable(db) and export
- import collection (the main data or reference), call the collection, store it in a variable(ref)
- collection take two parameter which is variable and id
- const collectionRef=collection(variable(db),id(product))

### Read

- to read the data we need **getDocs** import it
- it will take **ref** as parameter store in a variable


```
  const data = await getDocs(prodCollectionRef);
  const filteredData = data.docs.map((value) => ({...value.data(),id: value.id,
  }));

```

### Create

- to create the mean to send the data in database
- use **addDoc** it will take two thing reference and data(variable) in form of object

```
await addDoc(prodCollectionRef, sendproduct);
```

### Update

### Delete
