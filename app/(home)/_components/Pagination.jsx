// src/components/Pagination.js
import React from "react";

const Pagination = ({
  total,
  current,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
}) => {
  const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const totalNumbers = siblingCount + boundaryCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalBlocks >= total) {
    return (
      <div className="flex justify-center space-x-1">
        <button
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          &laquo;
        </button>
        {range(1, total).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 border rounded ${
              current === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === total}
          className="px-2 py-1 border rounded disabled:opacity-50"
        >
          &raquo;
        </button>
      </div>
    );
  }

  const leftSiblingIndex = Math.max(current - siblingCount, 1);
  const rightSiblingIndex = Math.min(current + siblingCount, total);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < total - 2;

  const firstPageIndex = 1;
  const lastPageIndex = total;

  let pages = range(leftSiblingIndex, rightSiblingIndex);

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const leftRange = range(1, 3);
    pages = [...leftRange, "...", total];
  } else if (!shouldShowLeftDots && shouldShowRightDots) {
    const rightRange = range(total - 2, total);
    pages = [firstPageIndex, "...", ...rightRange];
  } else if (shouldShowLeftDots && shouldShowRightDots) {
    pages = [firstPageIndex, "...", ...pages, "...", lastPageIndex];
  }

  return (
    <div
      className="flex justify-center space-x-1"
      style={{ background: "white", margin: "10px 10px", padding: "10px" }}
    >
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        &laquo;
      </button>
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2 py-1 border rounded">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-2 py-1 border rounded ${
              current === page ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
        className="px-2 py-1 border rounded disabled:opacity-50"
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
