import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

import styles from "../../styles/Todo.module.css";

type Props = {
  children: ReactElement
}
export default function ToDoInfo({ children }: Props) {
  const [year, month, day, weekday] = new Date()
    .toLocaleDateString("kr", { dateStyle: "full" })
    .split(" ");

  return (
    <Box className={styles.info}>
      <Typography variant="h3">{`${year} ${month} ${day}`}</Typography>
      <Typography variant="h4" className={styles.day}>{weekday}</Typography>
      {children}
    </Box>
  );
}
