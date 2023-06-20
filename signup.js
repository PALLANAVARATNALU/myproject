import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./logi.css";
import { Alert } from "@mui/material";
import axios from "axios";
function Signin() {
  let n = useNavigate();
  let Gologin = () => {
    n("/login1");
  };
  let [fname, setname] = useState("");

  let [email, setemail] = useState("");

  let [pass, setpass] = useState("");
  let submit = async (e) => {
    e.preventDefault();
    if (fname == "") {
      alert("enter the name");
    } else if (pass == "") {
      alert("enter the password");
    } else {
      let mydata = { name: fname, gmail: email, password: pass };
      let res = await axios.post("http://localhost:8080/login", mydata);
      if (res.data) {
        alert("data entered");
        n("/login");
      }
    }
  };
  return (
    <div id="sin">
      <center>
        <form>
          <div
            style={{
              backgroundColor: "aqua",
              maxHeight: "40%",
              maxWidth: "35%",
              border: "solid black",
              borderStyle: "dotted",
              borderRadius: "1cm",
            }}
          >
            <center>
              {" "}
              <h1 style={{ color: "blue" }}>
                <u>SIGN UP FORM</u>
              </h1>
              <span>Name : </span>{" "}
              <input
                type="Name"
                value={fname}
                onChange={(e) => setname(e.target.value)}
                placeholder="enter your name"
                id="a"
                required
              ></input>
              <br></br>
              <br></br>
              Email :{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="enter your email"
                id="b"
                required
              ></input>
              <br></br>
              <br></br>
              Password :{" "}
              <input
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                placeholder="enter the password"
                id="c"
                required
              ></input>
              <br></br>
              <br></br>
            </center>
            <button on Click={Gologin}>
              SIGNUP
            </button>
            <button onClick={Alert}>LOGIN</button>
            <br></br>
            <br></br>
            <a href="a">FORGOTPASSWORD?</a> <br></br>
          </div>
        </form>
      </center>
    </div>
  );
}
export default Signin;
