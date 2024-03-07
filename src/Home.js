import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  //const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:8000/users')
    .then((res)=>setData(res.data))
    .catch((e)=>console.log(e))
  }, []);

  const handleDel=(id)=>{
    const confirm = window.confirm('are you sure?')
    if(confirm){
      axios.delete('http://localhost:8000/users/'+id)
      .then((res)=>{
        //navigate('/')
        location.reload();
      })
      .catch((e)=>console.log(e))
    }
  }
   
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>ADD +</Link>
          </div>
      <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((i,k)=>{
              return(
               
                  <tr key={k}>
                    <td>{k+1}</td>
                    <td>{i.name}</td>
                    <td>{i.username}</td>
                    <td>{i.email}</td>
                    <td>{i.phone}</td>
                    <td>{i.website}</td>
                    <td>
                    <Link to={`/read/${i.id}`} className='btn btn-primary btn-sm me-2'>READ</Link>
                    <Link to={`/update/${i.id}`} className='btn btn-info btn-sm me-2'>EDIT</Link>
                      <button className='btn btn-danger btn-sm' onClick={(id)=>handleDel(i.id)}>DELETE</button>
                    </td>
                  </tr>
                
              )
            })
          }
          </tbody>
          </table>
        
      </div>
    </div>
  );
};

export default Home;
