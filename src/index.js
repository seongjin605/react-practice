import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import timelineReducer, {
  addTimeLine,
  removeTimeLine,
  editTimeLine,
  increaseNextPage
} from './timeline/state';
import friendReducer, { addFriend, removeFriend, editfriend } from './friend/state';

const middleware = store => next => action => {
  console.log('🚀 start middleware');
  const result = next(action);
  console.log('🚀 end middleware');
  return result;
};

const reducer = combineReducers({
  timeline: timelineReducer,
  freind: friendReducer
});

const store = createStore(reducer, applyMiddleware(middleware));

store.subscribe(() => {
  const state = store.getState();
  console.log('state:', state);
});

store.dispatch(addTimeLine({ id: 1, desc: 'Enjoy programming' }));
store.dispatch(addTimeLine({ id: 2, desc: 'Hey redux' }));
store.dispatch(increaseNextPage());
store.dispatch(editTimeLine({ id: 2, desc: 'Go away redux' }));
store.dispatch(removeTimeLine({ id: 1, desc: 'Enjoy programming' }));

store.dispatch(addFriend({ id: 1, name: 'taylor' }));
store.dispatch(addFriend({ id: 2, name: 'terry' }));
store.dispatch(editfriend({ id: 2, name: 'mikku' }));
store.dispatch(removeFriend({ id: 1, name: 'mikku' }));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
