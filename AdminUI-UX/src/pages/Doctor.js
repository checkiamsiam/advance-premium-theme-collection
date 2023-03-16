import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { spacing } from "@mui/system";

// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Icon } from "@iconify/react";
import styles from "./doctor.module.css";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BlogPostsSort, BlogPostsSearch } from "../sections/@dashboard/blog";
import LoadingScreen from "../components/LoadingScreen";

// mock
import POSTS from "../_mock/blog";

import doctorService from "../services/doctor-service";

// ----------------------------------------------------------------------

// const SORT_OPTIONS = [
//   { value: "latest", label: "Latest" },
//   { value: "popular", label: "Popular" },
//   { value: "oldest", label: "Oldest" },
// ];

const Doctor = ({ specializations }) => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const openMoreMenu = Boolean(anchorEl);

  const handleClickMore = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    setIsLoading(true);
    const getDoctors = async () => {
      try {
        const response = await doctorService.getAllDoctors(1, 20);
        setDoctors(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    if (specializations) getDoctors();
  }, [specializations]);

  const getSpecializationName = (specialityId) => {
    const speciality = specializations.find(
      (speciality) => speciality.specialityId === specialityId
    );
    return speciality ? speciality.specialityName : specialityId;
  };

  const shortenText = (text, length) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };

  console.log(doctors);

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
        //
      >
        <Typography variant="h4" gutterBottom>
          All Doctors{" "}
          {!isLoading && (
            <span style={{ fontSize: "14px", fontWeight: "normal" }}>
              (Showing 1-{doctors?.result.length} of {doctors?.totalLength}{" "}
              results)
            </span>
          )}
        </Typography>
        <Button
          variant="contained"
          sx={{ mr: 10 }}
          color="primary"
          size="large"
        >
          Button
        </Button>
      </Stack>

      {isLoading ? (
        <LoadingScreen type="spin" color="#447AD6" />
      ) : (
        <>
          <Stack
            mb={5}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            marginLeft="10px"
          >
            <BlogPostsSearch posts={POSTS} />
            {/* <BlogPostsSort
          options={SORT_OPTIONS}
        /> */}
            {/* <div style={{fontSize: '14px', marginRight: '20px'}}></div> */}
          </Stack>
          <div className={styles.card_container}>
            {doctors &&
              doctors?.result?.map((i) => {
                return (
                  <>
                    <Card
                      sx={{
                        maxWidth: 300,
                        textAlign: "-webkit-center",
                        //   paddingTop: "20px",
                        margin: "8px",
                        width: "100%",
                      }}
                    >
                      <CardActionArea>
                        <CardHeader
                          action={
                            <>
                              <IconButton
                                aria-label="settings"
                                onClick={handleClickMore}
                              >
                                <MoreVertIcon />
                              </IconButton>
                              <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={openMoreMenu}
                                onClose={handleClose}
                                MenuListProps={{
                                  "aria-labelledby": "basic-button",
                                }}
                              >
                                <MenuItem
                                  onClick={() =>
                                    navigate(
                                      `/admin/dashboard/doctor/${i?.doctorId}`
                                    )
                                  }
                                >
                                  Profile
                                </MenuItem>
                                <MenuItem>My account</MenuItem>
                                <MenuItem>Logout</MenuItem>
                              </Menu>
                            </>
                          }
                          style={{ padding: "10px 10px 0px 10px" }}
                        />
                        <Avatar
                          onClick={() =>
                            navigate(`/admin/dashboard/doctor/${i?.doctorId}`)
                          }
                          alt="Remy Sharp"
                          src={i?.photoUrl}
                          sx={{ width: 70, height: 70 }}
                        />
                        <CardContent
                          onClick={() =>
                            navigate(`/admin/dashboard/doctor/${i?.doctorId}`)
                          }
                        >
                          <Typography gutterBottom variant="h5" component="div">
                            {shortenText(
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
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body3"
                            component="div"
                            color="text.secondary"
                            style={{ fontSize: "12px" }}
                          >
                            {i?.specializations.length > 0 &&
                            i?.specializations.length < 3
                              ? i?.specializations.map((j, k) => (
                                  <>
                                    {k < i?.specializations.length - 1
                                      ? getSpecializationName(j.specialityId) +
                                        ", "
                                      : getSpecializationName(j.specialityId)}
                                  </>
                                ))
                              : i?.specializations.length >= 3
                              ? i?.specializations
                                  .slice(0, 2)
                                  .map((j, k) => (
                                    <>
                                      {k < 1
                                        ? getSpecializationName(
                                            j.specialityId
                                          ) + ", "
                                        : getSpecializationName(
                                            j.specialityId
                                          ) + "..."}
                                    </>
                                  ))
                              : "N/A"}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {/* <Icon
                              icon="entypo:location-pin"
                              width="18"
                              height="18"
                            />{" "}
                            Kolkata, West Bengal */}
                            {i?.totalExperience
                              ? `${i?.totalExperience} Years Experience`
                              : "Exp. not mentioned"}
                          </Typography>
                          {/* <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Icon
                              icon="entypo:location-pin"
                              width="18"
                              height="18"
                            />{" "}
                            Kolkata, West Bengal
                          </Typography> */}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </>
                );
              })}
          </div>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              style={{
                color: "#777777",
                borderColor: "#c6c6c6",
                marginTop: "40px",
              }}
            >
              Load More
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default Doctor;
