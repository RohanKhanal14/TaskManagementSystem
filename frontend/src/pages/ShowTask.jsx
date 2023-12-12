import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowTask = () => {
  const { id } = useParams();
  const [task, setTask] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`http://localhost:8080/api/get/${id}`)
      .then((res) => {
        setTask(res.data.task);
        console.log(res.data.task);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Box sx={{width:500, mt:1 } }>
        <Card>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} variant="h6">
              Task Name: {task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="h6">
              Task Description: {task.description}
            </Typography>
            <Typography variant="h6">
              Task Status: {task.status ? "Completed" : "Pending"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ShowTask;
