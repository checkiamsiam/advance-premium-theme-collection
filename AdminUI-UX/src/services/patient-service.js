import { get, postData } from "../utils/awsUtils";

const getAllpatient = async (page, limit) => {
  let queryParam = {
    page: page,
    limit: limit,
  };
  const response = await get(
    "/patient/list/all-patients",
    queryParam
  );
  return response;
};

const patientService = {
  getAllpatient,
};

export default patientService;
