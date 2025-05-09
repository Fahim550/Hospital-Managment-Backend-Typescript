import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALT_ROUND,
  jwt_access: process.env.JWT_ACCESS_SECRET_KEY,
  jwt_refresh: process.env.JWT_REFRESH_SECRET_KEY,
  jwt_reset: process.env.JWT_RESET_SECRET_KEY,
  jwt_access_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_in: process.env.JWT_REFRESH_EXPIRES_IN,
  node_env: process.env.NODE_ENV,
  reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
  smtp_auth_user: process.env.SMTP_AUTH_USER,
  smtp_auth_pass: process.env.SMTP_AUTH_PASS,

  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
};
