import React from "react";
import { SignIn } from "../../pages/Signin/signin";

export const AdminIn = ()=>{
    const category:string = "Admin Login"
    const admin = true
    return (
        <div>
            
            <SignIn heading={category} admin={admin} />
        </div>
    )
}