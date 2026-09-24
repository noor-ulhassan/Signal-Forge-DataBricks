import { config as loadEnv } from "dotenv";
import { z } from "zod"
import path from "path";
import { fileURLToPath } from "url";

const backendDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
);
loadEnv({ path: path.join(backendDir, ".env") });
const envSchema = z.object({
    PORT: z.coerce.number().default(4000),

});

export const env = envSchema.parse(process.env);

