import React from "react";
import "../index.css";
import "../styles/product.css";
import { useAuth } from "../context/Auth";

type UserData =
  | {
      firstName: string;
      lastName: string;
      email: string;
      roleId: number;
      _id: string;
    }
  | "";

const ProductDRUD: React.FC<UserData> = ({ allUsers }) => {

const {deleteUser} = useAuth();

  
  return (
    <>
      <div className="" style={{ marginTop: "32px", boxSizing: "border-box" }}>
        <table>
          <thead>
            <tr style={{ paddingBottom: "20px", margin: "20px" }}>
              <th style={{ width: "10%" }}>First Name</th>
              <th style={{ width: "15%" }}>Last Name</th>
              <th style={{ width: "20%" }}>Email</th>
              <th style={{ width: "35%" }}>Role</th>
              <th style={{ width: "0.1%" }}></th>
              <th style={{ width: "0.1%" }}></th>
            </tr>
          </thead>
          <tbody>
            {allUsers &&
              allUsers.map((user) => {
                return (
                  <>
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "white",
                            border: "2px solid green",
                            color: "green",
                            marginRight: "10px",
                          }}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn"
                          style={{
                             
                            backgroundColor: "white",
                            border: user.roleId === 1? "2px solid #e69193" : "2px solid var(--red)",
                            color: user.roleId === 1? "#e69193" : "var(--red)",
                          }}
                           
                          disabled={user.roleId === 1}
                          onClick={()=> deleteUser(user.email)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductDRUD;
