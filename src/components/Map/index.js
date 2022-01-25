import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = ({ lat, long }) => {
  return (
    <GoogleMap
      defaultZoom={20}
      defaultCenter={{ lat: Number(lat), lng: Number(long) }}
    />
  );
};

export default withScriptjs(withGoogleMap(Map));
