import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import Aksen from "./../../src/assets/aksen.svg";
import axios from "axios";

const Login = ()=> {
    const [value,setValue]= useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const onSubmit = async(e)=> {
        e.preventDefault()
        try{
            const ress = await axios.post('http://localhost:5174/login',value);
            if(ress.status == 200){
                // console.log(ress.data.accessToken);
                const user = JSON.stringify({...ress.data.user,token: ress.data.accessToken});
                localStorage.setItem('user',user);
                navigate('/');
            }else{
                alert('gagal Login')
            }
        }catch(err){
            alert('gagal Login')
        }
    };
    return(
        <>
        <img className="absolute h-screen -z-1" src={Aksen} alt="" />
        <div className="h-screen bg-gradient-to-r from-[#d8d8d8] to-yellow flex flex-col items-center justify-center gap-4">
            <div className="sm:w-[35%] py-10 px-4 bg-[#dfdfdf] items-center w-screen rounded-md flex flex-col gap-5 relative">

                <h1 className="text-4xl font-bold">LOGIN</h1>
                <form className="sm:w-[100%] w-screen rounded-sm flex flex-col gap-5 relative" onSubmit={onSubmit}>
                    <span className="absolute -top-5">*</span>
                    <input className="bg-bgColor p-2  rounded-sm" type="text" placeholder="Email..." value={value.email} onChange={(event)=> setValue({...value,email: event.target.value})} required/>
                    <input className="bg-bgColor p-2  rounded-sm" placeholder="Password..."  type="password" value={value.password} onChange={(event)=> setValue({...value,password: event.target.value})} required/>
                    <button className="bg-black text-white p-2  rounded-sm" type="submit">LOGIN</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Login;