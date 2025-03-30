import React from "react";

export default function Button({ children }) {
  return (
    <div>
      <button className="rounded-2xl bg-gradient-to-r from-[#C28383] to-[#7C2CC2] hover:from-[#7C2CC2] hover:to-[#0697DF] font-[400] text-[20px] py-2 text-white font-marcellus-SC w-full">
        {children}
      </button>
    </div>
  );
}
