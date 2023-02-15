import React , { useState,useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const createBulkTodos = () => { 
  const array = [];

  for(var i=1; i<= 2500 ;i++) { 
    array.push( {
      id:i , 
      text: `Today 할 일 ${i}` ,
      checked: false 
    })
  }

  return array;  
}

const App = () => { 
  const [todos, setTodos] = useState(createBulkTodos);

  // const [todos, setTodos] = useState([
  //   {
  //     id:1, 
  //     text: '리액트 기초를 알아보자',
  //     checked: false

  //   } , 
  //   {
  //     id:2 , 
  //     text: '컴포넌트 스타일링해 보기',
  //     checked: false
  //   },
  //   {
  //     id:3 ,
  //     text: '일정 관리 앱 만들어 보기',
  //     checked: false
  //   }
  // ]);

  const nextId = useRef(todos.length+1);

  const onInsert = useCallback(
    text => { 
      const todo = { id:nextId.current , text, checked: false };
      setTodos(todos => todos.concat(todo))
      nextId.current += 1;
    }
  );

  const onRemove = useCallback(
    id => {
      console.log('지우려는 id = ' + id);
      setTodos(todos => todos.filter(todo => todo.id !== id))
    } , [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos.map(todo => todo.id === id? { ...todo,checked:!todo.checked}:todo))
    }
  ,[todos]);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App;
