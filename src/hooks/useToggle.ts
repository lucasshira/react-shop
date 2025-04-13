import { useState, useCallback } from "react"

interface UseToggleProps {
  initialValue: boolean
}

export function useToggle({ initialValue }: UseToggleProps) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(prev => !prev)
  }, []);

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return { value, toggle, setTrue, setFalse }
}