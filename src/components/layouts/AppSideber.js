import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

function AppSidebar() {
  useEffect(() => {
    const tokenData = JSON.parse(sessionStorage.getItem("token"));
    if (!tokenData) {
      sessionStorage.removeItem("token");
      window.location.reload();
    }

    const agentLogin = sessionStorage.getItem("loginEmail");


    if (agentLogin == "admin@admin.com") {

    } else {

      document.getElementById("AddAgent").style.display = "none";
      //document.getElementById("AddPlayer").style.display = "none";
      document.getElementById("AssignAgent").style.display = "none";
      document.getElementById("ViewAgent").style.display = "none";
      document.getElementById("GameSetting").style.display = "none";
      document.getElementById("GameSettings").style.display = "none";

    }

  }, []);


  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-3">
      <a href="index3.html" className="brand-link">
        <img
          src="P1.png"
          alt="Bubble Shooter"
          className="brand-image img-circle elevation-4"
        />
        <span className="brand-text font-weight-light">Admin</span>
      </a>
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item menu-open">
              <Link to="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-header">Users Management</li>
            <li className="nav-item" id="AddPlayer">
              <Link to="/AddnewPlayer" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> Add Players</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/PlayersList" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> View Players</p>
              </Link>
            </li>

            <li className="nav-item" id="AddAgent">
              <Link to="/AddAgent" className="nav-link" id="addAgent">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Add Agent</p>
              </Link>
            </li>
            <li className="nav-item" id="AssignAgent">
              <Link to="/AssignAgent" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Assign Agent</p>
              </Link>
            </li>


            <li className="nav-item" id="ViewAgent">
              <Link to="/ViewAgent" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>View Agent</p>
              </Link>
            </li>

            <li className="nav-header">Point Report</li>

            <li className="nav-item">
              <Link to="/PointTransfer" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p> Add Credits</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/PointDeduct" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p> Deduct Credits</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/Transactions" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p> Transaction Report</p>
              </Link>
            </li>

            <li className="nav-header" id="GameSetting">Game Settings</li>
            <li className="nav-item" id="GameSettings">
              <Link to="/BallSetting" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> Game Settings</p>
              </Link>
            </li>



            <li className="nav-header">Test:--------</li>
            <li className="nav-item">
              <Link to="/PlayersHistory" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> I/O Test</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PlayersList" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Payout Test</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ViewAgent" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Counter Test</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/AddnewPlayer" className="nav-link">
                <i className="fa-solid fa-users nav-icon" />
                <p> Sound Test</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/GamePlayHistory" className="nav-link">
                <i className="fa-solid fa-arrow-right-arrow-left nav-icon" />
                <p>Screen Test</p>
              </Link>
            </li>









            <li className="nav-header">Records:--------</li>
            <li className="nav-item">
              <Link to="/userupi" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Total Data</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/WheelOfForturneGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Current & Last Data</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/PokerGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Daily Data</p>
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/TigerVsElephantGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Weekly Data</p>
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link to="/LuckyBallGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Monthly Data</p>
              </Link>
            </li>



            <li className="nav-item">
              <Link to="/LuckyBallGamePlayHistory" className="nav-link">
                <i className="fas fa-address-book nav-icon"></i>
                <p>Clear & Periodical Data</p>
              </Link>
            </li>





            <li className="nav-header">System Settings:------</li>
            <li className="nav-item">
              <Link to="/AdminContact" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Admin Contact</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/changepassword" className="nav-link">
                <i className="fa-solid fa-key nav-icon"></i>
                <p>Change Password</p>
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default AppSidebar;
