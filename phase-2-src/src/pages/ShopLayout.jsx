import React, { useState } from "react";
import washingMachine from "../assets/washing-machine.svg";
import space from "../assets/space.svg";
import armchair from "../assets/armchair.svg";

const ShopLayout = () => {
  const [map_layout, setMap_layout] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null]
  ]);
  const gridX = 5;
  const gridY = 6;
  let clicked = false;
  let dragElement = null;
  let dragEnter = { x: null, y: null };

  const DrawGrid = () => {
    let GRID_MAP = [];

    for (let y = 0; y < gridY; y++) {
      let row = [];

      for (let x = 0; x < gridX; x++) {
        row.push(map_layout[y][x]);
      }

      GRID_MAP.push(row);
    }

    return GRID_MAP.map((row, y) =>
      row.map((column, x) => {
        if (column == "Washer (8 kg)") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item washer"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Washing Machine" />
              <span>Washer (8 kg)</span>
            </div>
          );
        } else if (column == "Washer (11 kg)") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item washer"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </div>
          );
        } else if (column == "Dryer (18 kg)") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item dryer"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Drying Machine" />
              <span>Dryer (18 kg)</span>
            </div>
          );
        } else if (column == "Dryer (25 kg)") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item dryer"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </div>
          );
        } else if (column == "Folding Table") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={space} alt="Folding Tables" />
              <span>Folding Table</span>
            </div>
          );
        } else if (column == "Waiting Area") {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <img src={armchair} alt="Waiting Area" />
              <span>Waiting Area</span>
            </div>
          );
        } else if (column == "Wall") {
          return (
            <div
              className="grid-item wall"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            >
              <span>Wall</span>
            </div>
          );
        } else if (column == "Entrance") {
          return (
            <div
              className="grid-item entrance"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            ></div>
          );
        } else {
          return (
            <div
              key={`${y}${x}`}
              className="grid-item empty"
              onDragEnter={(e) => dragEnterHandler(e, x, y)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onClick={() => clicksHandler(x, y)}
              onContextMenu={(e) => addEntraceToTile(e, x, y)}
            ></div>
          );
        }
      })
    );
  };

  const dragStartHandler = (e, name) => {
    dragElement = name;
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dragEnterHandler = (e, x, y) => {
    e.preventDefault();
    dragEnter.x = x;
    dragEnter.y = y;

    e.target.style.opacity = 0.25;
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
            if (
              isThereWallBesideMe() ||
              dragElement == "Folding Table" ||
              dragElement == "Waiting Area"
            ) {
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

      setMap_layout(nextMap_Layout);
      console.log(nextMap_Layout);
    }
  };

  const clicksHandler = (x, y) => {
    if (clicked) {
      addWallToTile(x, y);

      clicked = false;
      return;
    }

    clicked = true;
    setTimeout(() => {
      if (clicked) {
        clearTileHandler(x, y);
      }

      clicked = false;
    }, 200);
  };

  const clearTileHandler = (clearX, clearY) => {
    if (clearX != null && clearY != null) {
      let nextMap_Layout = [];
      for (let y = 0; y < map_layout.length; y++) {
        let row = [];

        for (let x = 0; x < map_layout[y].length; x++) {
          if (x == clearX && y == clearY) {
            row.push(null);
          } else {
            row.push(map_layout[y][x]);
          }
        }

        nextMap_Layout.push(row);
      }

      setMap_layout(nextMap_Layout);
      console.log(nextMap_Layout);
    }
  };

  const addWallToTile = (addX, addY) => {
    if (addX != null && addY != null) {
      let nextMap_Layout = [];
      for (let y = 0; y < map_layout.length; y++) {
        let row = [];

        for (let x = 0; x < map_layout[y].length; x++) {
          if (x == addX && y == addY) {
            row.push("Wall");
          } else {
            row.push(map_layout[y][x]);
          }
        }

        nextMap_Layout.push(row);
      }

      setMap_layout(nextMap_Layout);
      console.log(nextMap_Layout);
    }
  };

  const addEntraceToTile = (e, addX, addY) => {
    e.preventDefault();
    if (addX != null && addY != null) {
      let nextMap_Layout = [];
      for (let y = 0; y < map_layout.length; y++) {
        let row = [];

        for (let x = 0; x < map_layout[y].length; x++) {
          if (x == addX && y == addY) {
            row.push("Entrance");
          } else {
            row.push(map_layout[y][x]);
          }
        }

        nextMap_Layout.push(row);
      }

      setMap_layout(nextMap_Layout);
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
    } else if (map_layout[dragEnter.y - 1][dragEnter.x] == "Wall") {
      // top side
      return true;
    } else if (map_layout[dragEnter.y + 1][dragEnter.x] == "Wall") {
      // bottom side
      return true;
    } else if (map_layout[dragEnter.y][dragEnter.x - 1] == "Wall") {
      // left side
      return true;
    } else if (map_layout[dragEnter.y][dragEnter.x + 1] == "Wall") {
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
        <div
          className="grid-item washer"
          onDragStart={(e) => dragStartHandler(e, "Washer (11 kg)")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div
          className="grid-item dryer"
          onDragStart={(e) => dragStartHandler(e, "Dryer (18 kg)")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (18 kg)</span>
        </div>
        <div
          className="grid-item dryer"
          onDragStart={(e) => dragStartHandler(e, "Dryer (25 kg)")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div
          className="grid-item"
          onDragStart={(e) => dragStartHandler(e, "Folding Table")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
          <img src={space} alt="Folding Tables" />
          <span>Folding Table</span>
        </div>
        <div
          className="grid-item"
          onDragStart={(e) => dragStartHandler(e, "Waiting Area")}
          onDragEnd={() => dragEndHandler()}
          draggable={true}
        >
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
