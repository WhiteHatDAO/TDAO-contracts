import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Pages/PreSalePage';
import PreSalePage from "./Pages/PreSalePage";

const theme = createTheme({
  status: {
    danger: "#f00",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PreSalePage/>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

