import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  salt_round: process.env.SALT_ROUND,
  jwt_access: process.env.JWT_ACCESS_SECRET_KEY,
  jwt_refresh: process.env.JWT_REFRESH_SECRET_KEY,
  jwt_access_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_in: process.env.JWT_REFRESH_EXPIRES_IN,
  node_env: process.env.NODE_ENV,
};
