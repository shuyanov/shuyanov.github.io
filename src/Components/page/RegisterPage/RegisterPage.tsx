import React from "react";
import { RegisterInput } from "../../molecule/RegisterInput/RegisterInput";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import { Avatar } from "../../molecule/Avatar/Avatar";

export const RegisterPage = () => {
  return (
    <div>
      <span className={styles.logoText}>
        <h1 className={styles.opeColor}>BIM</h1>
        <h1 className={styles.twoColor}>CAMPUS</h1>
      </span>
      <div className={styles.userContainer}>
        <div className={styles.mainContainerInputs}>
          <div className={styles.container}>
            <RegisterInput />
            <Button
              sx={{
                borderRadius: 5,
                border: "1px solid #004F98",
                font: "Montserrat Black",
                fontSize: "16px",
              }}
              size="large"
              variant="outlined"
              href="#"
            >
              Зарегистрироваться
            </Button>
          </div>
          <div className={styles.singInContainer}>
            <span>Уже есть аккаунт?</span>
            <Button
              sx={{
                borderRadius: 5,
                backgroundColor: "#376FA6",
                fontSize: "16px",
                color: "white",
              }}
              size="large"
              variant="contained"
              href="#"
            >
              Войти
            </Button>
          </div>
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};
