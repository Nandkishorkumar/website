import React from "react";
import Header from "@components/Home/header/Header";
import Path from "@components/Path/Path";
import Button from "@components/Button/Button";

export default function ChangePasswords() {
  return (
    <>
      <Header />
      <Path
        head1="Home"
        head2="Your Account"
        main="Wallet"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "1153px",
          justifyContent: "space-evenly",
          marginBottom: "19px",
        }}
      >
        <div style={{ borderBottom: "1px solid #E3E3E3", height: "820px" }}>
        </div>
      </div>
    </>
  );
}
