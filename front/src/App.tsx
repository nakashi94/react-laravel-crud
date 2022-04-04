import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
