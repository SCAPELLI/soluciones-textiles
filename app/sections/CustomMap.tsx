// app/sections/CustomMap.tsx
import { Typography, useMediaQuery, useTheme } from "@mui/material";
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
import Image from "next/image";

export function CustomMap() {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const mark = Date.now();

  const [zoom, setZoom] = useState(15);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Map
      style={styles.map}
      defaultCenter={{ lat: -34.62897840637906, lng: -58.46100151324344 }}
      defaultZoom={15}
      zoom={isMobile ? null : zoom}
      disableDefaultUI={true}
      mapId="c7070a22837149e4"
      gestureHandling={"cooperative"}
      scrollwheel={isMobile ? true : false}
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
            maxWidth={200}
            anchor={marker}
            onCloseClick={() => {
              setInfowindowOpen(false);
            }}
            shouldFocus={false}
            style={{
              marginRight: "6px",
            }}
          >
            <Image
              src="/logo_sin_datos2.png"
              alt="Soluciones Textiles La Modista"
              width={600}   // ratio base (ajustable)
              height={200}  // ratio base (ajustable)
              sizes="200px" // InfoWindow maxWidth 200, así que esto es correcto
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <Typography variant="caption" sx={{ color: "black" }}>
              Membrillar 51, Local 74 <br /> CABA, Argentina <br />{" "}
              <a
                href="https://maps.app.goo.gl/eiENBkYCepRxyU5y8"
                style={{ textDecoration: "underline", color: "blue" }}
                target="_blank"
                rel="noreferrer"
              >
                Ver en Google Maps
              </a>
            </Typography>
          </InfoWindow>
        </div>
      )}

      {!isMobile && (
        <MapControl position={ControlPosition.RIGHT_BOTTOM}>
          <div
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
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
      )}
    </Map>
  );
}

const styles = {
  map: {
    height: "350px",
    width: "60vw",
    borderRadius: "10px",
    border: "3px solid #fae25c",
    overflow: "hidden",
  },
  buttonStyle: {
    backgroundColor: "#fae25c",
    border: "1px solid #fae25c",
    padding: "3px 8px",
    margin: "2px 0",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "3px",
    fontWeight: "bold",
  },
};
