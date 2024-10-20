import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";

const Animal = () => {
  return (
    <Container maxWidth="xl">
      <Typography component="h1" variant="h3" margin="2rem 0">
        Animal Details
      </Typography>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Box
            component="img"
            src="https://img.freepik.com/premium-vector/beautiful-cow-vector-illustration_776188-606.jpg?size=626&ext=jpg&ga=GA1.1.1887574231.1729382400&semt=ais_hybrid"
            alt="Animal-image"
            sx={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid size={8}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">ID:</Typography>
            <Typography variant="body1">1</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Name:</Typography>
            <Typography variant="body1">Animal2</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Mother Number:</Typography>
            <Typography variant="body1">400</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Father Number:</Typography>
            <Typography variant="body1">300</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Date of Birth:</Typography>
            <Typography variant="body1">1-12-2020</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Barn Number:</Typography>
            <Typography variant="body1">300</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Typography variant="h6">Farm Name:</Typography>
            <Typography variant="body1">Happy Farm</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Animal;
