import React from "react";

function Graph() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-white rounded-md p-8 ring-1 ring-gray-300">
        <h2 className="font-mulish text-xl font-bold">Total Visitors</h2>
        <div className="mt-4">GRAPH</div>
      </div>
      <div className="flex w-full justify-between gap-4">
        <div className="w-full bg-white rounded-md p-8 ring-1 ring-gray-300">
          <h2 className="font-mulish text-xl font-bold">Total Portfolios</h2>
          <div className="mt-4">GRAPH</div>
        </div>
        <div className="w-full bg-white rounded-md p-8 ring-1 ring-gray-300">
          <h2 className="font-mulish text-xl font-bold">Total Blogs</h2>
          <div className="mt-4">GRAPH</div>
        </div>
      </div>
      <div className="flex w-full justify-between gap-4">
        <div className="w-9/12 bg-white rounded-md p-8 ring-1 ring-gray-300">
          <h2 className="font-mulish text-xl font-bold">Total Visitors</h2>
          <div className="mt-4">GRAPH</div>
        </div>
        <div className="w-3/12 bg-white rounded-md p-8 ring-1 ring-gray-300">
          <h2 className="font-mulish text-xl font-bold">Total Visitors</h2>
          <div className="mt-4">GRAPH</div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
