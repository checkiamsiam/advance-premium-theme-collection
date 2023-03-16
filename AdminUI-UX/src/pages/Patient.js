import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Page from "../components/Page";
import Label from "../components/Label";
import Scrollbar from "../components/Scrollbar";
import Iconify from "../components/Iconify";
import SearchNotFound from "../components/SearchNotFound";
import {
  UserListHead,
  UserListToolbar,
  UserMoreMenu,
} from "../sections/@dashboard/user";
import patientService from "../services/patient-service";
import LoadingScreen from "../components/LoadingScreen";
// mock
import USERLIST from "../_mock/user";
import { getAge } from "../utils/formatTime";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "name", label: "Name", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "phone", label: "Phone", alignRight: false },
  { id: "age", label: "Age", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "userType", label: "User Type", alignRight: false },
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

const Patient = () => {
  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [patients, setPatients] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getPatients = async () => {
      try {
        const patients = await patientService.getAllpatient(1, 20);
        setPatients(patients);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getPatients();
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isUserNotFound = filteredUsers.length === 0;
  return (
    <Page title="Patient">
      <Container style={{ maxWidth: "-webkit-fill-available" }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            All Patients{" "}
            {/* {!isLoading && (
            <span style={{ fontSize: "14px", fontWeight: "normal" }}>
              (Showing 1-{patients?.result.length} of {patients?.totalLength}{" "}
              results)
            </span>
          )} */}
          </Typography>
        </Stack>

        {isLoading ? (
          <LoadingScreen type="spin" color="#447AD6" />
        ) : (
          <Card>
            <UserListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <UserListHead
                    // order={order}
                    // orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={USERLIST.length}
                    numSelected={selected.length}
                    // onRequestSort={handleRequestSort}
                    // onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {patients &&
                      patients?.result
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          // const { id, name, role, status, company, avatarUrl, isVerified } = row;
                          // const isItemSelected = selected.indexOf(name) !== -1;

                          return (
                            <TableRow
                              hover
                              key={row?._id}
                              tabIndex={-1}
                              // role="checkbox"
                              // selected={isItemSelected}
                              // aria-checked={isItemSelected}
                            >
                              {/* <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, name)} />
                      </TableCell> */}
                              <TableCell
                                component="th"
                                scope="row"
                                padding="0px 5px 0px 0px"
                              >
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  spacing={2}
                                >
                                  <Avatar
                                    alt={row?.nameDetails?.firstName}
                                    src={
                                      row?.profilePictureURL &&
                                      row?.profilePictureURL
                                    }
                                  />
                                  <Typography variant="subtitle2" noWrap>
                                    {`${
                                      row?.nameDetails?.salutation
                                        ? row?.nameDetails?.salutation
                                        : ""
                                    } ${row?.nameDetails?.firstName} ${
                                      row?.nameDetails?.middleName
                                        ? row?.nameDetails?.middleName
                                        : ""
                                    } ${
                                      row?.nameDetails?.lastName
                                        ? row?.nameDetails?.lastName
                                        : ""
                                    }`}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell align="left">
                                {row?.primaryEmailId
                                  ? row?.primaryEmailId
                                  : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {row?.primaryMobile
                                  ? row?.primaryMobile?.isdCode +
                                    " " +
                                    row?.primaryMobile?.phoneNumber
                                  : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {row?.dob ? getAge(row?.dob) : "N/A"}
                              </TableCell>
                              <TableCell align="left">
                                {/* <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                                      {sentenceCase(status)}
                                    </Label> */}
                                {row?.activationFlag}
                              </TableCell>

                              <TableCell align="left">
                                {/* <UserMoreMenu /> */}
                                {row?.userType ? row?.userType : "N/A"}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>

                  {isUserNotFound && (
                    <TableBody>
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <SearchNotFound searchQuery={filterName} />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  )}
                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              // count={USERLIST.length}
              count={patients?.totalLength}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
        )}
      </Container>
    </Page>
  );
};

export default Patient;
