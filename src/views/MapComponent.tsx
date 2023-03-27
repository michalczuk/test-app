import React, { useCallback, useReducer, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Marker from "./Marker/Marker";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import { Grid, SelectChangeEvent } from "@mui/material";
import { Container } from "@mui/system";
import { filterReducer } from "./Filters/filterReducer";
import Filters from "./Filters/Filters";
import { DevicePositionType } from "../data/types/DevicePosition";

interface MapComponentProps {
  devices?: DevicePositionType[];
}

const MapComponent: React.FC<MapComponentProps> = ({ devices }) => {
  const [zoom] = useState(3);
  const [position] = useState<[number, number]>([0, 0]);

  const [{ status, speed }, dispatch] = useReducer(filterReducer, {
    status: "All",
    speed: 0,
  });

  const handleSpeedChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "set_speed", payload: parseInt(event.target.value) });
    },
    [dispatch]
  );

  const handleStatusChange = useCallback(
    (event: SelectChangeEvent) => {
      dispatch({ type: "set_status", payload: event.target.value });
    },
    [dispatch]
  );

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  const clusterMarkers = devices!
    .filter(
      (marker) =>
        (status === "All" || marker.last_status === status) &&
        (speed === 0 || parseInt(marker.last_speed) >= speed)
    )
    .map((marker) => <Marker key={marker.id} marker={marker} />);

  return (
    <Container sx={{ p: 5 }}>
      <Grid>
        <Filters
          onStatusChange={handleStatusChange}
          onSpeedChange={handleSpeedChange}
          onReset={handleReset}
          status={status}
          speed={speed}
        />

        <Grid sx={{ mt: 2 }}>
          <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />

            <MarkerClusterGroup>{clusterMarkers}</MarkerClusterGroup>
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MapComponent;
