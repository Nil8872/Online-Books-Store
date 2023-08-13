import React, { useEffect, useState } from "react";
import styles from "../styles/loginOrReg.module.css";
import headerStyle from "../styles/header.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBooks, useCategory } from "../context/CustomHook";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type BookData = {
  bookName: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

type BookFormProps = {
  mode: string;
  book: BookData;
  setEditMode: React.FC;
};

const BookForm: React.FC<BookFormProps> = ({ mode, book, setEditMode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFileName] = useState<string>("No choosen Image");
  const [fileError, setFileError] = useState<string | null>(null);
  const [show, setShow] = useState(false);
  const { categories } = useCategory();
  const { addBook, updateBook } = useBooks();
  const navigate = useNavigate();

  const defaultCategoryName =
    mode === "add"
      ? categories.length > 0
        ? categories?.[0]?.name
        : ""
      : book.category;
  const initialValues: BookData = {
    bookName: mode === "add" ? "" : book?.bookName,
    price: mode === "add" ? 100 : book?.price,
    category: defaultCategoryName,
    description: mode === "add" ? "" : book?.description,
  };

  useEffect(()=>{
    if (mode === "add") {
      setShow(true);
    }else{
      setShow(false);
    }3

  },[mode])

  const validationSchema = Yup.object({
    bookName: Yup.string().required("Please enter a book name!"),
    price: Yup.number().required("Please enter a price"),
    description: Yup.string().required("Please enter a description"),
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    touched,
    errors,
  } = useFormik({
    initialValues,
    onSubmit: async (values: BookData) => {
      if (mode==="add" && !file) {
        setFileError("Please select a Image");
        return; // This will stop the function execution here, preventing submission
      }
      setFileError(null);
      const formData = new FormData();
      console.log(values);
      for (const key in values) {
        formData.append(key, values[key] || initialValues[key]);
      }

      const findCategory = values.category || initialValues.category;
      const categoryId = categories.filter(
        (category) => category.name === findCategory
      )[0]?._id;

      console.log(categoryId);

      if(show){
        formData.append("image", file);
      }
      else{
        formData.append("image", book.image)
      }


      formData.append("categoryId", categoryId);
        console.log(formData)
      if (mode === "add") {
        const result =  addBook(formData);
        if(result){
          setFileName("No Choosen Image");
        setFile(null);
        resetForm();
        }
        else {
          toast.error("Something went wrong...")
          
        }
      }
      else{
        updateBook(book._id, formData)
        setEditMode(false);
      }
       
    },
    validationSchema,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setFile(e.target.files[0]);
    }
  };

  const handleCancleEditBook = () => {
    if (mode === "add") {
      navigate("/book");
    } else {
      setEditMode(false);
    }
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit} method="post">
          <div className="row" style={{ marginBottom: "35px" }}>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Book Name*</div>
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
              <div className={styles.inputName}>Book Price (Rs)* </div>
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
              <div className={styles.inputName}>Category*</div>
              <select
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                name="category"
                id=""
                style={{ width: "100%", height: "40px" }}
              >
                {categories &&
                  categories.map((category) => {
                    return (
                      <option value={category.name}>{category.name}</option>
                    );
                  })}
              </select>
            </div>
            <div className={styles.rowHalf}>
              <div className={styles.inputName}>Description*</div>
              <input
                className="input"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </div>
          </div>
          {mode === "edit" && !show && (
            <div>
              {" "}
              Do you want to Change Image?{" "}
              <button className="btn" onClick={() => setShow(true)}>
                Yas
              </button>
              <div className={styles.rowHalf}>
                <img
                  src={`http://localhost:5000/${book?.image}`}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
          {show && (
            <div className="row center">
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
                  onChange={handleFileChange}
                  onBlur={handleBlur}
                />
                <p
                  id="file-name"
                  className="center"
                  style={{
                    justifyContent: "start",
                    paddingLeft: "10px",
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
          )}
          {fileError && (
            <div className="error center" style={{ marginTop: "10px" }}>
              {fileError}
            </div>
          )}

          <div style={{ display: "flex", marginTop: "35px" }}>
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
                {mode === "add" ? "Add" : "Save"}
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
                onClick={handleCancleEditBook}
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

export default BookForm;
