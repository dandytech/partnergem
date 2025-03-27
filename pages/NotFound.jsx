import React from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] items-center flex justify-center ">
      <>
        <div className="flex m-auto h-[90vh] flex-col-reverse items-center justify-center p-10">
          <span>
            {" "}
            <button
              onClick={() => navigate(-1)}
              className="text-[26px] border-2 px-5 py-1 border-[#4640DE]"
            >
              &larr; Go back
            </button>
          </span>
          <span>
            {" "}
            <h1 className="text-[24px]">
              <p className="text-center text-6xl">😢</p>
              The page you are looking for could not be found!
            </h1>
          </span>
        </div>
      </>
    </div>
  );
}
