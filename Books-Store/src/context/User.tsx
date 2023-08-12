import { createContext, useState, useEffect, ReactNode } from "react";
import { toast, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";

const userValue = {
  firstName: "",
  lastName: "",
  roleId: 0,
  _id: 1,
  email: "",
};

const initialValue = {
  alluser: [],
  user: userValue,
  setUser: ()=>{},
   _setUser: ()=>{},
    register: ()=>{},
    deleteUser: (id:string)=>{},
    updateUserByAdmin: (id:string, updatedData : UpdatedData) => {},
}

export const UserContext = createContext(initialValue);

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

type UserData = {
  firstName: string;
  lastName: string;
  email:string;
  roleId: number;
  _id: string;
  role: string;
}

type SuccessObject = {
  success: boolean;
  message: string;
  user: RegisterData;
  users: Array<UserData>;
};
type Data = { errors: ErrorObject[] } | SuccessObject;

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

  const [user, _setUser] = useState(initialValue);
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async() =>{
    try {
  
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
        } 
      };
  
      const result = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/all`,
        options
      );
  
      const data: Data = await result.json();
  
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
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        options
      );

      const data: Data = await result.json();

      if (data.success === true) {
        _setUser(data.user);
       

        const userData = JSON.stringify(data.user);
        localStorage.setItem("user", userData);
        navigate("/productlisting");
        toast.success(data.message, toastStyles);
        
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
        `${import.meta.env.VITE_BASE_URL}/auth/${endPoint}`,
        options
      );

      const data: Data = await result.json();

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
      const data : Data = await result.json(); 
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

 


  const updateUserByAdmin = async (userId : string, updatedData:UpdatedData) =>{
    const options ={
      method: "PUT",
      headers : { "Content-Type": "application/json"},
      body: JSON.stringify(updatedData)
    }

    try {
      const result = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/updatebyadmin/${userId}`, options)
      const data : Data = await result.json(); 
      console.log(data);
      if(data.success === true){
        toast.success(data.message, toastStyles);
        getAllUsers();
      }
       

    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <UserContext.Provider value={{ user, setUser, _setUser, register, allUsers, deleteUser, updateUserByAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;


