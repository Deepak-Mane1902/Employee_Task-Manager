// src/components/Tasks/CreateTask.jsx
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // adjust path if needed

const CreateTask = () => {
  const [title, setTaskTitle] = useState('');
  const [description, setTaskDescription] = useState('');
  const [date, setTaskDate] = useState('');
  const [assignTo, setTaskAssignTo] = useState('');
  const [category, setTaskCategory] = useState('');

  // Get setUserData from context so we can update UI after writing localStorage
  const authCtx = useContext(AuthContext) || {};
  const setUserData = authCtx.setUserData;

  const submitHandler = (e) => {
    e.preventDefault();

    // quick validation
    if (!title.trim() || !assignTo.trim()) {
      alert('Please provide a title and assignTo (employee first name).');
      return;
    }

    // create task object locally
    const taskObj = {
      title: title.trim(),
      description: description.trim(),
      date: date || null,
      category: category.trim() || 'General',
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Read employees from localStorage
    const raw = localStorage.getItem('employees');
    if (!raw) {
      alert('No employees found in localStorage. Make sure initial data is loaded.');
      return;
    }

    let data;
    try {
      data = JSON.parse(raw);
      if (!Array.isArray(data)) throw new Error('employees is not an array');
    } catch (err) {
      console.error('Failed to parse employees from localStorage', err);
      alert('Could not read employees from localStorage.');
      return;
    }

    // Find employee by first name (case-insensitive)
    const matched = data.find(
      (emp) => emp.name && emp.name.toLowerCase().trim() === assignTo.toLowerCase().trim()
    );

    if (!matched) {
      alert(`No employee found with the name "${assignTo}". Use exact first name.`);
      return;
    }

    // assign sequential taskNumber
    const nextTaskNumber = (matched.tasks && matched.tasks.length) ? matched.tasks.length + 1 : 1;
    const newTaskWithNumber = { ...taskObj, taskNumber: nextTaskNumber };

    // push new task
    if (!Array.isArray(matched.tasks)) matched.tasks = [];
    matched.tasks.push(newTaskWithNumber);

    // Ensure taskCounts exists then update counts
    if (!matched.taskCounts) {
      matched.taskCounts = { active: 0, newTask: 0, completed: 0, failed: 0 };
    }
    matched.taskCounts.newTask = (matched.taskCounts.newTask || 0) + (newTaskWithNumber.newTask ? 1 : 0);
    matched.taskCounts.active = (matched.taskCounts.active || 0) + (newTaskWithNumber.active ? 1 : 0);
    matched.taskCounts.completed = (matched.taskCounts.completed || 0) + (newTaskWithNumber.completed ? 1 : 0);
    matched.taskCounts.failed = (matched.taskCounts.failed || 0) + (newTaskWithNumber.failed ? 1 : 0);

    // Save back to localStorage
    localStorage.setItem('employees', JSON.stringify(data));

    // Update context so UI (AllTask etc.) reflects change immediately
    if (typeof setUserData === 'function') {
      // context shape assumed: { employees, admin } or { userData: { employees, admin } }
      // If your AuthContext stores { userData, setUserData }, call setUserData with new state
      // If your AuthContext directly stores { employees, admin } adjust accordingly.
      // Here we assume setUserData expects { employees, admin } object:
      setUserData((prev) => {
        // If prev is { employees, admin }
        if (prev && prev.employees) {
          return { ...prev, employees: data };
        }
        // If prev is like { userData: { employees, admin } }
        if (prev && prev.userData && prev.setUserData === undefined) {
          return { ...prev, userData: { ...prev.userData, employees: data } };
        }
        // fallback: return { employees: data }
        return { employees: data, admin: (prev && prev.admin) ? prev.admin : null };
      });
    }

    // reset form
    setTaskAssignTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');

    alert('Task created');
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex justify-between items-center bg-[#1c1c1c] px-10 pb-4 mt-2 rounded-lg">
        <div className="left-admin py-4 flex gap-2 flex-col">
          <div>
            <h3 className="text-sm md:text-xl">Task Title</h3>
            <input value={title} onChange={(e) => setTaskTitle(e.target.value)} id="adminInput" type="text" placeholder="Make a UI Design" />
          </div>

          <div>
            <h3 className="text-sm md:text-xl">Date</h3>
            <input value={date} onChange={(e) => setTaskDate(e.target.value)} id="adminInput" type="date" />
          </div>

          <div>
            <h3 className="text-sm md:text-xl">Assign To</h3>
            <input value={assignTo} onChange={(e) => setTaskAssignTo(e.target.value)} id="adminInput" type="text" placeholder="employee name (first name)" />
          </div>

          <div>
            <h3 className="text-sm md:text-xl">Category</h3>
            <input value={category} onChange={(e) => setTaskCategory(e.target.value)} id="adminInput" type="text" placeholder="design, dev, etc..." />
          </div>
        </div>

        <div className="right">
          <div className="ml-[-4vh]">
            <h3 className="text-sm md:text-2xl pb-1 md:pb-4 ml-15 md:ml-0">Description</h3>
            <textarea value={description} onChange={(e) => setTaskDescription(e.target.value)} className="px-10 pt-2 outline-none border border-emerald-900 rounded-2xl ml-12 md:ml-0 md:sm md:text-xl-0 w-[30vw] h-50 md:w-[36vw]" />
          </div>

          <button type="submit" className="font-semibold px-12 text-sm md:text-xl md:px-47 py-1 md:py-4 bg-emerald-400 ml-8 md:ml-[-4vh] rounded-xl mt-4 md:mt-4 hover:text-white/80 hover:bg-emerald-600 cursor-pointer transition-all ease-in-out duration-150">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
