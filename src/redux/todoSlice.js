import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//Thunk is a function that returns another function
export const getTodosAsync = createAsyncThunk(
	'todos/getTodosAsync',
	async () => {
		const response = await fetch('https://localhost:7000/todos');
		if (response.ok) {
			const todos = await response.json();
			return { todos };
		}
	}
);

const todoSlice = createSlice({
	//control todo state
	name: 'todos',
	initialState: [
		{ id: 1, title: 'todo1', completed: false },
		{ id: 2, title: 'todo2', completed: false },
		{ id: 3, title: 'todo3', completed: true },
	],
	reducers: {
		//any state that is updated gets pushed up to the store
		//reducer that handles add todo action
		addTodo: (state, action) => {
			const newTodo = {
				//add logic to updated state
				id: Date.now(),
				title: action.payload.title,
				completed: false,
			};
			state.push(newTodo); //adds new todo to end of array
		},
		//toggleComplete reducer
		toggleComplete: (state, action) => {
			const index = state.findIndex(
				(todo) => todo.id === action.payload.id
			);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
	},
	// Add reducers for additional action types here, and handle loading state as needed
	extraReducers: {
		[getTodosAsync.fulfilled]: (state, action) => {
			return action.payload.todos;
		},
	},
});
export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions; //created our  actions (todo, toggleComplete)

export default todoSlice.reducer;
