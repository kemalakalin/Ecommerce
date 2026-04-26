import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return <h1 className="text-3xl font-bold">Home Page</h1>;
}

function Products() {
  return <h1 className="text-3xl font-bold">Products Page</h1>;
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;