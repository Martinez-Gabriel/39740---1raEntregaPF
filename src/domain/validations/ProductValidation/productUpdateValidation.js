import z from 'zod';

const productUpdateValidation = z.object({
  id: z.string().max(24),
  firstName: z.string().min(10).max(35),
  lastName: z.string().min(10).max(35),
  email: z.string().email(),
  age: z.number(),
});

export default productUpdateValidation;
