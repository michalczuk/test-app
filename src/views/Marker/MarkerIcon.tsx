import L from "leaflet";

const getMarkerIcon = (markerStatus: string) => {
  let icon: string;
  switch (markerStatus) {
    case "No Alarm":
      icon =
        "https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=40&background=097969&hoffset=-1";
      break;
    case "Device Offline":
      icon =
        "https://cdn.mapmarker.io/api/v1/font-awesome/v5/pin?size=40&background=C70039&hoffset=-1";
      break;
    default:
      icon =
        "https://cdn.mapmarker.io/api/v1/pin?text=&size=40&hoffset=1&bg=ffa500";
  }

  return L.icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
  });
};

export default getMarkerIcon;
