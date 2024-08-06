import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  XAMPSON: z.string(),
})

export const env = envSchema.parse(process.env)
