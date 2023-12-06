import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
import axios from "axios";

function ViewAgent() {
  const apiBaseURL = "http://localhost:5000";
  const [data, setData] = useState([]);

  // Get Agents
  const getAgents = async () => {
    try {
      const response = await axios.get(`${apiBaseURL}/user/fetchAgentData`);
      if (response.data.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      Swal.fire(`Something went wrong!`, "error");
    }
  };

  useEffect(() => {
    getAgents();
  }, []);

  const handleDelete = async (rowData) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${apiBaseURL}/user/deleteAgent/${rowData.id}`);
          if (response.data.status === 200) {
            Swal.fire("Success", response.data.message, "success");
            getAgents();
          }
        } catch (error) {
          console.log("Error deleting agent:", error);
          Swal.fire("Error", "Failed to delete agent", "error");
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle cancel action
        Swal.fire("Cancelled", "Agent deletion was cancelled", "info");
      }
    });
  };

  const handleEdit = (rowData) => {
    Swal.fire({
      title: "Edit Agent",
      html:
        `<input id="agentName" class="swal2-input" value="${rowData.agent_name}" placeholder="Agent Name">` +
        `<input id="agentPhoneNumber" class="swal2-input" value="${rowData.agent_phoneNumber}" placeholder="Agent Phone Number">` +
        `<input id="password" class="swal2-input" value="${rowData.password}" placeholder="Password">`,
      focusConfirm: false,
      preConfirm: () => {
        const agent_name = Swal.getPopup().querySelector("#agentName").value;
        const agent_phoneNumber = Swal.getPopup().querySelector("#agentPhoneNumber").value;
        const password = Swal.getPopup().querySelector("#password").value;
  
        // Validate the form fields
        if (!agent_name || !agent_phoneNumber || !password) {
          Swal.showValidationMessage("Please fill in all the fields");
          return false;
        }
  
        const newData = {
          id: rowData.id,
          agent_name,
          agent_phoneNumber,
          password,
        };
  
        updateAgent(newData);
      },
    });
  };
  

  const updateAgent = async (newData) => {
    try {
      const response = await axios.put(`${apiBaseURL}/user/editAgent`, newData);
      if (response.data.status === 200) {
        Swal.fire("Success", response.data.message, "success");
        getAgents();
      }
    } catch (error) {
      console.log("Error editing agent:", error);
      Swal.fire("Error", "Failed to edit agent", "error");
    }
  };

  const columns = [
    { title: "S.No.", field: "id", editable: "never" },
    { title: "Agent Name", field: "agent_name" },
    { title: "Agent Phone Number", field: "agent_phoneNumber" },
    { title: "Password", field: "password" },
    {
      title: "Actions",
      render: (rowData) => (
        <div>
          <button className="btn btn-primary" onClick={() => handleEdit(rowData)}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(rowData)}>
            Delete
          </button>
        </div>
      ),
      editable: "never",
    },
  ];

  return (
    <div className="card card-outline card-info">
      <MaterialTable
        title="Agents"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }}
      />
    </div>
  );
}

export default ViewAgent;
