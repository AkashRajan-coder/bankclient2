import { useContext,useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import userContext from "./context.js";
import Form from 'react-bootstrap/Form';
import './App.css'
import './css/create.css'
import axios from 'axios'
import createImg from './asset/register.jpg'; // Adjust path as needed



export default function Create(){
    const ctx=useContext(userContext);
    let [userData,setUserData]=useState([]);
    let [name,setName]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let [amount,setAmount]=useState(0);
    let[accountNo,setAccountNo]=useState();
    function handleSubmit(e){
        e.preventDefault();
      //   let data=[...userData,{id:accountNo,name:name,email:email,password:password,amount:amount}];
         // setUserData(data);
         let data={id:accountNo,name:name,email:email,password:password,amount:amount};
         axios.post("https://badbank1-server.onrender.com/create",data)
         alert("Your New Account Created SuccessFully");
       
      }
      useEffect(() => {
        if (userData.length > 0) {  // ✅ Only update when userData is not empty
          ctx.setUsers([...ctx.users, ...userData]);  // ✅ Use a setter function if available
        }
      }, [userData]); // ✅ Depend only on userData
      
    
    
   
return(
<>
  <div className="create">
       <div className="create-img">
       <img id="createimg" src={createImg} alt="Create Account" />
       </div>
       <div className="create-form">
  
       <Form  onSubmit={handleSubmit}  >
      <h4 >Create Account</h4><hr></hr>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label id="label"  >Account No:</Form.Label>
        <Form.Control type="number"  id="input" onChange={(e)=>{setAccountNo(e.target.value)}}  />
        <Form.Label id="label" >User Name:</Form.Label>
        <Form.Control type="text" id="input"  onChange={(e)=>{setName(e.target.value)}}  />
        <Form.Label id="label" >Email:</Form.Label>
        <Form.Control type="email" id="input"  onChange={(e)=>{setEmail(e.target.value)}}  />
        <Form.Label id="label" >Password:</Form.Label>
        <Form.Control type="password" id="input"  onChange={(e)=>{setPassword(e.target.value)}}/>
        <Form.Label id="label" >First Amount</Form.Label>
        <Form.Control type="number" id="input" onChange={(e)=>{setAmount(e.target.value)}}  />
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