import React from "react";
import { SignUp } from "../../pages/SignUp/signup";
import { users } from "../../models";
import { useState } from "react";

export const LawyerSignUp = ()=>{

    const link = '/lawyer/signin'
    const [emailAddress, setEmailAddress] = useState<string>('')
   const [name, setName] = useState<string>('')
   const [password, setPassword] = useState<string>('')
    const [lawyers,setLawyers] = useState<users[]>([])
    const category:string = "Lawyer SignUp"

    const handleAdd = ()=>{
        setLawyers([...lawyers,{
            name:name,emailAddress:emailAddress,password:password
        }])
        setEmailAddress('')
        setName('')
        setPassword('')
    }
    console.log(lawyers)
    return (
        <div>
            
            <SignUp heading={category} 
            name={name} setName={setName} 
            emailAddress={emailAddress} setEmailAddress={setEmailAddress}
            password={password} setPassword={setPassword}
            users={lawyers} setUsers={setLawyers}
            handleAdd={handleAdd} link={link}/>
        </div>
    )
}