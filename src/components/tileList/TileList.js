import React from "react";
import {Tile} from './../tile/Tile.js';
export const TileList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Tile
          key={index}
          name={item.name}
          description={item.phone || item.date} // description can be phone or date based on context
        />
      ))}
    </div>
  );
};
