
import {useContext} from "react";
import { UserContext } from "./User";
import { UserContextType } from "./User";

export const useAuth = () : UserContextType =>{
    const context = useContext(UserContext)
     if(!context){
        throw new Error("useBooks must be used within a Cart User Provider")
     }
     return context
}