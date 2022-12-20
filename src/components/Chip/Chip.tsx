import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./Chip.scss";
import { faClose } from "@fortawesome/free-solid-svg-icons";

type FileChip = {
  icon: IconProp;
  name: string;
  isExitable?: boolean;
  changeFile?: (event: any) => void;
};

export default function Chip(props: FileChip) {
  return (
    <button className={`Chip-container`} onClick={props.changeFile}>
      <FontAwesomeIcon icon={props.icon} />
      <span>{props.name}</span>
      {props.isExitable ? (
        <FontAwesomeIcon icon={faClose} className={"Chip-close"} />
      ) : (
        ""
      )}
    </button>
  );
}
