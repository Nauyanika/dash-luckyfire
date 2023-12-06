import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Swal from 'sweetalert2';

function BallSettings() {
  const apiBaseURL = "http://52.90.55.43:5000";

  const [ballSettings, setBallSettings] = useState({
  basket_speed: 0.5,
  ball_size: 1,
  ball_bounciness: 0,
  ball_speed: 1,
  ball_weight: 1,
  combination_difficulty: 0,
});

useEffect(() => {
  fetchGameSettings();
}, []);

const fetchGameSettings = async () => {
  try {
    const response = await axios.post(`${apiBaseURL}/auth/authFetchGameSetting`);
    const gameSettings = response.data.data;
    console.log(gameSettings)
    setBallSettings((prevSettings) => ({
      ...prevSettings,
      basket_speed: gameSettings.basket_speed,
      ball_size: gameSettings.ball_size,
      ball_bounciness: gameSettings.ball_bounciness,
      ball_speed: gameSettings.ball_speed,
      ball_weight: gameSettings.ball_weight,
      combination_difficulty: gameSettings.combination_difficulty,
    }));
  } catch (error) {
    console.error(error);
    // Handle error message or any other action
  }
};

  
  



  const handleSliderChange = (field, value) => {
    setBallSettings((prevSettings) => ({
      ...prevSettings,
      [field]: value,
    }));
  };

  

  // ...
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Confirm',
      text: 'Are you sure you want to save the settings?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.put(`${apiBaseURL}/auth/setBallSettings`, ballSettings);
          Swal.fire({
            title: 'Saved',
            text: 'Settings saved successfully',
            icon: 'success',
          });
          
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'An error occurred while saving the settings',
            icon: 'error',
          });
          // Handle error message or any other action
        }
      }
    });
  };
  


  return (
    <Box sx={{ maxWidth: '350px', marginRight: 'auto' }}>
      <form onSubmit={handleSubmit}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Setting</TableCell>
                <TableCell style={{ color: 'white' }}>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Basket Speed</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.basket_speed}
                    onChange={(e, value) =>
                      handleSliderChange('basket_speed', value)
                    }
                    min={0.5}
                    max={4}
                    step={0.01}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Ball Size</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.ball_size}
                    onChange={(e, value) =>
                      handleSliderChange('ball_size', value)
                    }
                    min={1}
                    max={1.5}
                    step={0.01}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Ball Bounciness</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.ball_bounciness}
                    onChange={(e, value) =>
                      handleSliderChange('ball_bounciness', value)
                    }
                    min={0}
                    max={0.6}
                    step={0.01}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Ball Speed</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.ball_speed}
                    onChange={(e, value) =>
                      handleSliderChange('ball_speed', value)
                    }
                    min={1}
                    max={8}
                    step={1}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Ball Weight</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.ball_weight}
                    onChange={(e, value) =>
                      handleSliderChange('ball_weight', value)
                    }
                    min={1}
                    max={6}
                    step={1}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ color: 'white' }}>Combination Difficulty</TableCell>
                <TableCell>
                  <Slider
                    value={ballSettings.combination_difficulty}
                    onChange={(e, value) =>
                      handleSliderChange('combination_difficulty', value)
                    }
                    min={0}
                    max={10}
                    step={1}
                    valueLabelDisplay="on"
                    sx={{ width: '200px' }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <button
          type="submit"
          style={{
            padding: '8px 16px',
            background: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginTop: '16px',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'lightgreen';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'green';
          }}
        >
          Save
        </button>
      </form>
    </Box>
  );
}

export default BallSettings;
