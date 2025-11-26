import z from 'zod'

const dateRegex = /^\d{2}-\d{2}-\d{4}$/

export const loanRequestSchema = z.object({
  equipmentId: z
    .string({
      message: 'Invalid equipment ID',
    })
    .min(1, {
      message: 'Equipment ID is required',
    }),
  startDate: z.string({
    message: 'Invalid start date',
  }),
  returnDate: z
    .string({
      message: 'Invalid return date',
    })
    .regex(dateRegex, {
      message: 'Date must be in format DD-MM-YYYY',
    })
    .refine(
      (date) => {
        const [day, month, year] = date.split('-').map(Number)
        const returnDate = new Date(year, month - 1, day)
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        return returnDate >= today
      },
      {
        message: 'Return date must be today or later',
      }
    ),
})

export type LoanRequestData = z.infer<typeof loanRequestSchema>
