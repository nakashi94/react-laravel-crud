import { BrowserRouter } from "react-router-dom"
import { Router } from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
