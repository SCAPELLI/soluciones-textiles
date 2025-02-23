import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import StyledBox from "./StyledBox";
import StyledImage from "../components/StyledImage";
import { Sections } from "../Constants/Sections";
import { Content } from "../Constants/Content";
import CircleIcon from "@mui/icons-material/Circle";

export function Services() {
  const servicesList = Content.services.list;
  const half = Math.ceil(servicesList.length / 2);

  return (
    <StyledBox
      sx={{
        color: "white",
        flexDirection: "column",
        padding: "20px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "50px",
        alignSelf: "center",
        justifySelf: "center",
      }}
      id={Sections.SERVICES}
    >
      <Typography variant="h3">Servicios</Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          border: "2px solid #fae25c",
          borderRadius: "10px",
          backgroundColor: "rgba(235, 52, 204, 0.5)",
        }}
      >
        <Grid
          container
          sx={{
            width: "100%",
          }}
        >
          {[servicesList.slice(0, half), servicesList.slice(half)].map(
            (column, colIndex) => (
              <Grid
                size={{ xs: 12, sm: 6 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={colIndex}
              >
                <List>
                  {column.map((item: string, index) => {
                    const _item = item.split("-T").pop();
                    return (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <CircleIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={_item}
                          primaryTypographyProps={{
                            variant: _item === item ? "body1" : "h5",
                          }}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
            )
          )}
        </Grid>
      </Box>

      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            sources={[
              "/photos/tailor1.png",
              "/photos/tailor2.png",
              "/photos/tailor5.jpg",
              "/photos/tailor3.jpg",
              "/photos/tailor4.jpg",
              "/photos/tailor6.png",
            ]}
            title={Content.services.tailor.title}
            body={Content.services.tailor.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            sources={[
              "/merceria_formatted.jpg",
              "/photos/merceria2.png",
              "/photos/merceria4.jpg",
              "/photos/merceria3.png",
              "/photos/merceria1.png",
              "/photos/merceria5.jpg",
            ]}
            title={Content.services.supplies.title}
            body={Content.services.supplies.message}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <StyledImage
            sources={["/photos/confecciones1.png", "/photos/confecciones2.jpg"]}
            title={Content.services.costumes.title}
            body={Content.services.costumes.message}
          />
        </Grid>
      </Grid>
    </StyledBox>
  );
}
