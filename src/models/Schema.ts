import { z } from 'zod';

export const Schema = z.object({
  name: z.string().min(3).max(20),
  age: z.number(),
  email: z.string().email(),
});
