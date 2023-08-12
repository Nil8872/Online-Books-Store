import { useCategory } from "../context/CustomHook";
import "../index.css";
import { useState } from "react";
import EditableCategory from "./EditableCategory";
import {toast} from "react-toastify"

function CategoryCRUD() {
  const { categories, deleteCategory, addCategory } = useCategory();

  const [categoryName, setCategoryName] = useState(""); 
  const [editableCategory, setEditableCategory] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    if(categoryName.trim() !== ""){
      addCategory(categoryName);
      setCategoryName("");
    }
    else{
      toast.error("Please Enter Category Name",{ theme: "colored"})
    }

  };
  const handleEditCategory = (id: string) => {
    setEditableCategory([...editableCategory, id]);
    // console.log(editableCategory);
  };

 
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "32px", boxSizing: "border-box" }}
      >
        <div style={{ display: "flex", justifyContent: "right" }}>
          <input
            type="text"
            className="input"
            placeholder="Search..."
            style={{ height: "40px", marginRight: "10px", width: "28%" }}
          />
          <input
            type="text"
            className="input"
            name="categoryname"
            placeholder="Enter Category name here..."
            onChange={handleChange}
            value={categoryName}
            style={{ height: "40px", marginRight: "10px", width: "28%" }}
          />
          <button
            className="btn"
            style={{ width: "200px", height: "40px", borderRadius: "2px" }}
            onClick={handleAddCategory}
          >
            Add Product
          </button>
        </div>

        <table>
          <thead>
            <tr style={{ paddingBottom: "15px", margin: "20px" }}>
              <th style={{ width: "10%" }}>Category Name</th>

              <th style={{ width: "0.1%" }}></th>
              <th style={{ width: "0.1%" }}></th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category) => { 
                return (
                  <tr key={category._id}>
                    {editableCategory.indexOf(category._id) === -1 ? (
                      <>
                        <td>{category.name}</td>
                        <td>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "white",
                              border: "2px solid green",
                              color: "green",
                              marginRight: "10px",
                            }}
                            onClick={() => handleEditCategory(category._id)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn"
                            style={{
                              backgroundColor: "white",
                              border: "2px solid var(--red)",
                              color: "var(--red)",
                            }}
                            //   disabled={user.roleId === 1}
                            onClick={() => deleteCategory(category._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                      <EditableCategory 
                      category={category} 
                      setEditableCategory={setEditableCategory} 
                      editableCategory={editableCategory}
                      />
                      </>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CategoryCRUD;
