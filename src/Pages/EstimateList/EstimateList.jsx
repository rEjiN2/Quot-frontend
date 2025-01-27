import React, { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Paper, Box } from '@mui/material'
import axios from 'axios'

const EstimateList = () => {
  const [estimates, setEstimates] = useState([]) // Store fetched estimates
  const [loading, setLoading] = useState(true)
  const [selectedEstimate, setSelectedEstimate] = useState(null)

  // Fetch estimates from API
//   const BASE_URL = process.env.BASE_URL
  const BASE_URL = "http://localhost:5000";
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzk2ODNmNjFmMzkzYmUwMWM5NjI5OTYiLCJpYXQiOjE3Mzc5MTgxMjQsImV4cCI6MTczODAwNDUyNH0.4fh4Y7vqjIFsjfbrgpPHDIlrKyhI90npUgMZ-XwTP-E"
  useEffect(() => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    axios.get(`${BASE_URL}/api/qoutation/get-estimate?userId=679683f61f393be01c962996`,config)
      .then(response => {
        setEstimates(response.data.data) // Set the fetched data to the state
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching estimates:", error)
        setLoading(false)
      })
  }, [])

  // Function to fetch and show individual estimate details
  const handleViewEstimate = (estimateId) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    axios.get(`${BASE_URL}/api/qoutation/get-estimate/${estimateId}`,config)
      .then(response => {
        setSelectedEstimate(response.data.data) // Set selected estimate details to the state
      })
      .catch(error => {
        console.error("Error fetching individual estimate:", error)
      })
  }

  // Loading state
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Estimate List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Estimate Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {estimates.map((estimate) => (
              <TableRow key={estimate._id}>
                <TableCell>{estimate.title}</TableCell>
                <TableCell>{estimate.status}</TableCell>
                <TableCell>{estimate.grandTotal}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleViewEstimate(estimate._id)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedEstimate && (
        <div>
          <h3>Estimate Details</h3>
          {/* <pre>{JSON.stringify(selectedEstimate, null, 2)}</pre> */}
            <p>Estimate Name: {selectedEstimate.title}</p>
           {selectedEstimate.mainTasks.map((data)=>(
             <Box>
               <p>Task Name: {data.name}</p>
               {data.subtasks.map((subtask)=>(
                 <Box>
                   <p>Subtask Name: {subtask.name}</p>
                   <p>Subtask Description: {subtask.description}</p>
                   <p>Subtask Quantity: {subtask.quantity}</p>
                   <p>Subtask Rate: {subtask.rate}</p>
                   <p>Subtask Total: {subtask.total}</p>
                 </Box>
               ))}
               <Box></Box>
             </Box>
           ))}
            <Box></Box>
        </div>
      )}
    </div>
  )
}

export default EstimateList
