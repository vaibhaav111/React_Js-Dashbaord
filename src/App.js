import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Single from "./pages/single/Single.jsx";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formsource.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="add new user"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="add new produts"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
