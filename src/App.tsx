import React, { useState, useCallback, useEffect, memo, useRef } from 'react'
import { Input, Checkbox, Button } from 'antd'
import './App.css'
import styles from './App.scss'
const Local_key = '_todo_'
import { connect } from 'react-redux'
const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<any>>([])
  // 增加
  const addTodo = useCallback((todo) => {
    setTodos((todos) => {
      return [...todos, todo]
    })
  }, [])

  //删除
  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter(v => v.id !== id))
  }, [])

  //改变状态
  const changeTodo = useCallback((id) => {
    setTodos(todos => todos.map(v => {
      return v.id == id ? { ...v, complete: !v.complete } : v
    }))
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(Local_key) as string)
    setTodos(data || [])
  }, [])

  useEffect(() => {
    localStorage.setItem(Local_key, JSON.stringify(todos))
  }, [todos])
  return (
    <div className={styles.todoList}>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        changeTodo={changeTodo}
      />
    </div>
  )
}
type Props = {
  addTodo: (v: any) => void
}
const TodoInput: React.FC<Props> = memo(({ addTodo }: Props) => {
  const textValue: React.MutableRefObject<any> = useRef()
  const handleSubmit = (e) => {
    e.stopPropagation()
    const value = textValue.current.input.value.trim()
    if (!value.length) {
      return
    }
    addTodo({
      id: +Date.now(),
      content: value,
      complete: false
    })
    textValue.current.input.value = ''
    textValue.current.state.value = ''
  }
  return (
    <div className={styles.inputContainer}>
      <h1>TODO LIST</h1>
      <Input
        ref={textValue}
        placeholder="input todo"
        onChange={(e) => {
          textValue.current.input.value = e.target.value
        }}
        onPressEnter={handleSubmit}
        style={{ width: 300 }}
      />
    </div>
  )
})
type TODO = {
  id: number,
  content: string,
  complete: boolean
}
type ListProps = {
  todos: Array<TODO>,
  changeTodo: (id: number) => void,
  removeTodo: (id: number) => void
}
const TodoList: React.FC<ListProps> = memo(({ todos, changeTodo, removeTodo }: ListProps) => {
  return (
    <div className={styles.contentList}>
      {
        todos.map(item => {
          return (
            <TodoItem
              key={item.id}
              changeTodo={changeTodo}
              removeTodo={removeTodo}
              todo={item}
            />
          )
        })
      }
    </div>
  )
})

type ItemProps = Pick<ListProps, 'changeTodo' | 'removeTodo'> & { todo: TODO }

const TodoItem:React.FC<ItemProps> = memo(({ todo, changeTodo, removeTodo }: ItemProps)=> {
  const { id, content, complete } = todo
  const handleOnChange = () => {
    changeTodo(id)
  }
  const handleRemove = () => {
    removeTodo(id)
  }
  return (
    <div className={styles.item}>
      <Checkbox checked={complete} onChange={handleOnChange}>
        <label className={complete ? styles.complete : ''}>{content}</label>
      </Checkbox>
      <Button onClick={handleRemove} size="small">移除</Button>
    </div>
  )
})
function mapStateToProps(state) {
  console.log(state)
  return {
    state
  }
}
export default connect(mapStateToProps)(App)
