import { initialState } from '../inititalState';
import { addContact, deleteContact, fetchContacts } from './concactsOperations';
import { createSlice } from "@reduxjs/toolkit";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name:'contacts',
  initialState:initialState.contacts,
  extraReducers:{
    [fetchContacts.pending]:handlePending,
    [fetchContacts.fulfilled]:(state,action)=>{
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]:handleRejected,

    [addContact.pending]:handlePending,
    [addContact.fulfilled]:(state,action) =>{
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]:handleRejected,
    [deleteContact.pending]:handlePending,
    [deleteContact.fulfilled]:(state,action)=>{
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(contact => contact.id === action.payload.id)
      state.items.splice(index, 1)
    },
    [deleteContact.rejected]:handleRejected,
  },

})


export const { addContactAction,removeContactAction } = contactsSlice.actions;
export default contactsSlice.reducer;
