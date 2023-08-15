import { createContext, useState, useEffect, ReactNode } from "react";
import { toast, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";

 

export type UserData = {
  firstName: string;
  lastName: string;
  email:string;
  roleId: number;
  _id: string;
  role: string;
  password : string;
  cpassword : string;
}

type Bool = boolean;

export type  UserContextType = {
  allUsers: UserData[] ;
  user: UserData;
  setUser: (loginData : LoginData)=> Promise<Bool>;
   _setUser: React.Dispatch<React.SetStateAction<UserData>>;
   
   register: (
      values: RegisterData,
      endPoint: string,
      Method: string,
      navigateString: string )=>void;

    deleteUser: (id:string)=>void;
    updateUserByAdmin: (id:string, updatedData : UpdatedData) => void;
    updateUserByUser : (updatedData : RegisterData) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

const toastStyles: ToastOptions<{
  position: string;
  autoClose: number;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  theme: string;
}> = {
  position: "top-right",
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cpassword: string;
  roleId: number;
};

type ErrorObject = {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
};



// type SuccessObject = {
//   success: boolean;
//   message: string;
//   user: RegisterData;
//   users: Array<UserData>;
// };
// type Data = { errors: ErrorObject[] } | SuccessObject;

type UserProps = {
  children : ReactNode
}

type UpdatedData = {
  firstName:string;
  lastName:string;
  roleId : number
}

const User: React.FC <UserProps> = ({ children }) => {
  const navigate = useNavigate();

const initialValues = {
  firstName : "",
  lastName: "",
  email:"",
  roleId: 0,
  _id: "",
  role: "",
  password: "",
  cpassword: "",

}
  const [user, _setUser] = useState<UserData>(initialValues);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);

  const getAllUsers = async() =>{
    try {
  
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        } 
      };
  
      const result = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/all`,
        options
      );
  
      const data = await result.json();
  
      if (data.success === true) {
         setAllUsers(data.users);
  
        
      } else {
        if (data.errors) {
          data.errors.forEach((error: ErrorObject) => {
            toast.error(error.msg, toastStyles);
          });
        }
        toast.error(data.message, toastStyles);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect( ()=>{
      getAllUsers();  
  },[])
 

  const setUser = async (values: LoginData) => {
    try {

      const options = {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
      };

      const result = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        options
      );

      const data = await result.json();

      if (data.success === true) {
        _setUser(data.user);
       

        const userData = JSON.stringify(data.user);
        localStorage.setItem("user", userData);
        
        navigate("/productlisting");
        toast.success(data.message, toastStyles);
        return true;
        
      } else {
        if (data.errors) {
          data.errors.forEach((error: ErrorObject) => {
            toast.error(error.msg, toastStyles);
          });
        }
        toast.error(data.message, toastStyles);
        return false;
      }
    } catch (error) {
      console.log("error: ", error);
      return false
    }
  };

  const register = async (
    values: RegisterData,
    endPoint: string,
    Method: string,
    navigateString: string
  ) => {
    const options = {
      method: Method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    };


    try {
      const result = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/${endPoint}`,
        options
      );

      const data = await result.json();

      if (data.success === true) {
        if(endPoint === "updateuser"){

          _setUser(data.user);

          const userData = JSON.stringify(data.user);
          localStorage.setItem("user", userData);
        }
        toast.success(data.message, toastStyles);
        getAllUsers();
        navigate(navigateString);

      } else {
        data.errors.forEach((err: ErrorObject) => {
          toast.error(err.msg, toastStyles);
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async(email:string) =>{ 
     
    const options ={
      method: "DELETE",
      headers : { "Content-Type": "application/json"},
      body: JSON.stringify({email})
    }

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/user`, options)
      const data  = await result.json(); 
      if(data.success === true){
        toast.success(data.message, toastStyles);
        getAllUsers();
      }
      else {
        data.errors.forEach((err: ErrorObject) => {
          toast.error(err.msg, toastStyles);
        });
      }

    } catch (error) {
      console.log(error);
    }
    
  }

  const updateUserByAdmin = async (userId:string, updatedData:UpdatedData) =>{
    const options ={
      method: "PUT",
      headers : { "Content-Type": "application/json"},
      body: JSON.stringify(updatedData)
    }

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/updatebyadmin/${userId}`, options)
      const data  = await result.json(); 
      console.log(data);
      if(data.success === true){
        toast.success(data.message, toastStyles);
        getAllUsers();
      }
       

    } catch (error) {
      console.log(error);
    }
  }

  const updateUserByUser = async(updatedData:RegisterData) =>{
    const options ={
      method: "PUT",
      headers : { "Content-Type": "application/json"},
      body: JSON.stringify(updatedData)
    }

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/updateuser`, options)
      const data  = await result.json(); 
     
      if(data.success === true){
        toast.success(data.message, toastStyles);
        getAllUsers();
        localStorage.setItem("user", data.user)
      }
       

    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <UserContext.Provider value={{ user, setUser, _setUser, register, allUsers, deleteUser, updateUserByAdmin,updateUserByUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;


