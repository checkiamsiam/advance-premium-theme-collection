import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./customStyles.module.css";
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import Chip from '@mui/material/Chip';
import TableRow from "@mui/material/TableRow";
import appointmentService from "../../../services/appointment-service";
import LoadingScreen from "../../../components/LoadingScreen";
import moment from "moment";
import Iconify from "../../../components/Iconify";

const columns = [
  { id: "apptId", label: "Appointment ID", minWidth: 160 },
  { id: "patientId", label: "Patient ID", minWidth: 150, align: "left" },
  { id: "doctorId", label: "Doctor ID", minWidth: 130, align: "left" },
  // { id: 'speciality', label: 'Speciality', minWidth: 170 },
  {
    id: "date",
    label: "Appointment Date",
    minWidth: 170,
    align: "center",
    format: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: "time",
    label: "Appointment Time",
    minWidth: 170,
    align: "center",
    format: (value) => new Date(value).toLocaleTimeString(),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 150,
    align: "right",
  },
];

// DoctorAppointments.propTypes = {
//   title: PropTypes.string,
//   subheader: PropTypes.string,
//   list: PropTypes.array.isRequired,
// };

export default function DoctorAppointments({ title, doctorId, timeline, subheader, list, ...other }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [appointments, setAppointments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getAppointmentList = async () => {
      setIsLoading(true);
      try {
        if (timeline === 'past') {
            const response = await appointmentService.getPastDoctorAppointment(doctorId, 'all', 1, 20);
            setAppointments(response);
            setIsLoading(false);
        } else if (timeline === 'upcoming') {
            const response = await appointmentService.getUpcomingDoctorAppointment(doctorId, 'all', 1, 20);
            setAppointments(response);
            setIsLoading(false);
        } else if (timeline === 'today') {
            const response = await appointmentService.getTodaysDoctorAppointment(doctorId, 'all', 1, 20);
            setAppointments(response);
            setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getAppointmentList();
  }, [doctorId, timeline]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <>
      {isLoading ? (
        <LoadingScreen type="spin" color="#447AD6" />
      ) : (
        <Card {...other}>
          {/* <CardHeader
            title={title}
            subheader={subheader}
            style={{ marginBottom: "20px", fontSize: "15px" }}
          /> */}
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer className={styles.hide_scrollbar} sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments &&
                    appointments?.result?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    ?.map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row._id}
                        >
                          {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })} */}
                          <TableCell component="th" scope="row">
                            {row.appointmentId}
                          </TableCell>
                          <TableCell align="left">{row?.patientId}</TableCell>
                          <TableCell align="left">{row?.doctorId}</TableCell>
                          <TableCell align="center">
                            {new Date(
                              +row?.appoinmentTimestamp * 1000
                            ).toLocaleDateString()}
                          </TableCell>
                          <TableCell align="center">
                            {moment(
                              new Date(+row?.appoinmentTimestamp * 1000)
                            ).format("LT")}
                          </TableCell>
                          <TableCell align="right" style={{fontSize: '14px', textTransform: "lowercase"}}>
                            <Chip label={row?.appointmentStatus} variant="outlined" color="success" size="small" />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={appointments?.result?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Card>
      )}
    </>
  );
}
