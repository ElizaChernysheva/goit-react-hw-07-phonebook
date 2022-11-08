import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactObj, getContact, removeContact } from '../../service/api';

export  const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await getContact();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


export  const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, { rejectWithValue }) => {
    try {
      return await addContactObj(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export  const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, { rejectWithValue }) => {
    try {
      return await removeContact(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)
