function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
      />
      <span
        className={`flex-1 ${
          todo.completed ? 'text-gray-500 line-through' : 'text-gray-700'
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-100 rounded-md transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;