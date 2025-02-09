import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StyledBox from "./StyledBox";
import { Sections } from "../Constants/Sections";
import { Content } from "../Constants/Content";

export function AboutMe() {
  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
      }}
      id={Sections.ABOUT_ME}
    >
      <Typography variant="h3">{Content.aboutMe.title}</Typography>

      <Grid container spacing={3} sx={{ marginTop: "20px", width: "80%" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{}}>
            <span style={{ fontWeight: "bold" }}>Soluciones Textiles</span>{" "}
            <span style={{ color: "#cc55cc", fontWeight: "bold" }}>
              La Modista
            </span>{" "}
            {Content.aboutMe.message1}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" sx={{}}>
            {" "}
            {Content.aboutMe.message2}
          </Typography>
        </Grid>
      </Grid>
    </StyledBox>
  );
}
