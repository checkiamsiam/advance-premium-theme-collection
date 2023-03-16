import axios from "axios";
import { get, postData } from "../utils/awsUtils";

const getAllAppointment = async (page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get(
    "/appointment/get-all-upcoming-appointments",
    queryParam
  );
  return response;
};

const getTodaysDoctorAppointment = async (doctorId, appointmentStatus, page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get(
    `/appointment/get-doctor-appoinments/today/${doctorId}/${appointmentStatus}`,
    queryParam
  );
  return response;
}

const getUpcomingDoctorAppointment = async (doctorId, appointmentStatus, page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get(
    `/appointment/get-doctor-appoinments/future/${doctorId}/${appointmentStatus}`,
    queryParam
  );
  return response;
}

const getPastDoctorAppointment = async (doctorId, appointmentStatus, page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get(
    `/appointment/get-doctor-appoinments/past/${doctorId}/${appointmentStatus}`,
    queryParam
  );
  return response;
}

const appointmentService = {
  getAllAppointment,
  getTodaysDoctorAppointment,
  getUpcomingDoctorAppointment,
  getPastDoctorAppointment
};

export default appointmentService;
