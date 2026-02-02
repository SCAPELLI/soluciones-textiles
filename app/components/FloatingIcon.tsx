import { Link, Typography } from "@mui/material";
import { Content } from "../Constants/Content";

export const FloatingIcon = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://wa.me/+5491122515703/?text=${Content.whatsapp.message}`}
      sx={{
        textDecoration: "none",
        transition: "transform 0.1s ease-in-out",
        position: "fixed",
        bottom: "1.3rem",
        right: "1rem",

        "&:hover": {
          transform: "scale(1.1)",
          cursor: "pointer",
        },
        zIndex: 1000,
        borderRadius: "50%",
        border: "2px solid #fae25c",
        backgroundColor: "black",
        height: "85px",
        width: "85px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/icons/whatsapp_floating_button_small.png"
        alt="WhatsApp"
        style={{
          width: "20px",
          height: "20px",
        }}
      />
      <Typography
        sx={{
          fontSize: 12,
          color: "white",
          marginTop: "2px",
        }}
      >
        Chateá con <br />
        <span style={{ color: "#cc55cc", fontWeight: "bold" }}>
          La Modista
        </span>{" "}
      </Typography>
    </Link>
  );
};
