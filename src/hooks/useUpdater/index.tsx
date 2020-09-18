import React, { useReducer } from 'react'

const updateReducer = (num) => (num + 1) % 1_000_000

const useUpdater = () => {
  const [_, update] = useReducer(updateReducer, 0)
  return update as () => void
}
export default useUpdater