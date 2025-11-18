import z from 'zod'

export const signInSchema = z.object({
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

export type SignInData = z.infer<typeof signInSchema>
