import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#D83A56',
    },
    secondary: {
      main: '#9cd8bd',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <p>
          Welcome Team 2
        </p>
    </ThemeProvider>
  );
}

export default App;