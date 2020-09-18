import React from 'react'
import { DimensionDemo } from './test/useDimensionsTest'
import UseTimeoutFn from './test/useTimeoutFnTest'
import UseDebounce from './test/useDebounceTest'

function Heading() {
  console.log(111111)
  return (
    <div>
      <DimensionDemo />
      <UseTimeoutFn />
      <UseDebounce />
    </div>
  )
}
export default Heading