import z from 'zod';

const userSaveValidation = z.object({
  firstName: z.string().min(10).max(35),
  lastName: z.string().min(10).max(35),
  email: z.string().email(),
  age: z.number(),
});

export default userSaveValidation;
