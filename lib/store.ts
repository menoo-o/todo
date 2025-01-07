import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

// Define the shape of a todo
interface Todo {
  id: number;
  text: string;
  completed: boolean;

}

// Define the shape of the store
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

// Create the store with persist middleware
export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [], // Initial state: empty todo list

      // Add a new todo
      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false, }],
        })),

      // Toggle a todo's completed status
      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),

      // Delete a todo
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),


    }),
    {
      name: 'todo-storage', // Key for localStorage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);