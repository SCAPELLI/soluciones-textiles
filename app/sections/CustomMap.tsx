import { Typography } from "@mui/material";
import {
  AdvancedMarker,
  ControlPosition,
  InfoWindow,
  Map,
  MapControl,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

export function CustomMap() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const mark = Date.now();

  const [zoom, setZoom] = useState(15);

  return (
    <Map
      style={styles.map}
      defaultCenter={{ lat: -34.62897840637906, lng: -58.46100151324344 }}
      defaultZoom={15}
      zoom={zoom}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
      mapId="c7070a22837149e4"
      scrollwheel={false}
    >
      <AdvancedMarker
        ref={markerRef}
        position={{ lat: -34.62897840637906, lng: -58.46100151324344 }}
        onClick={() => {
          console.log("AdvancedMarker clicked");
          if (infowindowOpen) {
            setInfowindowOpen(false);
            setTimeout(() => {
              setInfowindowOpen(true);
            }, 200);
          } else {
            setInfowindowOpen(true);
          }
        }}
      >
        <Pin
          background={"#b42cb0"}
          borderColor={"#fae25c"}
          glyphColor={"#fae25c"}
        />
      </AdvancedMarker>

      {infowindowOpen && (
        <div key={marker && infowindowOpen ? marker.id : mark}>
          <InfoWindow
            anchor={marker}
            maxWidth={200}
            onCloseClick={() => {
              setInfowindowOpen(false);
              console.log("InfoWindow closed");
            }}
            shouldFocus={false}
          >
            <img
              src="/logo_sin_datos2.png"
              alt="Soluciones Textiles La Modista"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="caption" sx={{ color: "black" }}>
              Membrillar 51, Local 74 <br /> CABA, Argentina
            </Typography>
          </InfoWindow>
        </div>
      )}

      <MapControl position={ControlPosition.RIGHT_BOTTOM}>
        <div
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <button
            style={styles.buttonStyle}
            onClick={() => setZoom((prevZoom) => Math.min(prevZoom + 1, 21))}
          >
            +
          </button>
          <button
            style={styles.buttonStyle}
            onClick={() => setZoom((prevZoom) => Math.max(prevZoom - 1, 0))}
          >
            -
          </button>
        </div>
      </MapControl>
    </Map>
  );
}

const styles = {
  map: {
    height: "400px",
    width: "60vw",
    borderRadius: "10px",
    border: "3px solid #fae25c",
    overflow: "hidden",
  },
  buttonStyle: {
    backgroundColor: "#fae25c",
    border: "1px solid #fae25c",
    padding: "5px 10px",
    margin: "5px 0",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "3px",
    fontWeight: "bold",
  },
};
