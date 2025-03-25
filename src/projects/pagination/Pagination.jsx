import React, { useState } from "react";

const PAZE_SIZE = 10;
const DEFAULT_PAGE = 1;

function Pagination({ data, rendreRow, rowPerPageSize = PAZE_SIZE }) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);
  const [pageSize, setPageSize] = useState(rowPerPageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const visibleData = data.slice(startIndex, endIndex);

  const totalPage = Math.ceil(data.length / pageSize);
  // console.log(totalPage);
  const pageNumberButtonArray = Array.from(
    { length: totalPage },
    (_, index) => index + 1
  );

  const maxButton = 5;
  let buttonStartIndex = currentPage - Math.floor(maxButton / 2);
  let buttonEndIndex = currentPage + Math.floor(maxButton / 2);

  //handle case for buttonstartindex , if it is less then 1
  if (buttonStartIndex < 1) {
    buttonStartIndex = 1;
    buttonEndIndex = Math.min(totalPage, maxButton);
  }

  //handle case for button end index , if it is greater then totalpage
  if (buttonEndIndex > totalPage) {
    buttonEndIndex = totalPage;
    buttonStartIndex = Math.max(1, totalPage - maxButton + 1);
  }

  const buttonToDisplay = pageNumberButtonArray.slice(
    buttonStartIndex - 1,
    buttonEndIndex
  );

  //selection handle
  function handlePageSizeChange(newPage) {
    if (newPage !== pageSize) {
      setPageSize(newPage);

      if (newPage == 20 || newPage == 40 || newPage == 30) {
        requestAnimationFrame(() => setCurrentPage(1));
      }
    }
  }
  return (
    <div className="flex flex-col items-center bg-amber-100 p-4 rounded-md w-full">
      <div className="my-4">
        {/* Product data list */}
        {visibleData.map((d) => {
          return <div key={d}>{rendreRow(d)} </div>;
        })}
      </div>

      <div className="flex lg:flex-row flex-wrap gap-2 mt-10">
        <select
          className="bg-[#1f1f1f]  w-20 px-4 h-auto rounded-md text-md text-white cursor-pointer"
          name="pagesize"
          id="pagesize"
          onClick={(e) => handlePageSizeChange(Number(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
        </select>
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
          First
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {/* Button Data List */}
        <div className="flex flex-wrap lg:flex-row gap-2">
          {buttonToDisplay.map((pageNumber) => {
            // console.log(typeof currentPage, typeof pageNumber);

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                // className={`${currentPage===pageNumber ? 'bg-[#f1f1f1] text-[#1f1f1f]' :'bg-[#1f1f1f] text-[#f1f1f1]' } `}
                style={{
                  backgroundColor: currentPage === pageNumber ? "#f1f1f1 " : "",
                  color: currentPage === pageNumber ? "black" : "",
                }}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className=""
        >
          Next
        </button>
        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(totalPage)}
          className=""
        >
          Last
        </button>
      </div>
    </div>
  );
}

export default Pagination;
