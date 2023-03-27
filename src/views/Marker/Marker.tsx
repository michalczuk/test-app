import React from "react";
import { Marker as LeafletMarker, Popup } from "react-leaflet";
import { DevicePositionType } from "../../data/types/DevicePosition";
import getMarkerIcon from "./MarkerIcon";

interface MarkerProps {
  marker: DevicePositionType;
}

const Marker: React.FC<MarkerProps> = ({ marker }) => (
  <LeafletMarker
    position={[
      parseFloat(marker.last_latitude),
      parseFloat(marker.last_longitude),
    ]}
    icon={getMarkerIcon(marker.last_status)}
    data-testid={`Device ID: ${marker.id}`}
  >
    <Popup data-testid={`Device ID: ${marker.id}`}>
      <p>{`IMEI: ${marker.imei}`}</p>
      <p>{`SIM: ${marker.sim_number}`}</p>
      <p>{`Status: ${marker.last_status}`}</p>
    </Popup>
  </LeafletMarker>
);

export default Marker;
