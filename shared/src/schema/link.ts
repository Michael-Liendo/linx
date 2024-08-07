import { z } from 'zod';

const linkSchema = z.object({
  url: z.string().url(),
  shorter_name: z.string().max(20),
});

export default linkSchema;
