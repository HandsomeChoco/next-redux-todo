import { createTheme } from "@mui/material";

export default createTheme({
  components: {
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: 'gray',
          "&.Mui-selected": {
            color: "indigo"
          }
        }
      }
    }
  }
});