import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
import Swal from "sweetalert2";

function AddNewAgent() {
  let apiBaseURL = "http://localhost:5000";

  const sessionData = sessionStorage.getItem("token");
  const [values, setValues] = useState({
    agent_name: "",
    agent_phoneNumber: "",
    password: "",
    agent_email: "", 
  });

  const [iscreated, setiscreated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { agent_name, agent_phoneNumber, password, agent_email } = values; // Include agent_email in the request
    const agent = {
      agent_name,
      agent_phoneNumber,
      password,
      agent_email, // Include agent_email in the request
    };
    await axios({
      method: "post",
      url: `${apiBaseURL}/auth/addagentbyadmin`,
      data: agent,
      headers: { Authorization: `Bearer ${sessionData.token}` },
    })
      .then(function (response) {
        setiscreated((pre) => !pre);
        if (response.data.status === 200) {
          setValues({
            agent_name: "",
            agent_phoneNumber: "",
            password: "",
            agent_email: "", // Reset agent_email value
          });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${response.data.message} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          if (response.data.status == 401) {
            sessionStorage.removeItem("token");
            window.location.reload();
          } else {
            Swal.fire({
              position: "top-end",
              icon: "warning",
              title: "Oops...",
              text: `${response.data.message} !`,
              showConfirmButton: false,
              timer: 1700,
            });
          }
        }
      })
      .catch(function (error) {
        Swal.fire(`Something went wrong!`, "error");
      });
  };

  useEffect(() => {
    // Your existing code here
  }, [iscreated]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card card-outline card-info">
          <div className="card-header">
            <h3 className="card-title">
              <i className="fa-solid fa-user-tie fa-2x" /> Add New Agent
            </h3>
          </div>
          <div className="card-body">
            <form method="post" onSubmit={handleSubmit}>
              <div className="form-group row">
                <label htmlFor="inputAgentName" className="col-sm-3 col-form-label">
                  Agent Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="agent_name"
                    value={values.agent_name}
                    onChange={handleChange("agent_name")}
                    className="inputfield form-control"
                    placeholder="Enter agent name"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPhoneNumber" className="col-sm-3 col-form-label">
                  Phone Number
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    name="agent_phoneNumber"
                    value={values.agent_phoneNumber}
                    onChange={handleChange("agent_phoneNumber")}
                    className="inputfield form-control"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                  Enter Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange("password")}
                    className="inputfield form-control"
                    placeholder="***********"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="inputAgentEmail" className="col-sm-3 col-form-label">
                  Agent Email
                </label>
                <div className="col-sm-9">
                  <input
                    type="email"
                    name="agent_email"
                    value={values.agent_email}
                    onChange={handleChange("agent_email")}
                    className="inputfield form-control"
                    placeholder="Enter agent email"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm-3 "></div>
                <div className="col-sm-9">
                  <div className="form-group row">
                    <div className="col-sm-3 ">
                      <button className="btn-primary form-control">Reset</button>
                    </div>
                    <div className="col-sm-3 ">
                      <button type="submit" className="btn-success form-control"> {/* Changed 'onSubmit' to 'submit' */}
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewAgent;
