import React from "react";
import { SignUp } from "../../pages/SignUp/signup";
import { users } from "../../models";
import { useState } from "react";

export const UserSignUp = ()=>{

    const link = '/user/signin'
    const [emailAddress, setEmailAddress] = useState<string>('')
   const [name, setName] = useState<string>('')
   const [password, setPassword] = useState<string>('')

    const [clients,setClients] = useState<users[]>([])
    const category:string = "User SignUp"
    const handleAdd = ()=>{
        setClients([...clients,{
            name:name,emailAddress:emailAddress,password:password
        }])
        setEmailAddress('')
        setName('')
        setPassword('')
    }
    console.log(clients)
    
   // const clients:users[]=[]
    return (
        <div>
            
            <SignUp heading={category}
             name={name} setName={setName} 
             emailAddress={emailAddress} setEmailAddress={setEmailAddress}
             password={password} setPassword={setPassword}
             users={clients} setUsers={setClients}
             handleAdd={handleAdd} link={link} />
        </div>
    )
}