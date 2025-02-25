import React, { useState, useContext, useEffect } from "react";
import DataManage from "../context/DataContext";
import washingMachine from "../assets/washing-machine.svg";
import space from "../assets/space.svg";
import armchair from "../assets/armchair.svg";
import alert from "../assets/alert.svg";
import GridItem from "./../UI/GridItem";

const ShopLayout = () => {
  // global values
  const {
    informationValidation,
    map_layout,
    changeMap_layout,
    isThereWallBesideMe,
    validateSecondPage,
    validateBoard
  } = useContext(DataManage);
  const [showAlert, setShowAlert] = useState(false);

  // local values
  useEffect(() => {
    _validateBoard();
  }, [map_layout, validateSecondPage]);

  // local variables
  const _gridX = 5;
  const _gridY = 6;
  let _clicked = false;
  let _draggedElement = null;
  let _dragEnter = { x: null, y: null };

  //
  // Draws the map with the pieces inside of them
  const _DrawGrid = () => {
    let _GRID_MAP = [];

    for (let y = 0; y < _gridY; y++) {
      let row = [];

      for (let x = 0; x < _gridX; x++) {
        row.push(map_layout[y][x]);
      }

      _GRID_MAP.push(row);
    }

    return _GRID_MAP.map((row, y) =>
      row.map((column, x) => {
        if (column == "Washer (8 kg)") {
          return (
            <GridItem
              className={"grid-item washer"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Washing Machine" />
              <span>Washer (8 kg)</span>
            </GridItem>
          );
        } else if (column == "Washer (11 kg)") {
          return (
            <GridItem
              className={"grid-item washer"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Washing Machine" />
              <span>Washer (11 kg)</span>
            </GridItem>
          );
        } else if (column == "Dryer (18 kg)") {
          return (
            <GridItem
              className={"grid-item dryer"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Drying Machine" />
              <span>Dryer (18 kg)</span>
            </GridItem>
          );
        } else if (column == "Dryer (25 kg)") {
          return (
            <GridItem
              className={"grid-item dryer"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={washingMachine} alt="Drying Machine" />
              <span>Dryer (25 kg)</span>
            </GridItem>
          );
        } else if (column == "Folding Table") {
          return (
            <GridItem
              className={"grid-item"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={space} alt="Folding Tables" />
              <span>Folding Table</span>
            </GridItem>
          );
        } else if (column == "Waiting Area") {
          return (
            <GridItem
              className={"grid-item"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <img src={armchair} alt="Waiting Area" />
              <span>Waiting Area</span>
            </GridItem>
          );
        } else if (column == "Wall") {
          return (
            <GridItem
              className={"grid-item wall"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <span>Wall</span>
            </GridItem>
          );
        } else if (column == "Entrance") {
          return (
            <GridItem
              className={"grid-item entrance"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            >
              <span>Wall</span>
            </GridItem>
          );
        } else {
          return (
            <GridItem
              className={"grid-item empty"}
              x={x}
              y={y}
              onDragEnter={(e) => _dragEnterHandler(e, x, y)}
              onDragLeave={(e) => _dragLeaveHandler(e)}
              onDragOver={(e) => _dragOverHandler(e)}
              onClick={() => _clicksHandler(x, y)}
              onContextMenu={(e) => _addEntranceToTile(e, x, y)}
            ></GridItem>
          );
        }
      })
    );
  };

  // when dragging stats from the bar manu
  // saves the name of the piece
  const _dragStartHandler = (e, name) => {
    _draggedElement = name;
  };

  // when an item is dragged over a grid tile
  const _dragOverHandler = (e) => {
    e.preventDefault(); // removes that not dropable cursor icon
  };

  // when an item is dragged into a grid tile
  // saves the grid tile location
  const _dragEnterHandler = (e, x, y) => {
    e.preventDefault();
    _dragEnter.x = x;
    _dragEnter.y = y;

    e.target.style.opacity = 0.25; // changes tile opcaity
  };

  // when an item goes off a grid tile
  // resets the saved grid tile location
  const _dragLeaveHandler = (e) => {
    e.target.style.opacity = 0.75; // changes tile opacity back
    _dragEnter.x = null;
    _dragEnter.y = null;
  };

  // when an item is dropped
  // description for functions are in DataContext.jsx
  const _dragEndHandler = () => {
    if (_dragEnter.x != null && _dragEnter.y != null) {
      let _nextMapLayout = [];
      for (let y = 0; y < map_layout.length; y++) {
        let _row = [];

        for (let x = 0; x < map_layout[y].length; x++) {
          if (x == _dragEnter.x && y == _dragEnter.y) {
            if (
              isThereWallBesideMe(x, y) ||
              _draggedElement == "Folding Table" ||
              _draggedElement == "Waiting Area"
            ) {
              _row.push(_draggedElement);
            } else {
              _row.push(map_layout[y][x]);
            }
          } else {
            _row.push(map_layout[y][x]);
          }
        }

        _nextMapLayout.push(_row);
      }

      changeMap_layout(_nextMapLayout);
    }
  };

  // examines how many times the user clicked on a grid
  const _clicksHandler = (x, y) => {
    // double click
    if (_clicked) {
      _addWallToTile(x, y);

      _clicked = false;
      return;
    }

    // single click
    _clicked = true;
    setTimeout(() => {
      if (_clicked) {
        _clearTile(x, y);
      }

      _clicked = false;
    }, 200);
  };

  // removes item from a tile
  // description for function in DataContext.jsx
  const _clearTile = (clearX, clearY) => {
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

      changeMap_layout(nextMap_Layout);
    }
  };

  // creates a wall in a tile
  // description for function in DataContext.jsx
  const _addWallToTile = (addX, addY) => {
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

      changeMap_layout(nextMap_Layout);
    }
  };

  // creates an entrance in a tile
  // description for function in DataContext.jsx
  const _addEntranceToTile = (e, addX, addY) => {
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

      changeMap_layout(nextMap_Layout);
    }
  };

  // examines the validation to the board locally so it gives instant feedback
  const _validateBoard = () => {
    for (let y = 0; y < map_layout.length; y++) {
      for (let x = 0; x < map_layout[y].length; x++) {
        if (
          map_layout[y][x] != null &&
          (map_layout[y][x].includes("Washer") ||
            map_layout[y][x].includes("Dryer"))
        ) {
          if (isThereWallBesideMe(x, y) == false) {
            setShowAlert(true);

            return;
          }
        }
      }
    }

    setShowAlert(false);
  };

  return (
    <>
      <h2>Shop Layout</h2>
      <div className="dnd-row">
        <div
          className="grid-item washer"
          onDragStart={(e) => _dragStartHandler(e, "Washer (8 kg)")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (8 kg)</span>
        </div>
        <div
          className="grid-item washer"
          onDragStart={(e) => _dragStartHandler(e, "Washer (11 kg)")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div
          className="grid-item dryer"
          onDragStart={(e) => _dragStartHandler(e, "Dryer (18 kg)")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (18 kg)</span>
        </div>
        <div
          className="grid-item dryer"
          onDragStart={(e) => _dragStartHandler(e, "Dryer (25 kg)")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={washingMachine} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div
          className="grid-item"
          onDragStart={(e) => _dragStartHandler(e, "Folding Table")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={space} alt="Folding Tables" />
          <span>Folding Table</span>
        </div>
        <div
          className="grid-item"
          onDragStart={(e) => _dragStartHandler(e, "Waiting Area")}
          onDragEnd={() => _dragEndHandler()}
          draggable={true}
        >
          <img src={armchair} alt="Waiting Area" />
          <span>Waiting Area</span>
        </div>
      </div>

      {showAlert ? (
        <div className="alert">
          <img src={alert} alt="Alert" />
          <span>Washers or Dryers can only be next to a wall.</span>
        </div>
      ) : (
        ""
      )}

      <div className="grid">
        <_DrawGrid />
      </div>
    </>
  );
};

export default ShopLayout;
