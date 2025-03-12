// import userContext from "./context.js"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// export default function Alldata(){
//  const ctx=useContext(userContext)

 
    

 
//    return(
//     <>
//     <h2>Bank Users Database</h2>
//    {
//  ctx.users.map((item)=>
   
//  <table id="table" class="table table-dark table-hover">
//  <thead>
//   <tr>
//   <th scope="col">Field</th>
//   <th scope="col">Values</th>
   
//    </tr>
// </thead>
// <tbody>
//   <tr >
//     <td>USER ID</td>
//     <td >{item.id}</td>
//   </tr>
//   <tr >
//     <td>NAME</td>
//     <td>{item.name}</td>
//   </tr>
//   <tr >
//     <td>EMAIL</td>
//     <td>{item.email}</td>
//   </tr>
//   <tr >
//     <td>PASSWORD</td>
//     <td>{item.password}</td>
//   </tr>
//   <tr>
//     <td>BALANCE</td>
//     <td>{item.amount}</td>
//   </tr>
//   </tbody>
// </table>)
//    }
     
//   </>
//     )
    
    
//     }

import {useState,useEffect} from "react";
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'
import './css/alldata.css'

export default function Alldata(){
  
  const [data,setData]=useState([])
 

  useEffect(()=>{
    const fetchdata=async()=>{
       await axios.get('https://badbank1-server.onrender.com/data').then((item)=>{setData(item.data)})
    };fetchdata()
 },[]);
   
  function handleDelete(index){
    let DeleteArray=[...data];
    axios.delete(`https://badbank1-server.onrender.com/delete/${DeleteArray[index]._id}`);
    alert(`Account ${DeleteArray[index].id} Delete from Database` )
    DeleteArray.splice(index,1);
    setData(DeleteArray);
    
    
  }
  return(
    <>
      <h2>Bank Users Database</h2>
      <div className="table">
      {data.map((item,index)=> 
     
      <Table striped bordered hover >
      <thead>
        <tr>
         
          <th>Name</th>
          <th>Email</th>
          <th>Balance</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       
         
          <tr>
        
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.amount}</td>
          <td><Button onClick={()=>handleDelete(index)} >Delete</Button></td>
        </tr>
      
      
        </tbody>
        </Table>

     
      )
      }
       </div>
    </>
  )
}
