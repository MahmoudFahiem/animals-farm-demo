import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesConfig } from "../configs/routes";
import { AuthStatus, useAuth } from "../shared/context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === AuthStatus.LOGGED_IN) navigate(RoutesConfig.ROOT);
  }, [status, navigate]);

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Login
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "30rem",
        }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleFormSubmit}
      >
        <TextField
          label="Username"
          variant="filled"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <FormControl variant="filled" required>
          <InputLabel htmlFor="password">Password</InputLabel>
          <FilledInput
            id="password"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword((prev: boolean) => !prev)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          disabled={status === AuthStatus.LOADING}
          type="submit"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
