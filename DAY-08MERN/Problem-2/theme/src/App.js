import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitch';
import UserForm from './ThemeStyle';

function App() {
  return (
    <ThemeProvider>
    <div className="App">
    <UserForm/>
    <ThemeSwitcher />
    </div>
    </ThemeProvider>
  );
}

export default App;
