import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice'; // import form toSlice.js

export default configureStore({
	//configure store
	reducer: {
		todos: todoReducer, //added reducer to store
	},
});
