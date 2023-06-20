import React, { useState } from "react";
import "./logi.css";
import Page from "./home";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  let [fname, setname] = useState("");
  let [pass, setpass] = useState("");
  let n = useNavigate("");
  let Hom = async (e) => {
    e.preventDefault();
    if (fname == "") {
      alert("please enter username");
    } else if (pass == "") {
      alert("please enter password");
    } else {
      let result = await axios.post(
        "http://localhost:8080/sig/" + fname + "/" + pass
      );
      alert(result.data);
      if (result.data == "success") {
        n("/home");
      }
    }
  };
}
let n = useNavigate();
let Gologin = () => {
  n("/login");
};
let Gohome = () => {
  n("/home");

  return (
    <div className="div1">
      <center>
        <form>
          <div
            style={{
              background: "deepskyblue",
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
                <u> LOGIN FORM</u>
              </h1>
              <span>Username : </span>{" "}
              <input
                type="Username"
                value={fname}
                onChange={(e) => setname(e.target.value)}
                placeholder="enter your name"
                id="a"
                required
              ></input>
              <br></br>
              <br></br>
              Password :{" "}
              <input
                type="Password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                placeholder="enter the password"
                id="c"
                required
              ></input>
              <br></br>
              <br></br>
            </center>
            <button onClick={Gohome}>LOGIN</button>
            <br></br>
            <br></br>
            <a href="a">FORGOTPASSWORD?</a> <br></br>
          </div>
        </form>
      </center>
    </div>
  );
};
export default Login;
