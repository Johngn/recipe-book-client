import { Provider } from 'react-redux';
import store from './state/store';

import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <Provider store={store}>
      <AddRecipe />
      <Recipes />
    </Provider>
  );
}

export default App;
