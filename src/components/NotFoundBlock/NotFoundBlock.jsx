import React from "react";

import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock(props) {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span> <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению, данная страница отсутствует в нашем Интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
