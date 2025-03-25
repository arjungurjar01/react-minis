import React from "react";
import Pagination from "./Pagination";

function PaginationContent() {
  const data = Array.from({ length: 100 }, (_, index) => index + 1);
  return (
    <div className="bg-[#f1f1f1] flex flex-wrap items-center justify-center w-full  lg:w-1/2  lg:ml-90 p-4 rounded-md">
      {data.length > 0 && (
        <Pagination
          data={data}
          rendreRow={function (rowData) {
            return <div> producgt no. {rowData} </div>;
          }}
        />
      )}
    </div>
  );
}

function PaginationPage() {
  return (
    <div className="pt-10 flex flex-wrap">
      <PaginationContent />
    </div>
  );
}

export default PaginationPage;
