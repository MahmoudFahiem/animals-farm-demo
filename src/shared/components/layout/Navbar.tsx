import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { RoutesConfig } from "../../../configs/routes";

const pages = ["Animals"];

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Animals Farm
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={RoutesConfig.ANIMALS}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "capitalize",
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
