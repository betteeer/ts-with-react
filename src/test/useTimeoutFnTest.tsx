import React, { useState, useCallback } from 'react'
import useTimeoutFn from '../hooks/useTimeoutFn/index'
const Demo = ()=> {
  const [state, setState] = useState('还没被调用')

  const fn = ()=> {
    setState('调用了')
  }

  const [isReady, cancel, reset] = useTimeoutFn(fn, 5000)
  const cancelButtonClick = useCallback(() => {
    if (isReady() === false) {
      cancel()
      setState('取消了')
    } else {
      reset()
      setState('还没被调用')
    }
  },[])
  const readyState = isReady()
  
  return (
    <div>
      <div>{readyState !== null ? '5秒后调用' : '被调用了'}</div>
      <button onClick={cancelButtonClick}>{readyState == false ? '取消' : '重新计时'}</button>
      <br />
      <div>状态： { readyState === false ? 'pending' : readyState ? '调用过了' : '取消了'}</div>
      <div>{state}</div>
    </div>
  )



}
export default Demo