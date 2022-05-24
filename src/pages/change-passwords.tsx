import React from "react";
import Header from "@components/Home/header/Header";
import Heading from "@components/ChangePassword/Heading/Heading";
import Path from "@components/Path/Path";
import Data from "@components/ChangePassword/Data/Data";
import Button from "@components/Button/Button";

export default function ChangePasswords() {
  return (
    <>
      <Header />
      <Path
        head1="Home"
        head2="Your Account"
        head3="Your Payments"
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
        <Heading />
        <div style={{ borderBottom: "1px solid #E3E3E3", height: "820px" }}>
          <Data />
        </div>
        <div style={{width:'1170px'}}>
          <div style={{float:'right'}}>
          <Button
            name="Done"
            bgcolor="#70A42F"
            width="107px"
            height="43px"
            radius="9px"
            fontsize="19px"
          />
          </div>
        </div>
      </div>
    </>
  );
}
