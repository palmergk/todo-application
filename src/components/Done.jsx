import React from 'react'
import { useState } from 'react'
import { MdEdit, MdCancel } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";


const Done = ({ item, handleDuplicatetwo, doneId, setDoneId, setBack, handleDeletetwo, editForm, setEditForm, EditData, EditDoneData}) => {
  const ToggleActiveness = () => {
    const findItem = doneId.find(ele => ele === item.id)
    if(!findItem) {
        setDoneId([...doneId, item.id])
    }else {
        const filterout = doneId.filter(ele => ele !== item.id)
        setDoneId(filterout)
    }
    setBack(item)
}
const [hiddentitle, setHiddentitle] = useState(false)
const hidetitle = () => {
   setHiddentitle(false)   
}
const showtitle = () => {
  setHiddentitle(true)
}
const Styletitle = {
    display: hiddentitle === true ? "block" : "none"
}
const Styletitletwo = {
  display: hiddentitle === true ? "none" : "block"
}
const [hiddendate, setHiddendate] = useState(false)
const hidedate = () => {
  setHiddendate(false)   
}
const showdate = () => {
  setHiddendate(true)
}
const Styledate = {
    display: hiddendate === true ? "block" : "none",
}
const Styledatetwo = {
  display: hiddendate === true ? "none" : "block",
}
const [hiddentime, setHiddentime] = useState(false)
const hidetime = () => {
  setHiddentime(false)   
}
const showtime = () => {
  setHiddentime(true)
}
const Styletime = {
    display: hiddentime === true ? "block" : "none",
}
const Styletimetwo = {
  display: hiddentime === true ? "none" : "block",
}

const editFormHandle = event => {
  setEditForm({
      ...editForm,
      [event.target.name]: event.target.value
  })
}
   return (
      <div className='field-container'>
      <div className="field">
        <div className="">Title:</div>
        <div className='t-ic'>
          <input type='text'  style={Styletitle} value={editForm.title} name='title' onChange={editFormHandle} className='hidden-input'/>
          <div className="" style={Styletitletwo}>{item.title}</div>
          <MdEdit className='edit-icon' style={Styletitletwo} onClick={() => {EditData(item); showtitle()}}/>
          <MdCancel className='edit-icon' style={Styletitle}  onClick={hidetitle}/>
          <IoCheckmark  className='edit-icon' style={Styletitle}  onClick={() => {EditDoneData(); hidetitle()}}/>
        </div>
      </div>
      <div className="field">
        <div className="">Date:</div>
        <div className='t-ic'>
        <input type='date' style={Styledate} value={editForm.date} name='date' onChange={editFormHandle} className='hidden-input' />
          <div className="" style={Styledatetwo}>{item.date}</div>
          <MdEdit className='edit-icon' style={Styledatetwo} onClick={() => {EditData(item); showdate()}}/>
          <MdCancel className='edit-icon' style={Styledate} onClick={hidedate}/>
          <IoCheckmark  className='edit-icon' style={Styledate} onClick={() => {EditDoneData(); hidedate()}}/>
        </div>
      </div>
      <div className="field">
        <div className="">Time:</div>
        <div className='t-ic'>
        <input type='time' style={Styletime}  className='hidden-input'  value={editForm.time} name='time' onChange={editFormHandle}/>
          <div className="" style={Styletimetwo}>{item.time}</div>
          <MdEdit className='edit-icon' style={Styletimetwo} onClick={() => {EditData(item); showtime()}}/>
          <MdCancel className='edit-icon' style={Styletime} onClick={hidetime}/>
          <IoCheckmark  className='edit-icon' style={Styletime} onClick={() => {EditDoneData(); hidetime()}}/>
        </div>
      </div>
      <div onClick={ToggleActiveness} className={`box ${doneId.includes(item.id) ? 'boxchecked' : ''}`}></div>
      <div hidden>{item.id}</div>
      <div className='btns'>
        <button onClick={() => handleDuplicatetwo(item.id)}>duplicate</button>
        <button onClick={() => handleDeletetwo(item.id)}>delete</button>
      </div>
    </div>
   )
}

export default Done