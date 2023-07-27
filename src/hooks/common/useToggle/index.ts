import { useState } from 'react'

const useToggle = (
  initialValue: boolean,
): [boolean, (value: boolean | undefined) => void] => {
  const [value, setValue] = useState<boolean>(initialValue)

  function toggleValue(value: boolean | undefined): void {
    setValue((currentValue) =>
      typeof value === 'boolean' ? value : !currentValue,
    )
  }

  return [value, toggleValue]
}

export { useToggle }
