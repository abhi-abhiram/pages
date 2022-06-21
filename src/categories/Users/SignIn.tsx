import React from "react";
import { SignIn } from "../../pages/Signin/signin";

export const UserIn = ()=>{
    const category:string = "User Login"
    const link = '/user/signup'
    return (
        <div>
            
            <SignIn heading={category} link={link} />
        </div>
    )
}