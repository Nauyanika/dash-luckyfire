import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import '../../style/Contact.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
 
import axios from "axios";
// import { apiBaseURL } from "../../config";
import moment from 'moment'
let apiBaseURL  = "http://52.90.55.43:5000"
// import { authToken } from "../../authToken";



function WheelOfForturneGameHistory() {
    const [data, setData] = useState([]);

    // get Agents
    const gameReports = async () => {
      await axios
        .get(`${apiBaseURL}/totaldata`)
        .then(function (response) {
          if (response.data.status === 200) { 
            setData(response.data.data);
          }
        })
        .catch(function (error) { 
        });
    };
   
 
    //get Agents
   
    const columns = [
      { title: "Sr_No", render: (rowData) => rowData.tableData.id + 1 },

      // { title: "BANK", field: "is_verified" , render: row =>row.is_verified ==0?<button type="button" className="btn btn-primary" onClick={() => alert(row.txn_id)}>Verify</button>:row.is_verified ==1?<span class="badge badge-success p-2">Verified</span>:<span class="p-2 badge badge-danger">Rejected</span> },
      { title: "Total In", field: "total_in" },
      { title: "Total Out", field: "total_out" },
      { title: "Play Number", field: "play_no" },
       { title: "Winning Number", field: "winning_no" },
       { title: "Percentage", field: "percentage" },
      { title: "Revenue", field: "revenue" },
  
    ];
  
    useEffect(() => {
      gameReports(); 
    }, []);
    return (
        <>
        <div  className="card card-outline card-info">
      <MaterialTable
        title="Current&Lastdata"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
        </>
    )
}
export default WheelOfForturneGameHistory;
