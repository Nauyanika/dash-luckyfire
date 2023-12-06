import React, { useState, useEffect } from "react";
import "../../style/Contact.css";
import axios from "axios";
import { apiBaseURL } from "../../config";
import MaterialTable from 'material-table'
import { Link } from 'react-router-dom'
// import { authToken } from "../../../authToken";
function JeetoJokerGame() {
 
  const [data, setData] = useState([])

  const columns = [
    { title: "Serial No", render: rowData => rowData.tableData.id + 1 },
      { title: 'Agent Name', field: "dusername" },
      { title: "Player Name", field: "username" },
      { title: "Bet Amount", field: "txn_amount" }, 
      { title: "Status", field: "status" }
  ]

  useEffect(() => {
      fetch("/api/transaction")
          .then((response) => response.json())
          .then(json => setData(json))
  }, [])

    const [countDown, setCountDown] = React.useState(0);
    const [runTimer, setRunTimer] = React.useState(false);
  
    React.useEffect(() => {
      let timerId;
  
      if (runTimer) {
        setCountDown(60 * 5);
        timerId = setInterval(() => {
          setCountDown((countDown) => countDown - 1);
        }, 1000);
      } else {
        clearInterval(timerId);
      }
  
      return () => clearInterval(timerId);
    }, [runTimer]);
  
    React.useEffect(() => {
      if (countDown < 0 && runTimer) {
        console.log("expired");
        setRunTimer(false);
        setCountDown(0);
      }
    }, [countDown, runTimer]);
  
    const togglerTimer = () => setRunTimer((t) => !t);
  
    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);
  return (
    <div className="content-wrapper">
      <div className="row ml-2 mr-2">
        <div className="col-md-12">
        
          <div className="card card-outline card-info">
          <div className='borders'>
                <ul className="nav nav-tabs">
                  
                <li className="nav-item">
                     <span className="ml-3 badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link " to="/ShowCurrentBet"> Double Chance </Link>
                  </li>
                  <li className="nav-item ml-3">
                     <span className="badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link" to="/JeetoJokerGame" >  Jeeto joker </Link>
                  </li>
                  <li className="nav-item ml-3">
                    <span className="badge bg-primary">112 </span> <span className=" ml-2 badge bg-warning">00:59 </span>
                     <Link className="nav-link " to="/16CardsGame"> 16 Cards  </Link>
                  </li>
                  <li className="nav-item ml-3">
                      <span className="badge bg-primary">112 </span> <span className="ml-3 badge bg-warning">00:59 </span>
                     <Link className="nav-link "to="/SpinWinGame" >Spin Win</Link>
                  </li>
              </ul>  
        </div>
            <div className="card-body">
              <div className="row">
                {/* First GAme */}
                <div className="col-md-3">
                  <div className="card card-outline card-warning">
                    <div className="d-flex">
                      <div className="p-2">
                        <h3 className="card-title">Two Spin Game</h3>
                      </div>
                      <div className="ml-auto p-2">
                        <span className="p-2 badge bg-primary"> </span>
                      </div>
                    </div>

                   
                      <form className="shadow-sm p-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker1"
                            value="1"
                          />
                          <label className="form-check-label" for="jeetoJoker1">
                            1
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker2"
                            value="2"
                          />
                          <label className="form-check-label" for="jeetoJoker2">
                            2
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker3"
                            value="3"
                          />
                          <label className="form-check-label" for="jeetoJoker3">
                            3
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker4"
                            value="4"
                          />
                          <label className="form-check-label" for="jeetoJoker4">
                            4
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker5"
                            value="5"
                          />
                          <label className="form-check-label" for="jeetoJoker5">
                            5
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker6"
                            value="6"
                          />
                          <label className="form-check-label" for="jeetoJoker6">
                            6
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker7"
                            value="7"
                          />
                          <label className="form-check-label" for="jeetoJoker7">
                            7
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker8"
                            value="8"
                          />
                          <label className="form-check-label" for="jeetoJoker8">
                            8
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker9"
                            value="9"
                          />
                          <label className="form-check-label" for="jeetoJoker9">
                            9
                          </label>
                        </div>
                        <div className="form-check pt-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="jeetoJoker"
                            id="jeetoJoker10"
                            value="10"
                          />
                          <label className="form-check-label" for="jeetoJoker10">
                            10
                          </label>
                        </div>
                      </form>
                    
                  </div>
                </div>
                {/* First End */}
                
                <div className="col-md-9">
               
                                    <MaterialTable
                                        title="Current Betting User List"
                                        data={data}
                                        columns={columns}
                                    />
                                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JeetoJokerGame;
