import { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastOptions } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialValue = {
  firstName: "",
  lastName: "",
  roleId: 0,
  _id: 1,
  email: "",
};

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

type SuccessObject = {
  success: boolean;
  message: string;
  user: RegisterData;
};
type Data = { errors: ErrorObject[] } | SuccessObject;

const User: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [user, _setUser] = useState(initialValue);

 

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

  return (
    <UserContext.Provider value={{ user, setUser, _setUser, register }}>
      {children}
    </UserContext.Provider>
  );
};

export default User;

// export const useAuth = () =>{
//     const {users} = useContext(UserContext);

//     return users
// }
