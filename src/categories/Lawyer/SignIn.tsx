import React from "react";
import { SignIn } from "../../pages/Signin/signin";

export const LawyerIn = ()=>{
    const category:string = "Lawyer Login"
    const link = '/lawyer/signup'
    return (
        <div>
            
            <SignIn heading={category} link={link} />
        </div>
    )
}