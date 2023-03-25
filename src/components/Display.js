import React from "react";
import "../Styles/Display.css";
const Display = () => {
  return (
    <>
      <div className="Body_Div">
        <div className="student">
          <h1>Student - 1</h1>
          <h3>
            First Name : <span>{localStorage.getItem("st_1_first_name")}</span>
          </h3>
          <h3>
            Last Name : <span>{localStorage.getItem("st_1_last_name")}</span>
          </h3>
          <h3>
            Mother Name :<span>{localStorage.getItem("st_1_mother_name")}</span>
          </h3>
          <h3>
            Father Name :<span>{localStorage.getItem("st_1_father_name")}</span>
          </h3>
          <h3>
            University Name :
            <span>{localStorage.getItem("st_1_uni_name")}</span>
          </h3>
        </div>
        <div className="student">
          <h1>Student - 2</h1>
          <h3>
            First Name : <span>{localStorage.getItem("st_2_first_name")}</span>
          </h3>
          <h3>
            Last Name : <span>{localStorage.getItem("st_2_last_name")}</span>
          </h3>
          <h3>
            Mother Name :<span>{localStorage.getItem("st_2_mother_name")}</span>
          </h3>
          <h3>
            Father Name :<span>{localStorage.getItem("st_2_father_name")}</span>
          </h3>
          <h3>
            University Name :
            <span>{localStorage.getItem("st_2_uni_name")}</span>
          </h3>
        </div>
        <div className="student">
          <h1>Student - 3</h1>
          <h3>
            First Name : <span>{localStorage.getItem("st_3_first_name")}</span>
          </h3>
          <h3>
            Last Name : <span>{localStorage.getItem("st_3_last_name")}</span>
          </h3>
          <h3>
            Mother Name :<span>{localStorage.getItem("st_3_mother_name")}</span>
          </h3>
          <h3>
            Father Name :<span>{localStorage.getItem("st_3_father_name")}</span>
          </h3>
          <h3>
            University Name :
            <span>{localStorage.getItem("st_3_uni_name")}</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Display;
