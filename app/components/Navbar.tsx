const Navbar: React.FC = () => {
  return (
    <div className="bg-white border-b-2 p-4 flex justify-between items-center h-16 z-10">
      <div className="text-2xl font-bold">WhatBytes</div>
      <div className="flex items-center space-x-4">
        <span className="hidden md:block text-sm font-medium">
          Rahil Siddique
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
