import { useState } from 'react'

type UseArrayReturn = {
  array: Array<any>
  set(value: any): void
  push(value: any): void
  filter(value: any): void
  update(index: number, newElement: any): void
  remove(index: number): void
  clear(): void
}

const useArray = (initialValue: Array<any>): UseArrayReturn => {
  const [array, setArray] = useState<Array<any>>(initialValue)

  function push(element: any): void {
    setArray((a) => [...a, element])
  }

  function filter(callback: any): void {
    setArray((a) => a.filter(callback))
  }

  function update(index: number, newElement: any): void {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  function remove(index: number): void {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length - 1)])
  }

  function clear(): void {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}

export { useArray }
