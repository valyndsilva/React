## Scripts Used:

- npx create-react-app react-register-form-validation-axios-submission
- npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

- Step 1: React JS Form Validation | Axios User Registration Form Submit
- Step 2: React User Login and Authentication with Axios
- Step 3: React Protected Routes | Role-Based Authorization | React Router v6
- Step 4: React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios

JWT(JSON Web Tokens):
JWT is sort of a User ID issued after initial user authentication takes place.
When user completes their login process and they are authenticated, the rest api issues the client application an "access token" and "refresh token".
Access Token = Short Time (Ex:5-15mins) and Refresh Token = Long Time(Ex: Hours or Days).

Hazards of JWT: XSS:Cross-Site Scripting and CSRF:Cross-Site Request Forgery.

Access Token: Our API sends and receives the access token as JSON data. To avoid hazards like XSS and CSRF it's recommended for frond-end client applications to only store access tokens in memory(current app state) so they are automatically lost when the app is closed. Don't store in local storage or cookie.

Refresh Tokens: Our API will issue refresh tokens in an httpOnly cookie which is not accessible by JavaScript. The refresh token MUST have an expiry at some point that makes a user to login again. Refresh token should NOT have the ability to issue new Refresh Tokens as it will grant indefinite access if the refresh token falls into the wrong hands.

Access Token (AT): is issued at Authorization. Client app can access the REST APIs protected routes with the access token until it expires.
The API verifies the access token with middleware everytime the access token is used to make a request. When the access token expires the users app will have to send the refresh token to the APIs refresh endpoint to gt a new access token.

Refresh Token (RT): is issued at user authorization. The REST APIs refresh endpoint will verify the token and cross-refrence the refresh token in our database
too. Storing a refrence to the refresh token in e database will allow RT to be terminated early if the user decides to logout. RT need to be allowed to expire and logout so indefinite access cannot be gained.
