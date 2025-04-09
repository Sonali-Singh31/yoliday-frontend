// src/app/components/Taskbar.tsx

const Taskbar = () => {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around items-center py-3 shadow-md md:hidden">
        <span className="text-sm font-medium text-gray-700">Task 1</span>
        <span className="text-sm font-medium text-gray-700">Task 2</span>
      </div>
    );
  };
  
  export default Taskbar;
  