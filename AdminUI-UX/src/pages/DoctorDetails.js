import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./doctor.module.css";
import doctorService from "../services/doctor-service";
import LoadingScreen from "../components/LoadingScreen";
import DoctorAppointments from "../sections/@dashboard/app/DoctorAppointments";

const DoctorDetails = ({ specializations }) => {
  const { doctorId } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tabSelected, setTabSelected] = useState("1");

  useEffect(() => {
    setIsLoading(true);
    const getDoctor = async () => {
      try {
        const response = await doctorService.getDoctorDetails(doctorId);
        setDoctorData(response?.result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setDoctorData(null);
        setIsLoading(false);
      }
    };
    if (specializations) getDoctor();

    return () => {
      setDoctorData(null);
    };
  }, [doctorId, specializations]);

  const getSpecializationName = (specialityId) => {
    const speciality = specializations.find(
      (speciality) => speciality.specialityId === specialityId
    );
    return speciality ? speciality.specialityName : specialityId;
  };

  return (
    <>
      <h1
        style={{
          textAlign: "start",
          alignSelf: "flex-start",
          fontSize: "20px",
          marginLeft: "20px",
          color: "#333333",
        }}
      >
        Doctor Profile
      </h1>
      <br />
      {isLoading ? (
        <LoadingScreen type="spin" color="#447AD6" />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          {/* <h1
        style={{
          textAlign: "start",
          alignSelf: "flex-start",
          fontSize: "20px",
          marginLeft: "20px",
          color: "#333333",
        }}
      >
        Doctor Profile
      </h1>
      <br /> */}
          <div
            style={{
              alignItems: "center",
              maxHeight: "650px",
              borderRadius: "5px 5px 0px 0px",
              backgroundColor: "#FFFF",
              width: "97%",
              padding: "10px",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "center",
                  height: "160px",
                  width: "160px",
                }}
              >
                <img
                  src={
                    doctorData?.photoUrl
                      ? doctorData?.photoUrl
                      : "https://thumbs.dreamstime.com/b/businessman-avatar-line-icon-vector-illustration-design-79327237.jpg"
                  }
                  alt="display_image"
                  style={{
                    borderRadius: "50%",
                    display: "inline-block",
                    textAlign: "center",
                    width: "130px",
                    height: "130px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flex: "48%",
                  maxWidth: "45%",
                  textAlign: "start",
                  alignContent: "center",
                  padding: "0px 15px",
                }}
              >
                <div style={{ flex: "58.33%", borderRight: "2px dashed #ccc" }}>
                  <h1
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#333333",
                    }}
                  >
                    {`${
                      doctorData?.nameDetails?.salutation
                        ? doctorData?.nameDetails?.salutation
                        : ""
                    } ${doctorData?.nameDetails?.firstName} ${
                      doctorData?.nameDetails?.middleName
                        ? doctorData?.nameDetails?.middleName
                        : ""
                    } ${
                      doctorData?.nameDetails?.lastName
                        ? doctorData?.nameDetails?.lastName
                        : ""
                    }`}
                  </h1>
                  <div style={{ fontSize: "13px", color: "#666666" }}>
                    {doctorData?.educations && doctorData?.educations.length > 0
                      ? doctorData?.educations?.map((j, k) => (
                          <>
                            {k < doctorData?.educations.length - 1
                              ? j.degree + ", "
                              : j.degree}
                          </>
                        ))
                      : "Not Mentioned"}
                  </div>
                  <div style={{ fontSize: "13px", color: "#666666" }}>
                    {doctorData && doctorData?.specializations.length > 0
                      ? doctorData?.specializations.map((j, k) => (
                          <>
                            {k < doctorData?.specializations.length - 1
                              ? getSpecializationName(j.specialityId) + ", "
                              : getSpecializationName(j.specialityId)}
                          </>
                        ))
                      : "N/A"}
                  </div>
                  <div style={{ fontSize: "14px", color: "#666666" }}>
                    Doctor ID: {doctorData?.doctorId}
                  </div>
                </div>
              </div>
              <div
                style={{
                  flex: "48%",
                  maxWidth: "48%",
                  textAlign: "start",
                  alignSelf: "center",
                  padding: "0px 15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "14px",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "200px", fontWeight: "bold" }}>
                      Phone:
                    </div>
                    <div style={{ fontSize: "14px", color: "#000000" }}>
                      {doctorData?.contactDetails?.countryCode +
                        " " +
                        doctorData?.contactDetails?.mobileNo}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "200px", fontWeight: "bold" }}>
                      Email:
                    </div>
                    <div style={{ fontSize: "14px", color: "#000000" }}>
                      {doctorData?.contactDetails?.email
                        ? doctorData?.contactDetails?.email
                        : "N/A"}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "200px", fontWeight: "bold" }}>
                      Gender:
                    </div>
                    <div style={{ fontSize: "14px", color: "#000000" }}>
                      {doctorData?.gender ? doctorData?.gender : "N/A"}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ width: "200px", fontWeight: "bold" }}>
                      Total Experience:
                    </div>
                    <div style={{ fontSize: "14px", color: "#000000" }}>
                      {doctorData?.totalExperience
                        ? doctorData?.totalExperience + " Years"
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              // borderRadius: "0px 0px 5px 5px",
              backgroundColor: "#FFFF",
              width: "97%",
              marginTop: "3px",
              fontSize: "15px",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
            }}
          >
            <div
              className={
                tabSelected === "1" ? styles.selected_tab : styles._tab
              }
              onClick={() => setTabSelected("1")}
            >
              About
            </div>
            <div
              className={
                tabSelected === "2" ? styles.selected_tab : styles._tab
              }
              onClick={() => setTabSelected("2")}
            >
              Profile
            </div>
            <div
              className={
                tabSelected === "3" ? styles.selected_tab : styles._tab
              }
              onClick={() => setTabSelected("3")}
            >
              Today's Appointments
            </div>
            <div
              className={
                tabSelected === "4" ? styles.selected_tab : styles._tab
              }
              onClick={() => setTabSelected("4")}
            >
              Upcoming Appointments
            </div>
            <div
              className={
                tabSelected === "5" ? styles.selected_tab : styles._tab
              }
              onClick={() => setTabSelected("5")}
            >
              Past Appointments
            </div>
          </div>
          <div
            style={{
              // display: "flex",
              flexDirection: "row",
              // borderRadius: "0px 0px 5px 5px",
              backgroundColor: "#FFFF",
              width: "97%",
              marginTop: "3px",
              fontSize: "15px",
              boxShadow: "0 1px 2px 0 rgb(0 0 0 / 10%)",
            }}
          >
            {tabSelected === "1" ? (
              <div style={{margin: "25px 0px"}}>About</div>
            ) : tabSelected === "2" ? (
              <div style={{margin: "25px 0px"}}>Profile</div>
            ) : tabSelected === "3" ? (
              <DoctorAppointments
                title="Today's Appointments"
                doctorId={doctorData?.doctorId}
                timeline="today"
              />
            ) : tabSelected === "4" ? (
              <DoctorAppointments
                title="Upcoming Appointments"
                doctorId={doctorData?.doctorId}
                timeline="upcoming"
              />
            ) : tabSelected === "5" ? (
              <DoctorAppointments
                title="Past Appointments"
                doctorId={doctorData?.doctorId}
                timeline="past"
              />
            ) : (
              "Select A Tab"
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorDetails;
