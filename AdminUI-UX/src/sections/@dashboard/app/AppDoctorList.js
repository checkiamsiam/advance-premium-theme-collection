import React, { useState, useEffect } from "react";
import { Card, CardHeader, Box, Button } from "@mui/material";
import styles from "./customStyles.module.css";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Iconify from "../../../components/Iconify";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../../components/LoadingScreen";
import doctorService from "../../../services/doctor-service";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

AppDoctorList.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppDoctorList({ title, subheader, list, ...other }) {
  const navigate = useNavigate();
  const [doctorList, setDoctorList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getDoctors = async () => {
      try {
        const response = await doctorService.getAllDoctors(1, 20);
        setDoctorList(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setDoctorList(null);
        setIsLoading(false);
      }
    };
    getDoctors();
  }, []);

  const shortenText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen type="spin" color="#447AD6" />
      ) : (
        <Card {...other}>
          <CardHeader title={title} subheader={subheader} />
          <List
            className={styles.hide_scrollbar}
            sx={{ width: "100%", maxWidth: 360, maxHeight: 420, overflowX: 'hidden', overflowY: 'scroll', bgcolor: "background.paper" }}
          >
            {doctorList &&
              doctorList?.result?.map((i) => {
                return (
                  <>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          variant="dot"
                        >
                          <Avatar alt="doctor" src={i?.photoUrl} />
                        </StyledBadge>
                      </ListItemAvatar>
                      <ListItemText
                        primary={shortenText(
                          `${
                            i?.nameDetails?.salutation
                              ? i?.nameDetails?.salutation
                              : ""
                          } ${i?.nameDetails?.firstName} ${
                            i?.nameDetails?.middleName
                              ? i?.nameDetails?.middleName
                              : ""
                          } ${
                            i?.nameDetails?.lastName
                              ? i?.nameDetails?.lastName
                              : ""
                          }`,
                          20
                        )}
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline", fontSize: "12px" }}
                              component="span"
                              variant="body2"
                              color="gray"
                            >
                              {i?.educations &&
                                i?.educations.length > 0 ?
                                i?.educations?.map((j, k) => (
                                  <>
                                    {k < i?.educations.length - 1
                                      ? j.degree + ", "
                                      : j.degree}
                                  </>
                                )) : "Not Mentioned"}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                );
              })}
          </List>

          <Box sx={{ p: 1, textAlign: "right" }}>
            <Button
              size="small"
              style={{ color: "#6C757D" }}
              endIcon={<Iconify icon={"eva:arrow-ios-forward-fill"} />}
              onClick={() => navigate("/admin/dashboard/doctor")}
            >
              View all Doctors
            </Button>
          </Box>
        </Card>
      )}
    </>
  );
}
