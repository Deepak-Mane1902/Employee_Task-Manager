// src/components/others/AllTask.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AllTask = () => {
  const ctx = useContext(AuthContext);
  const userData = ctx?.userData ?? null;
  const employees = Array.isArray(userData?.employees) ? userData.employees : [];

  return (
    <div className="bg-[#1c1c1c] p-5 mt-10 flex flex-col gap-2 rounded-lg">
      <div className="bg-red-400 py-3 px-10 flex justify-between items-center rounded">
        <h2 className="w-1/5 text-[2vw] md:text-[1.5vw] text-start !text-black/90 font-semibold">Employee Name</h2>
        <h3 className="w-1/5 text-[2vw] md:text-[1.5vw] text-center !text-black/90 font-semibold">New Task</h3>
        <h5 className="w-1/5 text-[2vw] md:text-[1.5vw] text-center !text-black/90 font-semibold">Active Task</h5>
        <h5 className="w-1/5 text-[2vw] md:text-[1.5vw] text-center !text-black/90 font-semibold">Completed</h5>
        <h5 className="w-1/5 text-[2vw] md:text-[1.5vw] text-center !text-black/90 font-semibold">Failed</h5>
      </div>

      <div>
        {employees.length === 0 ? (
          <div className="py-4 px-10 text-center text-sm text-gray-400">
            No employees available</div>
        ) : (
          employees.map((elem, idx) => {
            const counts = elem.taskCounts ?? { newTask: 0, active: 0, 
              completed: 0, failed: 0 };
            return (
              <div
                key={elem.id ?? idx}
                className="py-3 px-10 flex justify-between items-center rounded mb-2 hover:bg-[#101010] transition-all ease-in-out duration-200
                 cursor-pointer"
              >

                <h2 className="text-[1.8vw] md:text-[1.3vw] w-1/5 text-start
                 !text-white">{elem.name}</h2>

                <h3 className="text-[1.8vw] md:text-[1.3vw] w-1/5 text-center !text-blue-600">{counts.newTask ?? 0}</h3>

                <h5 className="text-[1.8vw] md:text-[1.3vw] w-1/5 text-center !text-yellow-600">{counts.active ?? 0}</h5>

                <h5 className="text-[1.8vw] md:text-[1.3vw] w-1/5 text-center !text-green-600 font-semibold">{counts.completed ?? 0}</h5>

                <h5 className="text-[1.8vw] md:text-[1.3vw] w-1/5 text-center
                 !text-red-600">{counts.failed ?? 0}</h5>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllTask;
