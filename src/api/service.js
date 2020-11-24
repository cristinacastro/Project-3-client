import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  handleFileUpload = async (image) => {
    console.log("file in service: ", image);

    try {
      const res = await this.service.post("/upload", image);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;
