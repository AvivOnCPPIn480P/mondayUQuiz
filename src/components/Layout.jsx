import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import WelcomePage from "./pages/WelcomePage";
import ScorePage from "./pages/ScorePage";

const Layout = () => {
  return (
    <BrowserRouter>
      <section className="layout">
        <main>
          <Switch>
            <Route path="/home">
              <WelcomePage />
            </Route>
            <Route path="/quiz">
              <QuizPage />
            </Route>
            <Route path="/score">
              <ScorePage />
            </Route>
            <Redirect from="/" to="/home" exact />
          </Switch>
        </main>
      </section>
    </BrowserRouter>
  );
};

export default Layout;