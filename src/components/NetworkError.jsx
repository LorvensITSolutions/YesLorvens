import React from "react";

export default function NetworkError() {
  return (
    <div className="fixed inset-0 w-full h-full bg-white z-[9999] flex flex-col justify-center items-center text-center px-5">
      <div className="max-w-md mx-auto">
        {/* WiFi Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-11 h-11 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          You are offline
        </h2>
      </div>
    </div>
  );
}
