import React, { useState } from "react";
import styles from "../styles/loginOrReg.module.css";
import headerStyle from "../styles/header.module.css";
// import '../index.css'

type InputeData = {
  firstName: string;
  lastName: string;
  shopeCategory: string;
  discription: string;
};

const EditProductForm: React.FC = () => {
  const [inputData, setInputData] = useState<InputeData>({
    firstName: "",
    lastName: "",
    shopeCategory: "",
    discription: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  function updateLabel() {}

  return (
    <>
      <div className="container">
        <div className="row" style={{ marginBottom: "35px" }}>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>First Name*</div>
            <input
              className="input"
              type="text"
              name="firstName"
              value={inputData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Last Name*</div>
            <input
              className="input"
              type="text"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "60px" }}>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Shop by Categories</div>
            <select name="" id="" style={{ width: "100%", height: "40px" }}>
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
              <option>Category 5</option>
            </select>
          </div>
          <div className={styles.rowHalf}>
            <div className={styles.inputName}>Discription</div>
            <input
              className="input"
              type="text"
              name="lastName"
              value={inputData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row" style={{ marginBottom: "35px" }}>
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
              style={{ display: "none" }}
              onChange={updateLabel}
            />
            <p
              id="file-name"
              className="center"
              style={{
                justifyContent: "start",
                border: "1px solid #767676",
                width: "100%",
                height: "40px",
                boxSizing: "border-box",
                borderLeft: "0px",
              }}
            >
              No file chosen
            </p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div>
            <button
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
      </div>
    </>
  );
};

export default EditProductForm;
