
import {useContext} from "react";
import { UserContext } from "./User";


export const useAuth = () =>{
    return  useContext(UserContext);

}