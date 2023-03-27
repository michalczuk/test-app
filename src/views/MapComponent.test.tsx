import { render } from "@testing-library/react";
import MapComponent from "./MapComponent";
import { DevicePositionType } from "../data/types/DevicePosition";

const mockDevices: DevicePositionType[] = [
  {
    id: "1",
    sim_number: "2347123458700",
    imei: "112345863307200",
    last_longitude: "12.36703",
    last_latitude: "12.38062",
    last_altitude: "0",
    last_speed: "41.7",
    last_status: "No Alarm",
    last_track_time: "2022-07-28 23:20:12",
    last_heartbeat: "1659046812",
  },
  {
    id: "2",
    sim_number: "2348045119891",
    imei: "153865853307200",
    last_longitude: "8.5537",
    last_latitude: "6.92729",
    last_altitude: "0",
    last_speed: "10.7",
    last_status: "No Alarm",
    last_track_time: "2022-07-28 23:20:12",
    last_heartbeat: "1659046812",
  },
];

test("MapComponent displays map correctly", () => {
  const { container } = render(<MapComponent devices={mockDevices} />);
  expect(container.querySelector(".leaflet-container")).toBeInTheDocument();
});
