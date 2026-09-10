class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// PORT=8000
// MONGO_URI=mongodb+srv://satwik:.lly3ya1.mongodb.net
// CORS_ORIGIN=*
// ACCESS_TOKEN_SECRET=Hds0PvZAV9dHiHM9P2SSqbfRugfgHXMx6rkvwpTYmkKA1cBoZq
// ACCESS_TOKEN_EXPIRY=1d
// REFRESH_TOKEN_SECRET=shsGA0tJzzIPP3a8bYBSzOZjY4xEpom2bTtQujYsqKcfcI4J7q
// REFRESH_TOKEN_EXPIRY=10d
// CLOUDINARY_CLOUD_NAME=pqcrk
// CLOUDINARY_API_KEY=11794899277
// CLOUDINARY_API_SECRET=YIbZ7S8FmEv4yjmlJMWHch
