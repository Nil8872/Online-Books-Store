import React,{useState} from "react";
import {Role} from "../utils/enum";
import { useAuth } from "../context/Auth";

type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  roleId: number;
  _id: string;
}

 
type UserEditableProps = {
  user: UserData;
  editableUsers: string[];
  setEditableUsers: React.Dispatch<React.SetStateAction<string[]>>;
};

type UpdateUserData = {
    firstName : string;
    lastName : string;
    roleId: number;
}

const UserEditableCRUD: React.FC<UserEditableProps> = ({user, editableUsers, setEditableUsers}) => 

{

  const {updateUserByAdmin} = useAuth();

    const [userEditData, setUserEditData] = useState<UpdateUserData>({
        firstName: user.firstName,
        lastName: user.lastName,
        roleId : user.roleId
    }) 

  const handleCancle = (id: string) => {
    setEditableUsers(editableUsers.filter((Id: string) => Id !== id));
  };
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;

    setUserEditData((prev)=> ({...prev, [name as keyof UpdateUserData]: value} ))
  }
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
   const {name, value} = e.target;
    setUserEditData((prev)=> ({...prev, [name as keyof UpdateUserData]: value} ))
  }
  
  const handleUpdateUser = (userId:string)=>{
    const updatedData =  {...userEditData, roleId : parseInt(String(userEditData.roleId))};
    
    updateUserByAdmin(userId, updatedData)
    setEditableUsers(editableUsers.filter((Id:string) => Id !== userId));
     
  }

  return (
    <React.Fragment>
      <tr>
        <td>
          <input
            type="text"
            className="input"
            name="firstName"
            placeholder="Enter First name here..."
            onChange={handleChange}
            value={userEditData.firstName}
            style={{ height: "40px", marginRight: "10px", width: "90%" }}
          />
        </td>
        <td>
          <input
            type="text"
            className="input"
            name="lastName"
            placeholder="Enter Last Name.."
            onChange={handleChange}
            value={userEditData.lastName}
            style={{ height: "40px", marginRight: "10px", width: "90%" }}
          />
        </td>
        <td>{user.email}</td>
        <td>
          <select
            name="roleId"
            className="input"
            style={{width: "50%"}}
            value={userEditData.roleId}
            onChange={handleSelectChange}
          >
            <option   style={{ fontSize: "16px" }} value={Role.Admin}>
              Admin
            </option>
            <option   style={{ fontSize: "16px" }} value={Role.Seller}>
              Seller
            </option>
            <option style={{ fontSize: "16px" }} value={Role.Buyer}>
              Buyer
            </option>
          </select>
        </td>
        <td>
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              border: "2px solid green",
              color: "green",
              marginRight: "10px",
            }}
              onClick={()=> handleUpdateUser(user._id)}
          >
            Save
          </button>
        </td>
        <td>
          <button
            className="btn"
            style={{
              backgroundColor: "white",
              border: "2px solid var(--red)",
              color : "var(--red)",
            }}
             
            onClick={() => handleCancle(user._id)}
          >
            Cancle
          </button>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default UserEditableCRUD;
