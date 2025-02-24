import React, { useState } from "react";
import washingMachine from "../assets/washing-machine.svg";
import space from "../assets/space.svg";
import armchair from "../assets/armchair.svg";

const ShopLayout = () => {
  const [map_layout, setMap_layout] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, "wall", null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
  let dragElement = null;
  let dragEnter = { x: null, y: null };

  const DrawGrid = () => {
    let GRID_MAP = [];

    for (let y = 0; y < map_layout.length; y++) {
      let row = [];

      for (let x = 0; x < map_layout[y].length; x++) {
        row.push(map_layout[y][x]);
      }

      GRID_MAP.push(row);
    }

    return GRID_MAP.map((row, y) =>
      row.map((column, x) => (
        <div
          key={`${y}${x}`}
          className="grid-item empty"
          onDragEnter={(e) => dragEnterHandler(e, x, y)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
        ></div>
      ))
    );
  };

  const dragStartHandler = (e, name) => {
    dragElement = name;
    console.log(dragElement);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragEnterHandler = (e, x, y) => {
    e.preventDefault();
    dragEnter.x = x;
    dragEnter.y = y;

    e.target.style.opacity = 0.25;

    console.log(dragEnter);
  };

  const dragLeaveHandler = (e) => {
    e.target.style.opacity = 0.75;
    dragEnter.x = null;
    dragEnter.y = null;
  };

  const dragEndHandler = () => {
    if (dragEnter.x != null && dragEnter.y != null) {
      let nextMap_Layout = [];
      for (let y = 0; y < map_layout.length; y++) {
        let row = [];

        for (let x = 0; x < map_layout[y].length; x++) {
          if (x == dragEnter.x && y == dragEnter.y) {
            if (isThereWallBesideMe()) {
              row.push(dragElement);
            } else {
              row.push(map_layout[y][x]);
            }
          } else {
            row.push(map_layout[y][x]);
          }
        }

        nextMap_Layout.push(row);
      }

      console.log(nextMap_Layout);
    }
  };

  const isThereWallBesideMe = () => {
    if (
      dragEnter.y == 0 ||
      dragEnter.y == map_layout.length - 1 ||
      dragEnter.x == 0 ||
      dragEnter.x == map_layout[dragEnter.y].length - 1
    ) {
      // sides
      return true;
    } else if (map_layout[dragEnter.y - 1][dragEnter.x] == "wall") {
      // top side
      return true;
    } else if (map_layout[dragEnter.y + 1][dragEnter.x] == "wall") {
      // bottom side
      return true;
    } else if (map_layout[dragEnter.y][dragEnter.x - 1] == "wall") {
      // left side
      return true;
    } else if (map_layout[dragEnter.y][dragEnter.x + 1] == "wall") {
      // right side
      return true;
    }

    return false;
  };

  return (
    <>
      <h2>Shop Layout</h2>
      <div className="dnd-row">
        <div
          className="grid-item washer"
          onDragStart={(e) => dragStartHandler(e, "Washer (8 kg)")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (8 kg)</span>
        </div>
        <div className="grid-item washer" draggable={true}>
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer" draggable={true}>
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (18 kg)</span>
        </div>
        <div className="grid-item dryer" draggable={true}>
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item" draggable={true}>
          <img src={space} alt="Folding Tables" />
          <span>Folding Table</span>
        </div>
        <div className="grid-item" draggable={true}>
          <img src={armchair} alt="Waiting Area" />
          <span>Waiting Area</span>
        </div>
      </div>

      <div className="grid">
        <DrawGrid />
        {/* <div className="grid-item empty"></div>
        <div className="grid-item wall">
          <span>Wall</span>
        </div>
        <div className="grid-item washer">
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item entrance"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div> */}
      </div>
    </>
  );
};

export default ShopLayout;
