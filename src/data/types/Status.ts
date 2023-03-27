import { z } from "zod";

export const Status = z.union([
  z.literal("Alarm"),
  z.literal("No Alarm"),
  z.literal("Device Offline"),
]);

export type StatusType = z.infer<typeof Status>;
