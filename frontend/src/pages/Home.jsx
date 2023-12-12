import React from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PendingIcon from '@mui/icons-material/Pending';
import { Link } from "react-router-dom";
import {
  Paper,
  Stack,
  TableBody,
} from "@mui/material";

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/api/get")
      .then((res) => {
        setTasks(res.data.tasks); // this is pulling the data from the backend and setting it to the tasks variable
        console.log(res.data.tasks);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Task ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>
                  {task.status ? <CheckCircleIcon color="success"/> : <PendingIcon color="error"/>}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Link to={`/task/edit/${task._id}`}><EditIcon/></Link>
                    <Link to={`/task/show/${task._id}`}><InfoIcon/></Link>
                    <Link to={`/task/delete/${task._id}`}><DeleteIcon/></Link>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Home;
