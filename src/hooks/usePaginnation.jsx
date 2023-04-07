import { useState } from "react";

function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(data.length / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  function nextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function prevPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  function goToPage(page) {
    setCurrentPage(page);
  }

  return {
    currentData,
    currentPage,
    pages,
    nextPage,
    prevPage,
    goToPage,
  };
}

export default usePagination;
