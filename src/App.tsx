import React, { useState, useCallback, useEffect } from 'react'
// import { Button } from 'antd'
import styles from './App.scss'
const Local_key = '_todo_'
const App:React.FC = ()=>{
  const [todos, setTodos] = useState<Array<any>>([])

  // // 增加
  // const addTodo = useCallback((todo) => {
  //   setTodos((todos)=> [...todos, todo])
  // },[])

  // //删除
  // const removeTodo = useCallback((id)=> {
  //   setTodos((todos)=> todos.filter(v=> v.id !== id))
  // }, [])

  // //改变状态
  // const changeTodo = useCallback((id)=> {
  //   setTodos(todos => todos.map(v=> {
  //     return v.id == id ? { ...v, complete: !v.complete } : v
  //   }))
  // }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(Local_key) as string)
    setTodos(data)
  }, [])

  useEffect(()=> {
    localStorage.setItem(Local_key, JSON.stringify(todos))
  }, [todos])
  console.log(styles)
  return (
    <div className={styles.todoList}>
      11111
    </div>  
  )
}

export default App;
