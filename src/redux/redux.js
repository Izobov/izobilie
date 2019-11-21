import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMidleware from 'redux-thunk';
import catalog_reducer from './catalog_reducer';
import basket_reducer from './basket_reducer';



const reducers = combineReducers({
    catalog: catalog_reducer,
    basket: basket_reducer,
    form: formReducer

})

const store = createStore(reducers, applyMiddleware(thunkMidleware));

export default store;

window.store = store