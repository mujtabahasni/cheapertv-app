import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistorService } from './persistor.service';


describe('The Persistor Service',  () => {
  let persistor: PersistorService;
  let reducer;
  let store;

  beforeEach( () => {
    persistor = new PersistorService();

    reducer = (state, action) => {
      if (action) {
        state = {
          ...state,
          action
        };
      }
      return state;
    };

    store = createStore(reducer);
  });

  describe('persistReducer() method', () => {
    it('should return a new reducer with the supplied reducer', () => {
      const result = persistor.persistReducer( reducer );
      expect(result).not.toEqual(reducer);
    });
  });
  describe('configureStore() method', () => {
    it('should return a new store object with supplied store object', () => {
      const result = persistor.configureStore( store );
      expect(result).not.toEqual(store);
    });
  });

  describe('flush() method', () => {
    it('should call persistor flush() method', () => {
      spyOn(persistor, 'flush');
      persistor.flush();
      expect(persistor.flush).toHaveBeenCalled();
    });
  });
  describe('purge() method', () => {
    it('should call persistor purge() method', () => {
      spyOn(persistor, 'purge');
      persistor.purge();
      expect(persistor.purge).toHaveBeenCalled();
    });
  });
});
