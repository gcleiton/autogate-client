import { useEffect, useState } from 'react'

import { WindowUtils } from '../utils'

export const useErrors = () => {
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    if (errors.length > 0) {
      WindowUtils.scrollToTop()
    }
  }, [errors])

  const addError = (message: string) => {
    if (!errors.includes(message)) {
      setErrors([...errors, message])
    }
  }

  const clearErrors = () => {
    setErrors([])
  }

  return {
    errors,
    setErrors,
    addError,
    clearErrors
  }
}
