import React from 'react'
import Form from './components/Form'
import Todo from './components/Todo'
import Done from './components/Done'
import Buttoncomponent from './components/Buttoncomponent'
import { useState } from 'react'
// import golden from "./assets/images/golden.jfif"



const App = () => {
  const [todo, setTodo] = useState([])
  const [done, setDone] = useState([])
  const [checky, setChecky] = useState(false)
  const [moveTodone, setMoveTodone] = useState([])
  const [moveToudone, setMoveToudone] = useState([])
  const [todoId, setTodoId] = useState([])
  const [todoIdAll, setTodoIdAll] = useState([])
  const [doneId, setDoneId] = useState([])
  const [doneIdAll, setDoneIdAll] = useState([])
  const [AllChange, setAllChange] = useState(false)
  let todoArray = []
  let doneArray = []
  let todoAll = []
  let doneAll = []
  let todoMoveAll = []
  let doneMoveAll = []
  const [editForm, setEditForm] = useState({
    title: '',
    date: '',
    time: '',
  })
  const [singleBook, setSingleBook] = useState({})


  const [error, setError] = useState({
    status: false,
    errorText: ''
  })
  const errorMessage = (status, errorText,) => {
    setError({
      status: status,
      errorText: errorText,
    })
    setTimeout(() => {
      setError({
        status: status,
        errorText: '',
      })
    }, 2000)
  }
  const storeActivity = (values) => {
    setTodo([values, ...todo])
  }
  const storeInactivity = (values) => {
    setDone([values, ...done])
  }

  const setToMove = (item) => {
    const findItem = moveTodone.find(ele => ele.id === item.id)
    if (!findItem) {
      setMoveTodone([item, ...moveTodone])
    } else {
      const checkout = moveTodone.filter(ele => ele.id !== item.id)
      setMoveTodone(checkout)
    }
  }
  const setBack = (item) => {
    const findEle = moveToudone.find(ele => ele.id === item.id)
    if (!findEle) {
      setMoveToudone([item, ...moveToudone])
    } else {
      const checkin = moveToudone.filter(ele => ele.id !== item.id)
      setMoveToudone(checkin)
    }
  }

  const toggleTodoAll = () => {
    setAllChange(!AllChange)
    console.log(AllChange)
    todo.map(ele => {
      if (AllChange === true) {
        todoAll.push(ele.id)
        todoMoveAll.push(ele)
      }
      else {
        todoAll = []
        todoMoveAll = []
      }
    })
    setTodoIdAll(todoAll)
    setTodoId(todoAll)
    setMoveTodone(todoMoveAll)
  }
  const toggleDoneAll = () => {
    setAllChange(!AllChange)
    done.map(ele => {
      if (AllChange === true) {
        doneAll.push(ele.id)
        doneMoveAll.push(ele)
      }
      else {
        doneAll = []
        doneMoveAll = []
      }
    })
    setDoneIdAll(doneAll)
    setDoneId(doneAll)
    setMoveToudone(doneMoveAll)
  }

  const PerformMovementDone = () => {
      setDone((prev) => {
        return [
          ...prev,
          ...moveTodone
        ]
      })
      todo.map(ele => {
        if (!moveTodone.includes(ele)) {
          todoArray.push(ele)
        }
      })
      setMoveTodone([])
      setTodo(todoArray)
      setTodoId([])
      setTodoIdAll([])    
  }
  const PerformMovementUndone = () => {
      setTodo((prev) => {
        return [
          ...prev,
          ...moveToudone
        ]
      })
      done.map(ele => {
        if (!moveToudone.includes(ele)) {
          doneArray.push(ele)
        }
      })
      setDone(doneArray)
      setDoneId([])
      setMoveToudone([])
      setDoneIdAll([])
  }


  const handleDuplicate = (id) => {
    const dataId = new Date().getTime()
    const todoGroup = todo.filter(item => item.id === id)
    const updatedTodoGroup = todoGroup.map(item => {
      return {
        ...item,
        id: dataId
      }
    })
    const newtodoGroup = [...todo, ...updatedTodoGroup]
    setTodo(newtodoGroup)
  }
  const handleDuplicatetwo = (id) => {
    const dataId = new Date().getTime()
    const doneGroup = done.filter(item => item.id === id)
    const updatedDoneGroup = doneGroup.map(item => {
      return {
        ...item,
        id: dataId
      }
    })
    const newdoneGroup = [...done, ...updatedDoneGroup]
    setDone(newdoneGroup)
  }
  const handleDelete = (id) => {
    const Notdeleted = todo.filter(item => item.id !== id)
    setTodo(Notdeleted)
  }
  const handleDeletetwo = (id) => {
    const Notdeleted = done.filter(item => item.id !== id)
    setDone(Notdeleted)
  }
  const EditData = (item) => {
    setSingleBook(item)
    setEditForm({
      title: item.title,
      date: item.date,
      time: item.time,
    })
  }
  const EditTodoData = () => {
    const updatedData = todo.map(item => {
      if(singleBook.id === item.id) {
        return {
          ...item,
          title: editForm.title,
          date: editForm.date,
          time: editForm.time,
        }
      }
      return item
    })
    setTodo(updatedData)
  }
  const EditDoneData = () => {
    const updatedData = done.map(item => {
      if(singleBook.id === item.id) {
        return {
          ...item,
          title: editForm.title,
          date: editForm.date,
          time: editForm.time,
        }
      }
      return item
    })
    setDone(updatedData)
  }


  return (
    <div>
      {/* <div className='w-full flex justify-between p-3 bg-white capitalize shadow'>
        <img src={golden} className='w-7 h-7'></img>
        <div className='flex gap-5 text-orange-500 font-bold text-center'>
          <a href=''>about</a>
          <a href=''>home</a>
          <a href=''>contact</a>
          <a href=''>log out</a>
        </div>
      </div> */}
      <div className="program-title">to do application</div>
      <Form errorText={error.errorText} errorMessage={errorMessage} storeActivity={storeActivity} checky={checky} setChecky={setChecky} storeInactivity={storeInactivity}/>
      <div className="container">
        <div className="">
          <div className='t-c'>
            <div className="title">to do field</div>
            <div onClick={toggleTodoAll} className={`box ${todoIdAll.length > 0 ? 'boxchecked' : ''}`}></div>
          </div>
          {todo.map((item, index) => (
            <Todo
              key={index} item={item} handleDuplicate={handleDuplicate} handleDelete={handleDelete} setToMove={setToMove}
              todoId={todoId}
              setTodoId={setTodoId}
              editForm={editForm}
              setEditForm={setEditForm}
              EditData={EditData}
              EditTodoData={EditTodoData}
            />
          ))}
        </div>
        {todoId.length >=1 && <Buttoncomponent title='move to done?' PerformMovement={PerformMovementDone} />}
        {doneId.length >=1 && <Buttoncomponent title='move to undone?' PerformMovement={PerformMovementUndone} />}
        <div className="">
          <div className='t-c'>
            <div className="title">done field</div>
            <div onClick={toggleDoneAll} className={`box ${doneIdAll.length > 0 ? 'boxchecked' : ''}`}></div>
          </div>
          {done.map((item, index) => (
            <Done
              key={index} item={item} handleDuplicatetwo={handleDuplicatetwo} doneId={doneId} setDoneId={setDoneId} setBack={setBack} handleDeletetwo={handleDeletetwo}
              editForm={editForm}
              setEditForm={setEditForm}
              EditData={EditData}
              EditDoneData={EditDoneData}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App