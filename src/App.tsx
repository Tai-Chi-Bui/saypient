import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes/routes";

const RoutesRenderer: React.FC = () => {
  const elements = useRoutes(routes);
  return elements;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="h-screen bg-gray-100 flex flex-col items-center justify-start">
        <Header />
        <RoutesRenderer />
      </div>
    </Router>
  );
};

export default App;
