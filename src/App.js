import "./App.css";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="lg">
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
