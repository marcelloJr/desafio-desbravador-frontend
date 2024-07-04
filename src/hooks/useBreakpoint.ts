import { useMediaQuery, useTheme } from "@mui/material";

export default function useBreakpoint() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.only('xl'));

  const innerWidth = window.innerWidth;
  const innerHeight = window.innerHeight;

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    innerWidth,
    innerHeight
  }
}