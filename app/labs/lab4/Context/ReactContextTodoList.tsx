import { useState, type ReactNode } from "react";
import { TodosContext, useTodosContext, type Todo } from "./todosContext";

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React Context" },
    { id: "2", title: "Finish Lab 4" },
  ]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: new Date().getTime().toString(), title }]);
  };
  const updateTodo = (todo: Todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");

  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List (Context)</h3>
      <div className="mb-2 flex max-w-md gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          className="flex-1 rounded border border-neutral-300 px-3 py-1.5"
          id="wd-context-todo-title"
        />
        <button
          type="button"
          onClick={() => {
            addTodo(title);
            setTitle("");
          }}
          id="wd-context-todo-add-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
      </div>
      <ul className="m-0 max-w-md list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-1 flex gap-2">
            <input
              value={todo.title}
              onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              className="flex-1 rounded border border-neutral-300 px-3 py-1"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-todo-delete-${todo.id}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
