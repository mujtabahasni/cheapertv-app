import { NgModule } from '@angular/core';
import { Store, createStore, compose, applyMiddleware } from 'redux';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxFormModule, NgReduxFormConnectModule } from '@angular-redux/form';
import { createEpicMiddleware } from 'redux-observable';
import { RootState, rootReducer, initialRootState } from '../store';
import { PersistorService, TvDbService } from '.././core/services';
import { rootEpic } from './root.epic';

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
  constructor(
    ngRedux: NgRedux<RootState>,
    persistor: PersistorService,
    tvdb: TvDbService,
    devtools: DevToolsExtension) {

    let store: Store<any>;
    const reducer = persistor.persistReducer(rootReducer);
    const epicMiddleware = createEpicMiddleware(rootEpic, {
      dependencies: { tvdb, persistor }
    });

    if (devtools.isEnabled()) {
      store = createStore(
        reducer,
        compose(applyMiddleware(epicMiddleware), devtools.enhancer())
      );
    } else {
      store = createStore(
        reducer,
        applyMiddleware(epicMiddleware)
      );
    }
    persistor.configureStore(store);
    ngRedux.provideStore(store);
  }
}
