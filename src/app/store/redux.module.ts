import { NgModule } from '@angular/core';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxFormModule, NgReduxFormConnectModule } from '@angular-redux/form';
import thunk from 'redux-thunk';
import { RootState, rootReducer, initialRootState } from '../store';
import { PersistorService } from '.././core/services';

@NgModule({
  imports: [
    NgReduxModule,
  ],
  exports: [
    NgReduxModule,
    NgReduxFormModule,
    NgReduxFormConnectModule,
  ],
})

export class ReduxModule {
  constructor(ngRedux: NgRedux<RootState>, persistor: PersistorService, devtools: DevToolsExtension) {

    let store: Store<any>;
    const reducer = persistor.persistReducer(rootReducer);

    if (devtools.isEnabled()) {
      store = createStore(
        reducer,
        compose(applyMiddleware(thunk), devtools.enhancer())
      );
    } else {
      store = createStore(
        reducer,
        applyMiddleware(thunk)
      );
    }
    persistor.configureStore(store);
    ngRedux.provideStore(store);
  }
}
