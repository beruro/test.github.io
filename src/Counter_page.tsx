import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import styles from "./Counter_page.module.css";

export default function Counter_page() {
  // const history = useHistory();
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
  // const data = {};

  return (
    <div className={`flex-col ${styles["page"]}`}>
      <div
        className={`flex-row items-center ${styles["section"]} ${styles["space-x-34"]}`}
      >
        {/* <img
          className={`${styles["image"]}`}
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648b355e5a7e3f0310e517a8/648b3a0e74467400115537d6/16868459732889654173.png"
        /> */}
        {
          <img
            className={`${styles["image"]}`}
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/648b355e5a7e3f0310e517a8/648b3a0e74467400115537d6/16868459732889654173.png"
            alt=""
          />
        }
        <span className={`${styles["text"]}`}>Counter</span>
      </div>
      <div className={`flex-col self-center ${styles["section_2"]}`}>
        <span className={`self-start ${styles["font_1"]} ${styles["text_2"]}`}>
          Input a number:
        </span>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder=""
          autoComplete="off"
          className={`flex-col justify-start items-start ${styles["section_3"]}`}
        ></input>
        <div
          className={`flex-col justify-start items-center self-center ${styles["text-wrapper"]}`}
          onClick={handleClick}
        >
          <span className={`${styles["font_1"]} ${styles["text_3"]} $`}>
            Increase one
          </span>
        </div>
      </div>
      <span className={`self-center ${styles["text_4"]}`}>Copyright 2023</span>
    </div>
  );
}
