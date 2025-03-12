import { useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import './css/deposit.css'
import axios from 'axios'
import createImg from './asset/deposit.jpg'; 
export default function Deposit(){

const [dep,setDep]=useState(0)
const [userId,setUserId]=useState();
const [data,setData]=useState([])


useEffect(()=>{
   const fetchdata=async()=>{
      await axios.get('https://bankserver-nuz1.onrender.com/data').then((item)=>{setData(item.data)})
   };fetchdata()
},[]);

let updateData;
function handleClick(e){
   e.preventDefault();
  
   for(let i=0;i<data.length;i++){
      if(data[i].id === Number(userId)){
         data[i].amount=Number(data[i].amount)+Number(dep);
         updateData={amount:data[i].amount};
         let url=`https://badbank1-server.onrender.com/update/${data[i]._id}`
          axios.put(url,updateData);
          alert(`Rs.${dep} Amount Credited on Your Account`)
      }
   }

}


    return(
    <>
    <div className="deposit">
      <div className="deposit-img">
      <img id="depositimg" src={createImg} alt="Create Account"/>
      </div>
      <div className="deposit-form">
      <Form  onSubmit={handleClick}  >
      <h4 >Deposit Your Amount Here</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
        <Form.Label id="label" >Deposit Amount:</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setDep(e.target.value)}}/>
        <div className="text-center mt-3">
               <div className="button-container">
         <Button type="submit" id="submitbtn" variant="danger">
           Submit
         </Button>
         <Button type="reset" id="resetbtn" variant="primary">
           Reset
         </Button>
       </div>
       
       </div>
        </Form.Group>
        </Form>
      </div>
    </div>
    
   

   
   

    </>
    )
    
    
    }
