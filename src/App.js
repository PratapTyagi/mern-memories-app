// imports from outside
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// imports from our app
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Authentication from "./auth/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Authentication} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
