import { LanguageContext } from './context/language/LanguageContext';
import { Home } from './pages/home/Home';

function App() {

  return (
    <LanguageContext>
      <Home/>
    </LanguageContext>
 
  );
}

export default App;
