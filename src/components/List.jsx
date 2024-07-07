import itemService from "../items";
import { useEffect } from "react";
import { useState } from "react";
import "./List.css";

function List({ year, month, day, items }) {
  const filteredItems = items.filter(
    (item) => item.year === year && item.month === month && item.day === day
  );

  return filteredItems.map((item) => (
    <div className="item-container" key={item.id}>
      <div className="item">{item.name}</div>
    </div>
  ));
}
export default List;
