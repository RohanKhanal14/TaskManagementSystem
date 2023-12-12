import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import CreateTask from '../pages/CreateTask';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Task List</Typography>
          <CreateTask/>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar