/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme } from '@mui/material/styles';

const defaultOptions: any = {
  components: {
  MuiButton: {
    defaultProps: {
      size: 'small',
    }
  },
  MuiInputLabel: {
    defaultProps: {
      size: 'small',
    }
  },
  MuiSelect: {
    defaultProps: {
      size: 'small',
    }
  },
  MuiTextField: {
    defaultProps: {
      size: 'small',
    }
  }
}}

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
  ...defaultOptions,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  ...defaultOptions,
});