/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <nav
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      aria-label="Page navigation example"
    >
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
