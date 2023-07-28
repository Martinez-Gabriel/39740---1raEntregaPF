import z from 'zod';

const productUpdateValidation = z.object({
  title: z.string().min(3).max(35),
  description: z.string().min(3).max(35),
  code: z.string(),
  price: z.number(),
  status: z.boolean(),
  stock: z.number(),
  category: z.string().min(3).max(35),
});

export default productUpdateValidation;
