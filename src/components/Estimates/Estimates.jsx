// import React, { useState } from 'react';
// import { 
//   Box, 
//   TextField, 
//   Typography, 
//   Button,
//   IconButton,
//   Card,
//   CardContent,
// } from '@mui/material';
// import { Plus, Trash2, Save } from 'lucide-react';

// const initialSubtask = {
//   name: '',
//   unit: '',
//   unitRate: '',
//   discount: '',
//   quantity: ''
// };

// const initialMainTask = {
//   name: '',
//   subtasks: [{ ...initialSubtask }]
// };

// const EstimateForm = () => {
//   const [mainTasks, setMainTasks] = useState([{ ...initialMainTask }]);
//   const [loading, setLoading] = useState(false);

//   const handleMainTaskChange = (index, value) => {
//     const updatedTasks = [...mainTasks];
//     updatedTasks[index].name = value;
//     setMainTasks(updatedTasks);
//   };

//   const handleSubtaskChange = (mainIndex, subIndex, field, value) => {
//     const updatedTasks = [...mainTasks];
//     updatedTasks[mainIndex].subtasks[subIndex][field] = value;
//     setMainTasks(updatedTasks);
//   };

//   const addSubtask = (mainIndex) => {
//     const updatedTasks = [...mainTasks];
//     updatedTasks[mainIndex].subtasks.push({ ...initialSubtask });
//     setMainTasks(updatedTasks);
//   };

//   const removeSubtask = (mainIndex, subIndex) => {
//     const updatedTasks = [...mainTasks];
//     updatedTasks[mainIndex].subtasks.splice(subIndex, 1);
//     setMainTasks(updatedTasks);
//   };

//   const addMainTask = () => {
//     setMainTasks([...mainTasks, { ...initialMainTask }]);
//   };

//   const removeMainTask = (index) => {
//     const updatedTasks = mainTasks.filter((_, i) => i !== index);
//     setMainTasks(updatedTasks);
//   };

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       // Format the data according to your API requirements
//       const formattedData = {
//         userId: "60d5ecb54df4a83e0c5f6a2b", // Replace with actual user ID
//         mainTasks: mainTasks.map(task => ({
//           name: task.name,
//           subtasks: task.subtasks.map(subtask => ({
//             name: subtask.name,
//             unit: subtask.unit,
//             unitRate: Number(subtask.unitRate),
//             discount: Number(subtask.discount),
//             quantity: Number(subtask.quantity)
//           }))
//         }))
//       };

//       const response = await fetch('https://quatation-app.vercel.app/api/qoutation/create-estimate', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formattedData)
//       });

//       const data = await response.json();
//       if (data.status) {
//         alert('Estimate created successfully!');
//         setMainTasks([{ ...initialMainTask }]);
//       } else {
//         alert('Failed to create estimate');
//       }
//     } catch (error) {
//       console.error('Error creating estimate:', error);
//       alert('Error creating estimate');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box className="p-8">
//       <Typography variant="h4" className="mb-8 text-center">Welcome to BOSIO</Typography>
//       <Typography variant="h4" className="mb-8">Quotation</Typography>

//       {mainTasks.map((mainTask, mainIndex) => (
//         <Card key={mainIndex} className="mb-6 p-4">
//           <CardContent>
//             <Box className="flex items-center gap-4 mb-4">
//               <Typography fontWeight="bold">Main Task {mainIndex + 1}</Typography>
//               <TextField
//                 value={mainTask.name}
//                 onChange={(e) => handleMainTaskChange(mainIndex, e.target.value)}
//                 placeholder="Enter main task name"
//                 className="flex-1"
//               />
//               {mainIndex > 0 && (
//                 <IconButton onClick={() => removeMainTask(mainIndex)} color="error">
//                   <Trash2 />
//                 </IconButton>
//               )}
//             </Box>

//             {mainTask.subtasks.map((subtask, subIndex) => (
//               <Box key={subIndex} className="ml-8 mb-4 p-4 border rounded">
//                 <Box className="flex items-center gap-4 mb-4">
//                   <Typography fontWeight="bold">Sub Task {subIndex + 1}</Typography>
//                   <TextField
//                     value={subtask.name}
//                     onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'name', e.target.value)}
//                     placeholder="Enter subtask name"
//                     className="flex-1"
//                   />
//                   {subIndex > 0 && (
//                     <IconButton onClick={() => removeSubtask(mainIndex, subIndex)} color="error">
//                       <Trash2 />
//                     </IconButton>
//                   )}
//                 </Box>

//                 <Box className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   <Box>
//                     <Typography fontSize="14px" fontWeight="bold">Unit</Typography>
//                     <TextField
//                       value={subtask.unit}
//                       onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'unit', e.target.value)}
//                       placeholder="m², m³, etc."
//                       fullWidth
//                     />
//                   </Box>
//                   <Box>
//                     <Typography fontSize="14px" fontWeight="bold">Unit Rate</Typography>
//                     <TextField
//                       value={subtask.unitRate}
//                       onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'unitRate', e.target.value)}
//                       type="number"
//                       fullWidth
//                     />
//                   </Box>
//                   <Box>
//                     <Typography fontSize="14px" fontWeight="bold">Discount (%)</Typography>
//                     <TextField
//                       value={subtask.discount}
//                       onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'discount', e.target.value)}
//                       type="number"
//                       fullWidth
//                     />
//                   </Box>
//                   <Box>
//                     <Typography fontSize="14px" fontWeight="bold">Quantity</Typography>
//                     <TextField
//                       value={subtask.quantity}
//                       onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'quantity', e.target.value)}
//                       type="number"
//                       fullWidth
//                     />
//                   </Box>
//                 </Box>
//               </Box>
//             ))}

//             <Button
//               startIcon={<Plus />}
//               onClick={() => addSubtask(mainIndex)}
//               variant="outlined"
//               className="ml-8"
//             >
//               Add Subtask
//             </Button>
//           </CardContent>
//         </Card>
//       ))}

//       <Box className="flex gap-4 mt-4">
//         <Button
//           startIcon={<Plus />}
//           onClick={addMainTask}
//           variant="contained"
//           color="primary"
//         >
//           Add Main Task
//         </Button>

//         <Button
//           startIcon={<Save />}
//           onClick={handleSubmit}
//           variant="contained"
//           color="success"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit Estimate'}
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default EstimateForm;


import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Typography, 
  Button,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { Plus, Trash2, Save } from 'lucide-react';

const createSubtask = () => ({
  name: '',
  unit: '',
  unitRate: '',
  discount: '',
  quantity: ''
});

const createMainTask = () => ({
  name: '',
  subtasks: [createSubtask()]
});

const EstimateForm = () => {
  const [mainTasks, setMainTasks] = useState([createMainTask()]);
  const [loading, setLoading] = useState(false);

  const handleMainTaskChange = (index, value) => {
    const updatedTasks = mainTasks.map((task, i) => 
      i === index ? { ...task, name: value } : task
    );
    setMainTasks(updatedTasks);
  };

  const handleSubtaskChange = (mainIndex, subIndex, field, value) => {
    const updatedTasks = mainTasks.map((task, i) => {
      if (i !== mainIndex) return task;
      
      const updatedSubtasks = task.subtasks.map((subtask, j) => 
        j === subIndex ? { ...subtask, [field]: value } : subtask
      );
      
      return { ...task, subtasks: updatedSubtasks };
    });
    setMainTasks(updatedTasks);
  };

  const addSubtask = (mainIndex) => {
    const updatedTasks = mainTasks.map((task, i) => {
      if (i !== mainIndex) return task;
      return {
        ...task,
        subtasks: [...task.subtasks, createSubtask()]
      };
    });
    setMainTasks(updatedTasks);
  };

  const removeSubtask = (mainIndex, subIndex) => {
    const updatedTasks = mainTasks.map((task, i) => {
      if (i !== mainIndex) return task;
      return {
        ...task,
        subtasks: task.subtasks.filter((_, j) => j !== subIndex)
      };
    });
    setMainTasks(updatedTasks);
  };

  const addMainTask = () => {
    setMainTasks([...mainTasks, createMainTask()]);
  };

  const removeMainTask = (index) => {
    setMainTasks(mainTasks.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formattedData = {
        userId: "60d5ecb54df4a83e0c5f6a2b",
        mainTasks: mainTasks.map(task => ({
          name: task.name,
          subtasks: task.subtasks.map(subtask => ({
            name: subtask.name,
            unit: subtask.unit,
            unitRate: Number(subtask.unitRate),
            discount: Number(subtask.discount),
            quantity: Number(subtask.quantity)
          }))
        }))
      };

      const response = await fetch('https://quatation-app.vercel.app/api/qoutation/create-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Nzk2ODNmNjFmMzkzYmUwMWM5NjI5OTYiLCJpYXQiOjE3Mzc5Njg1NjYsImV4cCI6MTczODA1NDk2Nn0.Sc1rhTDtAFhCOBLkXWK3tph_CJqyZ7aWBVhoWcBq80Q' 
        },
        body: JSON.stringify(formattedData)
      });

      const data = await response.json();
      if (data.status) {
        alert('Estimate created successfully!');
        setMainTasks([createMainTask()]);
      } else {
        alert('Failed to create estimate');
      }
    } catch (error) {
      console.error('Error creating estimate:', error);
      alert('Error creating estimate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{background:"#434343",padding:"2rem",minHeight:"100dvh"}} >
       <Box sx={{background:"#232526" ,borderRadius:"20px",padding:"1.5rem" ,boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",mb:"1rem"}}>
      <Typography variant="h4" fontWeight="bold" color='white' >BOSIO</Typography>
      <Typography variant="h4" paddingTop="1rem" fontWeight="bold" color='white'>Quotation</Typography>
      </Box>
      {mainTasks.map((mainTask, mainIndex) => (
        <Card key={mainIndex} sx={{p:"1rem" , background:"#232526",borderRadius:"20px",mb:"1rem"}} className="mb-6 p-4">
          <CardContent>
            <Box className="flex items-center gap-4 mb-4">
              <Typography fontWeight="bold" color='#fff'>Main Task {mainIndex + 1}</Typography>
              <TextField
      value={mainTask.name}
      onChange={(e) => handleMainTaskChange(mainIndex, e.target.value)}
      className="flex-1"
      sx={{
        mt: "0.2rem",
        width: "350px", // Set the width to increase field size
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px", // Rounded corners
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Outer shadow
          "& fieldset": {
            borderWidth: "1px", // Lightweight border
            borderColor: "#ccc", // Border color
          },
          "&:hover fieldset": {
            borderColor: "#aaa", // Border color on hover
          },
          "&.Mui-focused fieldset": {
            borderColor: "#007BFF", // Border color when focused
          },
          minHeight: "36px", // Reduces the height of the TextField
        },
        "& .MuiOutlinedInput-input": {
          padding: "6px 12px", // Adjust padding to reduce height
          color: "rgba(255, 255, 255, 0.8)", // Slightly white text
          caretColor: "white", // White cursor color
        },
        "& .MuiInputBase-input": {
          "&::placeholder": {
            color: "rgba(255, 255, 255, 0.5)", // Placeholder color
            opacity: 1,
          },
        },
      }}
    />
              {mainIndex > 0 && (
                <IconButton onClick={() => removeMainTask(mainIndex)} color="error">
                  <Trash2 />
                </IconButton>
              )}
            </Box>

            {mainTask.subtasks.map((subtask, subIndex) => (
              <Box key={subIndex} sx={{mt:"1rem"}} className="ml-8 mb-4 p-4 border rounded">
                <Box className="flex items-center gap-4 mb-4">
                  <Typography fontWeight="bold" color='#fff'>Sub Task {subIndex + 1}</Typography>
                  <TextField
                    value={subtask.name}
                    onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'name', e.target.value)}
                    className="flex-1"
                    sx={{
                      mt: "0.2rem",
                      width: "350px", // Set the width to increase field size
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px", // Rounded corners
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Outer shadow
                        "& fieldset": {
                          borderWidth: "1px", // Lightweight border
                          borderColor: "#ccc", // Border color
                        },
                        "&:hover fieldset": {
                          borderColor: "#aaa", // Border color on hover
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#007BFF", // Border color when focused
                        },
                        minHeight: "36px", // Reduces the height of the TextField
                      },
                      "& .MuiOutlinedInput-input": {
                        padding: "6px 12px", // Adjust padding to reduce height
                        color: "rgba(255, 255, 255, 0.8)", // Slightly white text
                        caretColor: "white", // White cursor color
                      },
                      "& .MuiInputBase-input": {
                        "&::placeholder": {
                          color: "rgba(255, 255, 255, 0.5)", // Placeholder color
                          opacity: 1,
                        },
                      },
                    }}
                  />
                  {subIndex > 0 && (
                    <IconButton onClick={() => removeSubtask(mainIndex, subIndex)} color="error">
                      <Trash2 />
                    </IconButton>
                  )}
                </Box>

                <Box sx={{
    display: "grid",               
    gridTemplateColumns: "repeat(4, 1fr)",                                       
    borderRadius: "8px",           
  }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Box sx={{mt:"1rem"}}>
                    <Typography fontSize="14px" color='#fff' fontWeight="bold">Unit</Typography>
                    <TextField
                      value={subtask.unit}
                      onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'unit', e.target.value)}
                      sx={{
                        mt: "0.2rem",
                        width: "80px", 
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px", 
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
                          "& fieldset": {
                            borderWidth: "1px", 
                            borderColor: "#ccc", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#aaa", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#007BFF", 
                          },
                          minHeight: "30px", 
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 12px", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          caretColor: "white", 
                        },
                        "& .MuiInputBase-input": {
                          "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", 
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{mt:"1rem"}}>
                    <Typography fontSize="14px" fontWeight="bold" color='#fff'>Unit Rate</Typography>
                    <TextField
                      value={subtask.unitRate}
                      onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'unitRate', e.target.value)}
                      type="number"
                      sx={{
                        mt: "0.2rem",
                        width: "80px", 
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px", 
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
                          "& fieldset": {
                            borderWidth: "1px", 
                            borderColor: "#ccc", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#aaa", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#007BFF", 
                          },
                          minHeight: "30px", 
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 12px", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          caretColor: "white", 
                        },
                        "& .MuiInputBase-input": {
                          "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", // Placeholder color
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{mt:"1rem"}}>
                    <Typography fontSize="14px" color='#fff' fontWeight="bold">Discount (%)</Typography>
                    <TextField
                      value={subtask.discount}
                      onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'discount', e.target.value)}
                      type="number"
                      sx={{
                        mt: "0.2rem",
                        width: "80px", 
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px", 
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
                          "& fieldset": {
                            borderWidth: "1px", 
                            borderColor: "#ccc", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#aaa", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#007BFF", 
                          },
                          minHeight: "30px", 
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 12px", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          caretColor: "white", 
                        },
                        "& .MuiInputBase-input": {
                          "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", // Placeholder color
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{mt:"1rem"}}>
                    <Typography fontSize="14px" color='#fff' fontWeight="bold">Quantity</Typography>
                    <TextField
                      value={subtask.quantity}
                      onChange={(e) => handleSubtaskChange(mainIndex, subIndex, 'quantity', e.target.value)}
                      type="number"
                      sx={{
                        mt: "0.2rem",
                        width: "80px", 
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px", 
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
                          "& fieldset": {
                            borderWidth: "1px", 
                            borderColor: "#ccc", 
                          },
                          "&:hover fieldset": {
                            borderColor: "#aaa", 
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#007BFF", 
                          },
                          minHeight: "30px", 
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: "6px 12px", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          caretColor: "white", 
                        },
                        "& .MuiInputBase-input": {
                          "&::placeholder": {
                            color: "rgba(255, 255, 255, 0.5)", // Placeholder color
                            opacity: 1,
                          },
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            ))}

<Button
  startIcon={<Plus />}
  onClick={() => addSubtask(mainIndex)}
  variant="outlined"

  sx={{
    mt: "2rem",
    borderRadius: "10px",       // Rounded corners
    borderColor: "white",       // White border
    color: "white",             // White text and icon
    '&:hover': {
      borderColor: "white",     // Keeps the border white on hover
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Adds a subtle hover effect
    },
  }}
>
  Add Subtask
</Button>

          </CardContent>
        </Card>
      ))}

      <Box sx={{p:"1rem",mt:"2rem" , background:"#232526",borderRadius:"20px" ,display:"flex",justifyContent:"space-between"}} >
        <Button
          startIcon={<Plus />}
          onClick={addMainTask}
          variant="outlined"
          sx={{
           
            borderRadius: "10px",       // Rounded corners
            borderColor: "white",       // White border
            color: "white",             // White text and icon
            '&:hover': {
              borderColor: "white",     // Keeps the border white on hover
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Adds a subtle hover effect
            },
          }}
        >
          Add Main Task
        </Button>

        <Button
          startIcon={<Save />}
          onClick={handleSubmit} 
          variant="outlined"
          sx={{
          
            borderRadius: "10px",       // Rounded corners
            borderColor: "white",       // White border
            color: "white",             // White text and icon
            '&:hover': {
              borderColor: "white",     // Keeps the border white on hover
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Adds a subtle hover effect
            },
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Estimate'}
        </Button>
      </Box>
    </Box>
  );
};

export default EstimateForm;