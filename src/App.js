import Footer from "./components/Footer";
import Header from "./components/Header";
import "./assets/scss/style.scss";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";
import Point from "./pages/Point";
import Store from "./pages/Store";
import News from "./pages/News";

function App() {
    return (
        <div>
            <Header />

            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/products" component={Product} />
                <Route path="/about" component={About} />
                <Route path="/point" component={Point} />
                <Route path="/store" component={Store} />
                <Route path="/news" component={News} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
