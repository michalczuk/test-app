import { z } from "zod";
import { DevicePosition } from "./DevicePosition";

export const DeviceList = z.object({
  request: z.string(),
  status: z.string(),
  data: z.array(DevicePosition),
});

export type DeviceListType = z.infer<typeof DeviceList>;
