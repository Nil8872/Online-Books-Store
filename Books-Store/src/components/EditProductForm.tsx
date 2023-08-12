import React, { useEffect, useState } from "react";
import styles from "../styles/loginOrReg.module.css";
import headerStyle from "../styles/header.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCategory } from "../context/CustomHook";

type BookData = {
  bookName: string;
  price: number;
  category: string;
  discription: string; 
};

const EditProductForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFileName] = useState<string>("No choosen file");
  const [fileError, setFileError] = useState<string | null>(null);
  const {categories} = useCategory();

  console.log(categories);

  const initialValues: BookData = {
    bookName: "",
    price: 100,
    category: "category 1",
    discription: "",  
     
  };

  const validationSchema = Yup.object({
    bookName: Yup.string().required("Please enter a book name!"),
    price: Yup.number().required("Please enter a price"),
     
  });

  const { values, handleBlur, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues,
    onSubmit: async (values: BookData) => {

    if (!file) {
        setFileError("Please select a file");
        return;  // This will stop the function execution here, preventing submission
    }
    setFileError(null);
      const formData = new FormData();

      for (const key in values) {
        formData.append(key, values[key]);
      }
      formData.append("image", file )
      console.log(  file);

      const options = {
        method: "POST",
        body: formData,
      };

      try {
        const result = await fetch("http://localhost:5000/api/book", options);
        console.log(await result.json());
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema,
  });
 

 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {  

    

    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
  }
  }

  
  return (
    <>
      <div className="container">
        <form action=""  onSubmit={handleSubmit}  method="post">
          <div className="row" style={{ marginBottom: "35px" }}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Book name*</div>
              <input
                className="input"
                type="text"
                name="bookName"
                value={values.bookName}
                onChange={handleChange}
              />
              {errors.bookName && touched.bookName ? (
                <div className="error">{errors.bookName}</div>
              ) : null}
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Price</div>
              <input
                className="input"
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
              />
              {errors.price && touched.price ? (
                <div className="error">{errors.price}</div>
              ) : null}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "60px" }}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Shop by Categories</div>
              <select
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                name="category"
                id=""
                style={{ width: "100%", height: "40px" }}
              >
                {
                  categories && categories.map(category=>{
                    return <option value={category.name}>{category.name}</option>
                  })
                }
            
              </select>
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Discription</div>
              <input
                className="input"
                type="text"
                name="discription"
                value={values.discription}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className={styles.rowHalf} style={{ display: "flex" }}>
              <label
                htmlFor="upload"
                id="upload-label"
                className="custom-file-upload center"
              >
                Upload
              </label>
              <input
                type="file"
                id="upload"
                name="image"
                style={{ display: "none" }}
                // onChange={handleChange}
                onChange={handleFileChange}
                onBlur={handleBlur}
              />
              <p
                id="file-name"
                className="center"
                style={{
                  justifyContent: "start",
                  paddingLeft:"10px",
                  border: "1px solid #767676",
                  width: "100%",
                  height: "40px",
                  boxSizing: "border-box",
                  borderLeft: "0px",
                }}
              >
                {filename}
              </p>
            </div>
             
          </div>
          {fileError && <div className="error">{fileError}</div>}  

          <div style={{ display: "flex", marginTop :"35px" }}>
            <div>
              <button
                type="submit"
                className={`btn ${headerStyle.searchBtn}`}
                style={{
                  background: "green",
                  borderRadius: "5px",
                  width: "100px",
                  height: "40px",
                  marginRight: "5px",
                }}
              >
                Save
              </button>
            </div>
            <div className={headerStyle.mainSearchBoxItems}>
              <button
                className="btn"
                style={{
                  backgroundColor: "var(--red)",
                  borderRadius: "5px",
                  width: "100px",
                  height: "40px",
                }}
              >
                Cancle
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProductForm;
