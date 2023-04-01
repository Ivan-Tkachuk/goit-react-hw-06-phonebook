import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/SavedContacts/savedContacts.json';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { value: initialContacts },
  reducers: {
    addContact(state, action) {
      state.value.push(action.payload);
    },
    deleteContact(state, action) {
      state.value = state.value.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['value'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
