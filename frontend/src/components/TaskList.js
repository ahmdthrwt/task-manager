import React from 'react';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckCircleSolidIcon } from '@heroicons/react/24/solid';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
  if (!tasks.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks yet. Add one above!
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`p-4 bg-white rounded-lg shadow-sm border ${
            task.completed ? 'border-green-200 bg-green-50' : 'border-gray-200'
          }`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-grow">
              <button
                onClick={() => onToggleComplete(task.id)}
                className={`mt-1 h-6 w-6 flex-shrink-0 ${
                  task.completed ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {task.completed ? (
                  <CheckCircleSolidIcon className="h-6 w-6" />
                ) : (
                  <CheckCircleIcon className="h-6 w-6" />
                )}
              </button>
              <div className="flex-grow">
                <h3
                  className={`text-lg font-medium ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-700'
                  }`}
                >
                  {task.title}
                </h3>
                {task.description && (
                  <p
                    className={`mt-1 text-sm ${
                      task.completed ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {task.description}
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-red-400 hover:text-red-600 transition-colors duration-200 ml-4"
            >
              <TrashIcon className="h-5 w-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
