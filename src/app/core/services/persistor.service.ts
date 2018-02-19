import { Injectable } from '@angular/core';
import { Store, Reducer } from 'redux';
import {Persistor} from 'redux-persist';

import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import storage from 'redux-persist/es/storage';

@Injectable()
export class PersistorService {
  private _store: Store<any>;
  private _reducer: Reducer<any>;
  private _persistor: Persistor;

  constructor() {}

  persistReducer(reducer: Reducer<any>): Reducer<any> {
    const config = {
      key: 'redux-persist',
      storage,
    };

    this._reducer = persistReducer(config, reducer);

    return this._reducer;
  }

  configureStore(store: Store<any>) {
    this._persistor = persistStore(store);
  }

  flush() { this._persistor.flush(); }
  purge() { this._persistor.purge(); }
}
