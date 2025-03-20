import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    onAddTask({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="task-input flex-grow"
        />
        <button
          type="submit"
          className="btn-primary flex items-center gap-1"
          disabled={!title.trim()}
        >
          <PlusIcon className="h-5 w-5" />
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
