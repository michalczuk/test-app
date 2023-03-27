import { z } from "zod";
import { Status } from "./Status";

export const DevicePosition = z.object({
  id: z.string(),
  sim_number: z.string(),
  imei: z.string(),
  last_longitude: z.string(),
  last_latitude: z.string(),
  last_altitude: z.string(),
  last_speed: z.string(),
  last_status: Status,
  last_track_time: z.string(),
  last_heartbeat: z.string(),
});

export type DevicePositionType = z.infer<typeof DevicePosition>;
