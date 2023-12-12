import React, { useState } from "react";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CreateTask = () => {
  const [open, setOpen] = useState(false); // This is the state that will be used to open and close the modal
  const [inputs, setInputs] = useState({
    // This is the state that will be used to store the inputs from the modal
    taskName: "",
    taskDescription: "",
  });

  const handelOpen = () => {
    setOpen(true);
  };
  const handelChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handelClose = () => {
    setOpen(false);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post("localhost:8080/api/create", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
    console.log(inputs);
  };

  return (
    <>
      <IconButton aria-label="add" onClick={handelOpen}>
        <AddIcon sx={{ color: "white" }} />
      </IconButton>
      <SytledModal // This is the modal that will pop up when the user clicks the "Addpost" button
        open={open}
        onClose={handelClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={500}
          height={450}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
          component="form"
          onSubmit={handelSubmit}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Add Task
          </Typography>
          <Stack>
            <TextField
              name="taskName"
              value={inputs.taskName}
              onChange={handelChange}
              id="standard-error"
              label="Name of the Task"
              margin="normal"
              variant="standard"
            />

            <TextField
              name="taskDescription"
              value={inputs.taskDescription}
              onChange={handelChange}
              id="outlined-textarea"
              label="Task Description"
              margin="normal"
              multiline
            />
          </Stack>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ marginTop: 2 }}
          >
            Create Task
          </Button>
        </Box>
      </SytledModal>
    </>
  );
};

export default CreateTask;
