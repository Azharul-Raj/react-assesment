import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [nameFocused,setNameFocused]=useState(false)
  const [emailFocused,setEmailFocused]=useState(false);


  const handleNameChange=e=>{
    const name=e.target.value.trim();
    setName(name)
  }
  const handleEmailChange=e=>{
    const email=e.target.value.trim();
    setEmail(email)
  }
//

  const onNameBlur=()=>{
   setNameFocused(true)
  }
  const onEmailBlur=()=>{
   setEmailFocused(true)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!name || !email) return;
    console.log(name,email)
  }
  
const inpNameCls=nameFocused && name ===''?'border-red-500 bg-red-200 placeholder:text-black':'border-gray-500';
const inpEmailCls=emailFocused && email===''? 'border-red-500 bg-red-200 placeholder:text-black':'border-gray-500';
  return (
    <>
      <div className="w-full">
        <form onSubmit={handleSubmit} action="" className="mx-auto w-[500px]">
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-gray-900 text-md" htmlFor="Name">Your Name</label>
            <input
             onChange={handleNameChange}
             onBlur={onNameBlur}
             className={`border rounded-lg p-2  ${inpNameCls}`} type="text" name="name"  id="" placeholder="Type your name" />
             {nameFocused && name ==='' && <p className="text-red-500 transition"> Name can't be empty.</p>}
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="font-bold text-gray-900 text-md" htmlFor="Email">Your Email</label>
            <input 
             onChange={handleEmailChange}
             onBlur={onEmailBlur}
            className={`border rounded-lg p-2 ${inpEmailCls}`} type="text" name="" id=""  placeholder="Type your email.." />
            {emailFocused && email ==='' && <p className="text-red-500 transition"> Please write a valid email.</p>}
          </div>
          <button className="p-2 rounded-lg bg-blue-500 text-white mt-4 w-full" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
