import { DevicePositionType } from "../../data/types/DevicePosition";

const devices: DevicePositionType[] = [
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
    sim_number: "2347123458701",
    imei: "112345863307201",
    last_longitude: "12.36703",
    last_latitude: "12.38062",
    last_altitude: "0",
    last_speed: "20.0",
    last_status: "Alarm",
    last_track_time: "2022-07-28 23:20:12",
    last_heartbeat: "1659046812",
  },
  {
    id: "3",
    sim_number: "2347123458702",
    imei: "112345863307202",
    last_longitude: "12.36703",
    last_latitude: "12.38062",
    last_altitude: "0",
    last_speed: "30.0",
    last_status: "No Alarm",
    last_track_time: "2022-07-28 23:20:12",
    last_heartbeat: "1659046812",
  },
];

describe("filterDevices function", () => {
  test("should filter devices by status", () => {
    const filteredDevices = devices.filter(
      (marker) => marker.last_status === "Alarm"
    );
    expect(filteredDevices.length).toBe(1);
    expect(filteredDevices[0].id).toBe("2");
  });

  test("should filter devices by speed", () => {
    const filteredDevices = devices.filter(
      (marker) => Number(marker.last_speed) >= 25
    );
    expect(filteredDevices.length).toBe(2);
    expect(filteredDevices[0].id).toBe("1");
    expect(filteredDevices[1].id).toBe("3");
  });

  test("should filter devices by status and speed", () => {
    const filteredDevices = devices.filter(
      (marker) =>
        marker.last_status === "No Alarm" && Number(marker.last_speed) >= 35
    );
    expect(filteredDevices.length).toBe(1);
    expect(filteredDevices[0].id).toBe("1");
  });

  test("should return all devices if no filters are provided", () => {
    const filteredDevices = devices;
    expect(filteredDevices.length).toBe(3);
  });
});
