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



function GameHistory() {
    const [data, setData] = useState([]);

    // get Agents
    const gameReports = async () => {
      await axios
        .get(`${apiBaseURL}/screen`)
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
            { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
            { title: "Color", field: "color" },
            { title: "All White", field: "allwhite" },
            { title: "All Black", field:"allblack"},
           // { title: "Date & Time", render: rowData => moment(rowData.created_at).format("DD-MM-YYYY h:mm:ss ") }, 
            { title: "Frame", field: "frame" },
           // { title: "Bonus Spin", render: rowData => rowData.win_no?rowData.win_no :0 }, 
    ];
  
    useEffect(() => {
      gameReports(); 
    }, []);
    return (
        <>
        <div  className="card card-outline card-info">
      <MaterialTable
        title="Screen Test"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
        </>
    )
}
export default GameHistory
