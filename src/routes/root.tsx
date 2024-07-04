import ChangeThemeSwitch from "@/components/ChangeThemeSwitch";
import { THEME } from "@/constants";
import { useTheme } from "@/context/ThemeContext";
import { Box, Container, IconButton } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Root() {
  const [theme, setTheme] = useState(THEME);
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();
  const isUrlRoot = window.location.pathname === '/';
  return (
    <Container maxWidth="sm" sx={{p: 4}}>
      <Box display={'flex'} justifyContent={'space-between'} mb={1}>
        <IconButton onClick={() => navigate(-1)} disabled={isUrlRoot}>
          {!isUrlRoot && <ArrowBackIosIcon />}
        </IconButton>
        <ChangeThemeSwitch
          checked={theme === 'dark'}
          onChange={(e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            setTheme(newTheme)
            toggleTheme()
          }}
        />
      </Box>
      <Outlet />
    </Container>
  );
}