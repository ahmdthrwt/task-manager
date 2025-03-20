import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    // Always send both fields, empty string for description if not provided
    const taskData = {
      title: title.trim(),
      description: description.trim()
    };
    
    onAddTask(taskData);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title..."
          className="task-input"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description (optional)..."
          className="task-input min-h-[80px] resize-y"
          rows="3"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn-primary flex items-center gap-1"
          disabled={!title.trim()}
        >
          <PlusIcon className="h-5 w-5" />
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
