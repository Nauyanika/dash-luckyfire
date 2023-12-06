import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import Swal from "sweetalert2";

function AssignAgent() {
  const apiBaseURL = "http://52.90.55.43:5000";
  const [agentData, setAgentData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [selectedAgents, setSelectedAgents] = useState({});

  const fetchAgentData = async () => {
    try {
      const response = await axios.get(`${apiBaseURL}/user/fetchAgentData`);
      if (response.data.status === 200) {
        setAgentData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching agent data:", error);
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${apiBaseURL}/user/getPlayer`);
      if (response.data.status === 200) {
        setUserData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchAgentPhoneNumber = async (agent_name) => {
    try {
      const response = await axios.post(`${apiBaseURL}/user/fetchAgentPhoneNumber`, {
        agent_name: agent_name,
      });
      if (response.data.status === 200) {
        const phoneNumber = response.data.data;
        return phoneNumber;
      }
    } catch (error) {
      console.error("Error fetching agent phone number:", error);
    }
    return null;
  };
  

  const updateAgentPhoneNumber = async (user_id, agent_phoneNumber) => {
    try {
      const response = await axios.put(
        `${apiBaseURL}/user/updateAgentPhoneNumber`,
        {
          user_id: user_id,
          agent_phoneNumber: agent_phoneNumber,
        }
      );
      if (response.data.status === 200) {
        Swal.fire("Success", "Agent phone number updated successfully", "success");
      } else {
        Swal.fire("Error", "Failed to update agent phone number", "error");
      }
    } catch (error) {
      console.error("Error updating agent phone number:", error);
    }
  };
  

const handleAgentNameChange = (user_id, agentName) => {
  setSelectedAgents((prevSelectedAgents) => ({
    ...prevSelectedAgents,
    [user_id]: agentName,
  }));
};


const handleSave = async (user_id) => {
    const agentName = selectedAgents[user_id];
    if (agentName !== "") {
      try {
        const phoneNumber = await fetchAgentPhoneNumber(agentName);
        if (phoneNumber) {
          await updateAgentPhoneNumber(user_id, phoneNumber);
        
          window.location.reload();
        } else {
          Swal.fire("Error", "Agent phone number not found", "error");
        }
      } catch (error) {
        console.error("Error updating agent phone number:", error);
      }
    } else {
      Swal.fire("Error", "Please select an agent", "error");
    }
  };
  
  

  useEffect(() => {
    fetchAgentData();
    fetchUserData();
  }, []);

  return (
    <div>
      <MaterialTable
        title="Assign Agent"
        columns={[
          { title: "User ID", field: "user_id" },
          { title: "Agent Phone Number", field: "agent_phoneNumber" },
          {
            title: "Agent Name",
            field: "agent_name",
            render: (rowData) => (
                <select
                value={selectedAgents[rowData.user_id] || ""}
                onChange={(e) => handleAgentNameChange(rowData.user_id, e.target.value)}
              >
                <option value="">Select Agent</option>
                {agentData.map((agent) => (
                  <option key={agent.id} value={agent.agent_name}>
                    {agent.agent_name}
                  </option>
                ))}
              </select>
              
            ),
          },
          {
            title: "Save",
            field: "save",
            render: (rowData) => (
              <button
                onClick={() => handleSave(rowData.user_id)}
                className="btn btn-success"
              >
                Save
              </button>
            ),
          },
        ]}
        data={userData}
      />
    </div>
  );
}

export default AssignAgent;
