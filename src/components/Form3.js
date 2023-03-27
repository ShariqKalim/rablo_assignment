import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Form3.css";
import Progress3 from "./Progress3";

const Form3 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [uniName, setUniname] = useState("");
  const [dept, setDept] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();
  const handleEvent = (e) => {
    e.preventDefault();

    if (dept && terms) {
      // window.location.href = "http://localhost:3000/Display";
      navigate("/Display");
    } else {
      alert("please fill the form!");
    }
    localStorage.setItem("st_3_first_name", firstName);
    localStorage.setItem("st_3_last_name", lastName);
    localStorage.setItem("st_3_father_name", fatherName);
    localStorage.setItem("st_3_mother_name", motherName);
    localStorage.setItem("st_3_uni_name", uniName);
  };

  return (
    <>
      <div className="Outer_Div">
        <div className="Inner_Div">
          <Progress3 />
          <h1>Student-3</h1>
          <form action="" onSubmit={handleEvent}>
            {firstName.length <= 4 && lastName.length <= 4 ? (
              <>
                <span id="first_name">at least 4 characters</span> <br />
              </>
            ) : (
              ""
            )}
            <div className="first_text">
              <input
                type="text"
                className="text"
                placeholder="First name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                type="text"
                className="text"
                placeholder="Last name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            {fatherName.length <= 4 && motherName.length <= 4 ? (
              <>
                <span id="first_name">at least 4 characters</span> <br />
              </>
            ) : (
              ""
            )}
            <div className="second_text">
              <input
                type="text"
                className="text"
                placeholder="Father's name"
                onChange={(e) => setFatherName(e.target.value)}
              />
              <input
                type="text"
                className="text"
                placeholder="Mother's name"
                onChange={(e) => setMotherName(e.target.value)}
              />
            </div>
            {uniName.length <= 10 ? (
              <>
                <span id="first_name">must be 10 characters long</span> <br />
              </>
            ) : (
              ""
            )}
            <input
              type="text"
              id="long_text"
              placeholder="University name"
              onChange={(e) => setUniname(e.target.value)}
            />
            <span id="select_course">select your course mode</span>
            <div className="extra_input">
              <br />
              <div>
                <input type="radio" name="HTML" id="HTML" value="HTML" />
                <label htmlFor="HTML">Online</label>
              </div>

              <div>
                <input type="radio" name="HTML" id="HTML" value="HTML" />
                <label htmlFor="HTML">Offline</label>
              </div>

              <select
                name="Department"
                id="Department"
                onChange={() => setDept(true)}
              >
                <option value="Select">Select</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics and Communication">
                  Electronics and Communication
                </option>
              </select>
            </div>

            <div className="terms">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => setTerms(true)}
              />
              <label htmlFor="checkbox">
                I agree with the terms and conditions and policies of the
                institute.
              </label>
            </div>
            <div className="button_div">
              <Link to="/Form2" id="submit">
                Back
              </Link>
              <button id="submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form3;
