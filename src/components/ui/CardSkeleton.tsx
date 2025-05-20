
import React from "react";

const CardSkeleton = () => (
  <div className="rounded-lg bg-muted shadow-md animate-pulse w-full h-[400px] flex flex-col p-6 transition-all duration-300">
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="h-5 bg-gray-200 rounded w-2/3 mb-2" />
        <div className="h-3 bg-gray-100 rounded w-1/4" />
      </div>
      <div className="bg-gray-200 rounded-md h-[54px] w-[92px]" />
    </div>
    <div className="my-4 h-4 bg-gray-100 rounded w-3/4" />
    <div className="h-4 bg-gray-200 rounded w-2/5 mb-2" />
    <div className="flex gap-2 my-3">
      <div className="flex-1 h-4 bg-gray-100 rounded-full" />
      <div className="flex-1 h-4 bg-gray-100 rounded-full" />
    </div>
    <div className="h-2 bg-gray-100 rounded w-1/2 mb-3" />
    <div className="h-2 bg-gray-200 rounded w-3/5" />
    <div className="flex-1" />
    <div className="flex justify-between mt-6">
      <div className="w-20 h-5 bg-gray-100 rounded-full" />
      <div className="w-12 h-5 bg-gray-200 rounded-full" />
    </div>
  </div>
);

export default CardSkeleton;
