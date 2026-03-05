import { createServerFn } from '@tanstack/react-start'

export const getServerTime = createServerFn({ method: 'GET' }).handler(
  async () => {
    return {
      timestamp: new Date().toISOString(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
  }
)
