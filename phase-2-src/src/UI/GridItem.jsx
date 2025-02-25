import React, { useContext } from "react";
import DataManage from "../context/DataContext";

const GridItem = (props) => {
  return (
    <div
      key={`${props.y}${props.x}`}
      className={props.className}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.onDragLeave}
      onDragOver={props.onDragOver}
      onClick={props.onClick}
      onContextMenu={props.onContextMenu}
    >
      {props.children}
    </div>
  );
};

export default GridItem;
