import React, { useState } from 'react'
import './Calculate.css'
import axios from 'axios'
import {toast} from 'react-toastify'
const Calculate = () => {
    const [data,setData] = useState({
        name:"",
        rollno:"",
        sub1:"",
        sub2:"",
        sub3:"",
        sub4:"",
        sub5:"",
        sub6:""
    })
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({...data,[name]:value}))
        
    }

    const handleSubmit = async (event)=>{
        event.preventDefault()

        const response = await axios.post('http://localhost:3000/getcgpa',data);
        if(response.data.success)
            toast.success(`Your CGPA ${response.data.cgparesult}`)
        else
            toast.error(`Error`)
    }
  return (
   <div className="calculate">
        <form  className='form' onSubmit={handleSubmit}>
            <h2>Enter Details</h2>
            <input type="text" onChange={handleChange} placeholder='Name' name="name"/>
            <input type="text" onChange={handleChange} placeholder='Roll No' name='rollno' />
            <div className="flex">
                <input type="text" onChange={handleChange} value={data.sub1} placeholder='Sub 1' name='sub1' />
                <input type="text" onChange={handleChange} value={data.sub2} placeholder='Sub 2' name='sub2' />
            </div>
            <div className="flex">
                <input type="text" onChange={handleChange} value={data.sub3} placeholder='Sub 3' name='sub3' />
                <input type="text" onChange={handleChange} value={data.sub4} placeholder='Sub 4' name='sub4' />
            </div>
            <div className="flex">
                <input type="text" onChange={handleChange} value={data.sub5} placeholder='Sub 5' name='sub5' />
                <input type="text" onChange={handleChange} value={data.sub6} placeholder='Sub 6' name='sub6' />
            </div>
            <button  type='submit' >Calculate</button>
        </form>
   </div>
  )
}

export default Calculate