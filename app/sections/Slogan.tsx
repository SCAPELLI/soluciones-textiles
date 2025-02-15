import StyledBox from "./StyledBox";
import { Typography } from "@mui/material";

export function Slogan() {
  return (
    <StyledBox>
      <Typography
        sx={{
          border: "2px solid white",
          borderRadius: "10px",
          padding: "20px",
          textAlign: "center",
          color: "white",
          marginTop: "30px",
          maxWidth: "85%",
        }}
        variant="h6"
      >
        Todo tiene arreglo con voluntad y conocimiento
      </Typography>
    </StyledBox>
  );
}
