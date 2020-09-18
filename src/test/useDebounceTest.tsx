import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { Input } from 'antd'


const Demo = ()=> {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  useDebounce(()=> {
    if (value) {
      console.log(1)
    }
  }, 500, [value])
  return (
    <div>
      <p>UseDebounce Demo</p>
      <Input value={value} onChange={(e)=> setValue(e.target.value)}/>
    </div>
  )
}
export default Demo