import React, { useState } from 'react'
import assets from '../assets/assets'

const Login = () => {
    const [currState, setCurrState] = useState("Sign up");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [isDataSubmitted, setIsDataSubmitted] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(currState === "Sign up" && !isDataSubmitted){
            setIsDataSubmitted(true);
            return;
        }
    }

    return  (
      <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
        <img src={assets.logo_big} className='w-[min(30vw,250px)]'></img>

        <form onSubmit={onSubmitHandler} className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
            <h2 className='font-medium text-2xl flex justify-between items-center'>
                {currState}
                {isDataSubmitted && <img onClick={()=> setIsDataSubmitted(false)} src={assets.arrow_icon} className='w-5 cursor-pointer'></img>}
            </h2>

            {currState === "Sign up" && !isDataSubmitted && (
                <input onChange={(e) => setFullName(e.target.value)} value={fullName}
                type="text" placeholder="Full Name" className='p-2 border border-gray-500 rounded-md focus:outline-none' required></input>
            )}

            {!isDataSubmitted && (
                <>
                    <input onChange={(e) => setEmail(e.target.value)} value={email}
                    type="email" placeholder="Email Address" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required></input>
                    <input onChange={(e) => setPassword(e.target.value)} value={password}
                    type="password" placeholder="Password" className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500' required></input>
                </>
            )}

            {currState === "Sign up" && isDataSubmitted && (
                <textarea onChange={(e) => setBio(e.target.value)} value={bio}
                rows={4} placeholder="Provide a bio" className='p-2 border border-gray-500 rounded-md focuS:outline-none focus:ring-2 focis:ring-indigo-500'></textarea>
            )}

            <button type="submit" className='py-3 border border-purple-500 bg-gradient-to-r form-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
                {currState === "Sign up" ? "Create Account" : "Login now"}
            </button>

            <div className='flex fex-col gap-2'>
                {currState === "Sign up" ? (
                    <p className='text-sm text-gray-600'>Already have an account? <span onClick={()=>{setCurrState("Login"); setIsDataSubmitted(false)}} className='font-medium text-violet-500 cursor-pointer'>Login here</span></p>
                ) : (
                    <p className='text-sm text-gray-600'>Create an account <span onClick={()=>{setCurrState("Sign up");}}  className='font-medium text-violet-500 cursor-pointer'>Sign up here</span></p>
                )}
            </div>
        </form>
      </div>
    )
}

export default Login
