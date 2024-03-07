import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  //const [data, setData] = useState([]);
  const {id} = useParams()
  const [values,setValues] = useState({
    name:'',
    username:'',
    email:'',
    phone:'',
    website:''
  })

  useEffect(() => {
    axios.get('http://localhost:8000/users/'+id)
    .then((res)=>setValues(res.data))
    .catch((e)=>console.log(e))
  }, []);

  const navigate = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault()
    axios.put('http://localhost:8000/users/'+id,values)
    .then((res)=>{
      console.log(res)
      navigate('/')
    })
    .catch((e)=>console.log(e))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
     <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
           <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Your Name'
             value={values.name} onChange={(e)=>setValues({...values,name: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='username'>UserName:</label>
            <input type='text' name='username' className='form-control' placeholder='UserName'
             value={values.username} onChange={(e)=>setValues({...values,username: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' className='form-control' placeholder='Enter Your Email'
             value={values.email} onChange={(e)=>setValues({...values,email: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='phone'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Your phone number'
             value={values.phone} onChange={(e)=>setValues({...values,phone: e.target.value})}/>
           </div>
           <div className='mb-2'>
            <label htmlFor='website'>Website:</label>
            <input type='text' name='website' className='form-control' placeholder='Enter Your website' 
            value={values.website} onChange={(e)=>setValues({...values,website: e.target.value})}/>
           </div>
           <button className='btn btn-success'>Update</button>
           <Link to="/" className='btn btn-primary ms-3'>Back</Link>
      </form>
     </div>
      
    </div>
  )
}

export default Update
