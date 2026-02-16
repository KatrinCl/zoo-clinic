import rateLimit from 'express-rate-limit'

export const adminLoginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 минут
  max: 5,                  // 5 попыток
  message: {
    success: false,
    message: 'Слишком много попыток. Попробуйте позже.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})
