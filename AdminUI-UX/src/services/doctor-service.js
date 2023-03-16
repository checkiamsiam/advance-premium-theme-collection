import axios from "axios";
import { get, postData } from "../utils/awsUtils";

const getAllDoctors = async (page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get("/doctor/get-doctors-list", queryParam);
  return response;
};

const getSpecialization = async (specialityId) => {
  // const response = await get(`/doctor/get-specialization/${specialityId}`);
  const response = await axios.get(
    `http://localhost:3001/doctor/get-specialization/${specialityId}`
  );
  return response;
};

const getAllSpecialization = async () => {
  const response = await get(`/doctor/get-specializations-list`);
  return response;
};

const getDoctorDetails = async (doctorId) => {
  const response = await get(`/doctor/get-doctor-details/${doctorId}`);
  return response;
};

const doctorService = {
  getAllDoctors,
  getDoctorDetails,
  getSpecialization,
  getAllSpecialization
};

export default doctorService;
