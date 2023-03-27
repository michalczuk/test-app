import axios from "axios";
import { DeviceList } from "./types/DeviceList";

export const fetchDeviceList = async () => {
  const response = await axios.get(
    "https://api.mocki.io/v2/55bd1d09/device-list"
  );

  const validatedResponse = DeviceList.parse(response.data);

  return validatedResponse;
};
