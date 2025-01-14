import { X } from "react-feather";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-[10000]
        ${open ? "visible bg-black/40" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-navy border-2 border-[#ffffff50] rounded-xl shadow p-2 lg:p-6 transition-all
          ${
            open ? "scale-100 opacity-100" : "scale-125 opacity-0"
          } w-[95%] lg:w-[70%] max-h-screen overflow-y-auto
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg bg-primary hover:bg-[#ff00001c] text-accent"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  );
}
