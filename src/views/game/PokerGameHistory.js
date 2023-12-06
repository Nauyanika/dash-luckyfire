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



function PokerGameHistory() {
    const [data, setData] = useState([]);

    // get Agents
    const gameReports = async () => {
      await axios
        .get(`${apiBaseURL}/data`)
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
            { title: "Serial No", field: "id" },
            { title: "Total In", field: "total_in" },
            { title: "Total Out", field: "total_out" },
            { title: "Percent", field: "percentage" },
           // { title: "Win No.1", field:"winNo1" },

           // { title: "Win No.2",field:"winNo2" },
            //{ title: "Date & Time", render: rowData => moment(rowData.created).format("DD-MM-YYYY h:mm:ss ") }, 

    ];
  
    useEffect(() => {
      gameReports(); 
    }, []);
    return (
        <>
        <div  className="card card-outline card-info">
      <MaterialTable
        title="Daily Data"
        data={data}
        columns={columns}
        options={{ actionsColumnIndex: -1 }} 
      />
    </div>
        </>
    )
}
export default PokerGameHistory 
    ;
