import z from 'zod'

export const signUpSchema = z.object({
  name: z
    .string({
      message: 'Invalid name',
    })
    .min(3, {
      message: 'Name must be at least 3 characters',
    }),
  contact: z
    .string({
      message: 'Invalid contact',
    })
    .min(11, {
      message: 'Contact must be at least 11 characters',
    }),
  email: z
    .string({
      message: 'Invalid email',
    })
    .email({
      message: 'Invalid email',
    }),
  password: z
    .string({
      message: 'Invalid password',
    })
    .min(8, {
      message: 'Password must be at least 8 characters',
    }),
})

export type SignUpData = z.infer<typeof signUpSchema>
