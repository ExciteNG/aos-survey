import { Paper, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles.module.css";

export default function Index() {
  const item = [
    {
      title: "Completed",
      count: 0,
    },
    {
      title: "Task at Hand",
      count: 0,
    },
    {
      title: "Others",
      count: 0,
    },
  ];
  return (
    <>
      <Paper className={styles["paper"]}>
        <div className="row">
            {item.map((value,index)=><div className={styles["card"] + " col-lg-4"}>
                <Typography>{value.title}</Typography>
                <Typography variant='h3'>{value.count}</Typography>
            </div> )}
        </div>
      </Paper>
    </>
  );
}
