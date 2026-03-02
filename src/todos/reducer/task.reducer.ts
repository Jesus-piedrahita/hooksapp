interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface StateTask {
    todos: Todo[];
    length: number;
    completedCount: number;
    pendingCount: number;
}

export function getTaskInitialState (): StateTask {
    return {
        todos: [],
        length: 0,
        completedCount: 0,
        pendingCount: 0
    }
}

export type ActionType =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

export function taskReducer (state: StateTask, action: ActionType): StateTask {

   switch (action.type) {
        case 'ADD_TODO': {
            if (action.payload.length === 0 ) return state;

            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pendingCount: state.pendingCount +1
            }
        }

        case 'DELETE_TODO': {
            const updatedTodos = state.todos.filter((todo) => todo.id !== action.payload);
            return {
                ...state,
                todos: [...updatedTodos],
                length: state.todos.length - 1,
                completedCount: updatedTodos.filter((todo) => todo.completed).length,
                pendingCount: updatedTodos.filter((todo) => !todo.completed).length
            }
        }

        case 'TOGGLE_TODO': {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed}
                }

                return todo;
            })
            return {
                ...state,
                todos: [...updatedTodos],
                completedCount: updatedTodos.filter((todo) => todo.completed).length,
                pendingCount: updatedTodos.filter((todo) => !todo.completed).length
            }
        }

        default: return state;
    }
}