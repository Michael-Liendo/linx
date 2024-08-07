import { z } from 'zod';

const userSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email().describe('unique'),
  password: z.string(),
});

export default userSchema;
