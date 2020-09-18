import { DependencyList, useEffect } from 'react'
import useTimeoutFn from '../useTimeoutFn/index'

export type UseDebounceReturn = [()=> boolean| null, ()=> void]

function useDebounce(fn, ms: number, depts:DependencyList) {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  useEffect(reset, depts)

  return [isReady, cancel]
}

export default useDebounce