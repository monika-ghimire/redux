
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './store/Store';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
const root=createRoot(rootElement)
root.render(
<Provider store={store}>
<App />
</Provider>
 
   

  
);


// reportWebVitals();
