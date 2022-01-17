# RUN PROJECT

- npm install
- npm start

# App.js

- Routing is being configured in the file

# index.js

- Root file of APPLICATION, being Wrapped by the useContext (CoinProvider)

# CoinProvider.js

- Where the useContext is defined, all calls that happens at the beginning of the APPLICATION from getUser to getCoins to getSingleCoins
- all Hooks defined in this file are displayed Globally rouund the APPLICATION .
- values from Hook are EXPORTED to the APPLICATION since the index.js file is Wrapped by the useContext (CoinProvider).
- CoinProvider makes use of REPOSITORY for API calls.

* **AuthRepository()**
* **CoinRepository()**

## Repositories

Original Place where the API is queried. We have a few examples which are:

- AuthRepository()
- CoinRepository().

It makes use of two files to configure the API call. Namely:

- **NetworkProvider**
- **NetworkConfig**

# AuthRepository.js

The AuthRepository() currently has functions

- **AuthRepository** for POST login
- **UserRepository** for GET current loggedIn user

# CoinRepository.js

The CoinRepository() currently has functions

- **CoinRepository** GET 10 coins
- **SingleCoinsRepository** GET singleCoin transaction

# NetworkProvider.js

All BASE_URL, API endpoints, Links etc.. are defined in here.
And they are being exported for use.

# NetworkConfig.js

- Headers for AXIOS is been SET
- Token is extracted from the localStorage to set Authentication credentials.
- POST, GET, DELETE & UPDATE call are defined in this file.

# Session_Manager.js

The localStorage is is set from this file after response from Login() is gotten.

- SessionManger() is run to take res and set localStorage values.

## FLOW

- Login.js
  **_UI_**
- - _handleSubmit()_
- - _doSubmit()_
    ...
- LoginBloc.js
  _**LOGIC**_
- - _AuthRepository(data)_
- - _SessionManager()_
    ...
- AuthRepository.js
  _**PASS PARAMS, ...body**_
- - _AuthRepository(params)_
- - _UserRepository()_
    ...
- Network-config.js
  **POST || GET || DELETE || UPDATE**
  ...
- Network_Provider.js
  **ENDPOINT URLS**

# STEPS TO SET LOGIN

```
- CoinProvider.js -> index.js -> App.js -> Auth ->
- bloc -> AuthRepository.js -> AuthRepository() -> NetworkConfig() -> NetworkProvider()
- ui -> doSubmit() <- LoginBloc.js
```

# App_Route.js

<!-- @ withdraw -->

{{URL}}/api/v1/mycoins
{
"owner": "61048b46828ad00015cd407b", userId
"coinAddress": "61048c14828ad00015cd407d", walletId
"walletAddress": "61048c14828ad00015cd407d", //single myCoin Id
"transactionType": "withdrawal",
"amount": 100
}

<!-- CREDIENTAILS -->

photo: http://res.cloudinary.com/ba-consulting/image/upload/v1627688953/images/y6sgs54yoojpyckrujye.jpg
idCard: http://res.cloudinary.com/ba-consulting/image/upload/v1627689016/images/hnedupgsdwzxcfl2nrkb.jpg
