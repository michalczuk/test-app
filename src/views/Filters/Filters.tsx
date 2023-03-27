import React from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

interface FiltersProps {
  onStatusChange: (event: SelectChangeEvent) => void;
  onSpeedChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  status: string;
  speed: number;
}

const Filters: React.FC<FiltersProps> = ({
  onStatusChange,
  onSpeedChange,
  onReset,
  status,
  speed,
}) => {
  return (
    <Grid spacing={2} container alignItems="center">
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel id="status">Status</InputLabel>
          <Select
            value={status}
            onChange={onStatusChange}
            size="small"
            labelId="status"
            label="Status"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="No Alarm">No Alarm</MenuItem>
            <MenuItem value="Alarm">Alarm</MenuItem>
            <MenuItem value="Device Offline">Device Offline</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={3}>
        <TextField
          fullWidth
          type="number"
          value={speed}
          onChange={onSpeedChange}
          label="Minimum Speed"
          size="small"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Button
          size="medium"
          variant="outlined"
          color="error"
          onClick={onReset}
          disabled={status === "All" && speed === 0}
        >
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
