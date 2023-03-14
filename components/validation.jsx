import React, { useEffect, useState } from 'react'
import {auth} from "../components/firebase"
import { onAuthStateChanged } from 'firebase/auth'
const validation = () => {

    const[authuser,setAuthUser] = useState(null)
    useEffect(()=>{
            const listen = onAuthStateChanged(auth,(user)=>{
                    if(user){
                        setAuthUser(user)
                    }else{
                        setAuthUser(null)
                    }
            })
            return()=>{
                listen();
            }
    },[])

  return (
    <div>{authuser?
    <p>Signed in</p>:
    <p>Signed out</p>
    }</div>
  )
}

export default validation