/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unreachable */
import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
  onClick,
}) => {
  return (
    <nav
      onClick={onClick}
      style={{ cursor: "pointer" }}
      aria-label="Page navigation example"
    >
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
