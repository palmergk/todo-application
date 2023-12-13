import React from 'react'
import { useState } from 'react'

const Form = ({errorText, errorMessage, storeActivity, checky, setChecky, storeInactivity}) => {
    const [forms, setForms] = useState({
        title: '',
        date: '',
        time: '',
      })
    const formHandle = event => {
        setForms({
            ...forms,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
        event.preventDefault()
        if (!forms.title) return errorMessage(true, 'Add a to do activity')
        if(!forms.date) return errorMessage(true, 'Add the date')
        if (!forms.time) return errorMessage(true, 'Add the time')
        if(checky === true){
            const date = new Date()
            const formdatas = {
                ...forms,
                id: date.getTime(),
            }
            storeInactivity(formdatas)
        }
        else {
            const date = new Date()
            const formData = {
                ...forms,
                id: date.getTime(),
            }
            storeActivity(formData)
        }
        setForms({
            title: '',
            date: '',
            time: ''
        })
        setChecky(false)
    }
  return (
    <>
    <form className='form' onSubmit={submitForm}>
        <div className="input-holder">
            <input type='text' placeholder='enter a to do activity' value={forms.title} name='title' onChange={formHandle}/>
            <input type='date' value={forms.date} placeholder='enter time & day' name='date' onChange={formHandle}/>
            <input type='time' value={forms.time} placeholder='enter time & day' name='time' onChange={formHandle}/>
        </div>
        <div>
            <div className='check-txt'>
            <div>move to done directly?</div>
            <input type='checkbox'  value={checky} checked={checky} onChange={event => {setChecky(event.target.checked)}}/>
            </div>
            <button type='submit'>Add Activity</button>
        </div>
     </form>
     <div className='error-message'>{errorText}</div>
    </>
  )
}

export default Form