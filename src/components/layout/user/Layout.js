import React, { useEffect, useRef, useState } from "react";
import styles from "./layout.module.css";
import SideBar from "./SideBar";
import ToolBar from "./ToolBar";


export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  let sideBar = useRef(null);

  useEffect(() => {
    // handleSideBar();
    if (open) {
      sideBar.current.classList.add(styles.open);
    } else {
      sideBar.current.classList.remove(styles.open);
    }
  }, [open]);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <section className={styles.layout}>
        <div className={styles.sideBarWrapper} ref={sideBar}>
          <SideBar />
        </div>
        <div className={styles.toolBarchildWrapper}>
          <div className={styles.toolBarWrapper}>
            <ToolBar toggler={handleOpen} state={open} />
          </div>
          <div className={styles.childrenWrapper}>
            <div className="">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
}
