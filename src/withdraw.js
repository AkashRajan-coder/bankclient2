
import {useState,useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './css/withdraw.css'
import createImg from './asset/withdraw.jpg'; 
export default function Withdraw(){
   
    const [withdraw,setWithdraw]=useState(0);
    const [userId,setUserId]=useState();
    const [data,setData]=useState([])
    useEffect(()=>{
        const fetchdata=async()=>{
           await axios.get('https://bankserver-nuz1.onrender.com/data').then((item)=>{setData(item.data)})
        };fetchdata()
     },[]);


    function handleClick(e){
        e.preventDefault();
       for(let i=0;i<data.length;i++){
            if(data[i].id === Number(userId)){
                if(data[i].amount>0){
                    data[i].amount=Number(data[i].amount)-Number(withdraw);
                    let updateData={amount:data[i].amount};
                   let url=`https://badbank1-server.onrender.com/update/${data[i]._id}`
                    axios.put(url,updateData);
                    alert(`Rs.${withdraw} Amount Withdraw on Your Account`)
                }
                else{
                    alert("YOUR ACCOUNT BALANCE 0 SO YOU CAN'T WITHDRAW");
                }
              
            }
         }
     }
    
    return(
    <>
    <div className="withdraw">
        <div className="withdraw-img">
        <img id="withdrawimg" src={createImg} alt="Create Account"/>
        </div>
        <div className="withdraw-form">
        <Form  onSubmit={handleClick}  >
      <h4 >Withdraw Your Amount Here</h4><hr></hr>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setUserId(e.target.value)}}  />
        <Form.Label id="label" >Withdraw Amount:</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setWithdraw(e.target.value)}}/>
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
