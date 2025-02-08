import { Link } from "@mui/material";
import { Content } from "../Constants/Content";

export const FloatingIcon = () => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://wa.me/+5491122515703/?text=${Content.Whatsapp.MESSAGE}`}
      sx={{
        transition: "transform 0.1s ease-in-out",
        position: "fixed",
        bottom: "2rem",
        right: "2rem",

        "&:hover": {
          transform: "scale(1.1)",
          cursor: "pointer",
        },
        zIndex: 1000,
      }}
    >
      <img
        src="/icons/whatsapp_floating_button.png"
        alt="WhatsApp"
        style={{
          width: "64px",
          height: "64px",
        }}
      />
    </Link>
  );
};
