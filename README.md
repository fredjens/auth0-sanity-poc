# Auth0 and Sanity

_Proof of Concept_

- [Auth0](https://auth0.com) for authentication
- [Sanity](https://sanity.io) for user data

##### Install

```
1. Add your own .env (from .env.examplef)
2. Add your Sanity credentials to sanity/sanity.json
3. yarn install
```

##### Run

```
yarn dev 🚀
```

## The flow

1. The frontend request login directly from Auth0.
2. The frontend reciews a callback containing the session token.
3. The frontend calls our backend using the session token.
4. The backend validates the token using the Auth0 API.
5. If the user is valid we search Sanity to find the user.
6. Return the userdata 🎉

## Applications

### /frontend

The frontend is the [offical Auth0 react sample app](https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login). The only thing added is a hook that calls our `/backend` which again calls Sanity to get the user data.

### /backend

The backend is a Node/Express application, it has one route that take a request and returns the userdata is the user is authenticated correctly:

### /sanity

The Sanity config and Studio. We are using a private dataset for the userdata and an API key.
