import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [values,setValues] = useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
  })

const navigate = useNavigate()

  const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:8000/users',values)
    .then((res)=>{
      console.log(res)
      navigate('/')
    })
    .catch((e)=>console.log(e))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Add a User</h1>
      <form onSubmit={handleSubmit}>
           <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Your Name' 
            onChange={(e)=>setValues({...values,name: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='username'>UserName:</label>
            <input type='text' name='username' className='form-control' placeholder='UserName'
            onChange={(e)=>setValues({...values,username: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' className='form-control' placeholder='Enter Your Email'
            onChange={(e)=>setValues({...values,email: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Your phone number'
            onChange={(e)=>setValues({...values,phone: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input type='text' name='website' className='form-control' placeholder='Enter Your website'
            onChange={(e)=>setValues({...values,website: e.target.value})}/>
           </div>
           <button className='btn btn-success'>Submit</button>
           <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
     </div>
      
    </div>
  )
}

export default Create
