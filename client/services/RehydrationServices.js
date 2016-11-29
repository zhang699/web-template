import { persistStore } from 'redux-persist';

const updateReducers = (store) => {
  // Begin a fresh store
  persistStore(store, {
    blacklist: ['routing'],
  });
};

export default { updateReducers };
