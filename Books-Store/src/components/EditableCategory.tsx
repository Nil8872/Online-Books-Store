import React,{useState} from "react";
import { useCategory } from "../context/CustomHook";

type EditableCategoryProps ={
    category: {
        name: string;
        _id: string;
    },
    setEditableCategory : React.FC,
    editableCategory: Array<string>
}

const EditableCategory: React.FC<EditableCategoryProps> = ({category, setEditableCategory, editableCategory}) => {

    const hadleCancle = (id: string) =>{
        setEditableCategory(editableCategory.filter((Id:string) => Id !==id ));
    }
    
    const [categoryName, setCategoryName] = useState(category.name);
    const {updateCategory} = useCategory();
    
    const hadleUpdateCategory =(id:string) =>{
        updateCategory(id,categoryName);
         
        setEditableCategory(editableCategory.filter((Id:string) => Id !==id ));
    }

  return (
    <>
      <td>
        <input
          style={{ width: "30%" }}
          className="input"
          type="text"
          name="categoryName"
          value={categoryName}
          // value={values.bookName}
          onChange={(e)=> setCategoryName(e.target.value)}
        />
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
          onClick={() => hadleUpdateCategory(category._id)}
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
            color: "var(--red)",
          }}
            
          onClick={() => hadleCancle(category._id)}
        >
          Cancle
        </button>
      </td>
    </>
  );
};

export default EditableCategory;
