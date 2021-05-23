import { createSlice } from '@reduxjs/toolkit';

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
	},
});
export const { addTodo, toggleComplete } = todoSlice.actions; //created our  actions (todo, toggleComplete)

export default todoSlice.reducer;
