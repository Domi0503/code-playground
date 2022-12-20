import React from "react";
import "./PreviewBox.scss";
import Chip from "../Chip/Chip";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function PreviewBox() {
  return (
    <div className="PreviewBox-container">
      <div className="PreviewBox-chip-track">
        <Chip name="Preview" icon={faEye} isExitable />
      </div>
      <iframe id="code-preview" className="PreviewBox-previewSection"></iframe>
      <div className="PreviewBox-statusbar"></div>
    </div>
  );
}
