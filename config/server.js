module.exports = ({ env }) => ({
  host: env("HOST", ""),
  port: env.int("PORT"),
  url: env("", ""),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", ""),
    },
  },
});
