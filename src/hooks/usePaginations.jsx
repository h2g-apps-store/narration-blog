import React, { memo, useCallback, useEffect, useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);

  const handlePageChange = useCallback(
    (page) => {
      const pageNumber = Math.max(1, Math.min(page, pages));
      setCurrentPage(pageNumber);
    },
    [pages]
  );

  useEffect(() => {
    if (data) {
      const totalItems = data.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      setPages(totalPages);
    }
  }, [data, itemsPerPage]);

  useEffect(() => {
    const endIndex = currentPage * itemsPerPage;
    const startIndex = endIndex - itemsPerPage;
    const newData = data.slice(startIndex, endIndex);
    setCurrentData(newData);
  }, [data, currentPage, itemsPerPage]);

  const MemoizedPaginationComponent = memo(() => {
    return (
      <div>
        <button
          className="bg-gray-50 shadow-md p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Prev
        </button>
        {Array.from({ length: pages }, (_, index) => (
          <button
            className="bg-gray-50 shadow-md p-2 hover:bg-gray-100 cursor-pointer"
            key={index}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-gray-50 shadow-md p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  });

  return {
    currentData,
    PaginationComponent: MemoizedPaginationComponent,
    currentPage,
    pages,
    nextPage: useCallback(
      () => handlePageChange(currentPage + 1),
      [currentPage, handlePageChange]
    ),
    prevPage: useCallback(
      () => handlePageChange(currentPage - 1),
      [currentPage, handlePageChange]
    ),
    goToPage: handlePageChange,
    currentIndex,
    setCurrentIndex,
  };
}
export default usePagination;
