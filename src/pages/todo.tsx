import React, { ChangeEventHandler, ForwardedRef, forwardRef, useEffect, useRef, useState } from "react";
import { NextPage } from "next";

import CloseIcon from "@mui/icons-material/Close";

import Box, { BoxTypeMap } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import TodoFixedBottomNavi from "../features/todo/fixed_bottom_navi";

import styles from "../styles/Todo.module.css";
import ToDoInfo from "../features/todo/info";

type Props = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement>;
}

const AddTodo = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <TextField
      className={styles.textField}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
      label="입력 후 Enter 를 눌러서 할 일 추가"
      fullWidth
    />
  );
});

const TodoPage: NextPage = () => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const btnRef = useRef<SVGSVGElement>();
  const boxRef = useRef<HTMLDivElement>();
  const tfRef = useRef<HTMLDivElement>();
  const handleInput: ChangeEventHandler<HTMLInputElement|HTMLTextAreaElement> = (e) => setInput(e.target.value)
  const toggleOpen = () => {
    setOpen(!open);
    if (open) {
      btnRef.current.style.transform = "rotate(0deg)";
      btnRef.current.style.backgroundColor = "#6f42c1";
      tfRef.current.style.transform = "translateY(0px)"
    } else {
      btnRef.current.style.transform = "rotate(45deg)";
      btnRef.current.style.backgroundColor = "#d94646";
      tfRef.current.style.transform = null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  }

  return (
    <Box className={styles.container}>
      <Box className={styles.innerContainer}>
        <ToDoInfo>
          <Box className={styles.buttonWrapper}>
            <Button onClick={toggleOpen} disableRipple>
              <CloseIcon className={styles.add} ref={btnRef} />
            </Button>
          </Box>
        </ToDoInfo>
        <Box className={styles.hiddenArea}>
          <Box className={styles.inputWrapper} ref={boxRef}>
            <form onSubmit={handleSubmit}>
              <AddTodo ref={tfRef} value={input} onChange={handleInput}/>
            </form>
          </Box>
        </Box>

        <Stack className={styles.todo} spacing={2}>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </Stack>
        <TodoFixedBottomNavi />
      </Box>
    </Box>
  );
};

export default TodoPage;
