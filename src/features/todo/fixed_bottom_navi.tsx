import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DoneIcon from "@mui/icons-material/Done";
import TaskIcon from "@mui/icons-material/Task";
import styles from "./Todo.module.css";

export default function TodoFixedBottomNavi() {
  const [value, setValue] = useState(0)
  return (
    <Box className={styles.bottom_navi_container}>  
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="할 일" icon={<TaskIcon />} />
        <BottomNavigationAction label="한 일" icon={<DoneIcon />} />
      </BottomNavigation>
    </Box>
  );
}
