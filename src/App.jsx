import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Page from "./Page";
import Blog from "./components/Blog/Blog";
import LeetCode from "./components/LeetCode/LeetCode";
import Error from "./components/Error/404";
import LeetCodeHome from "./components/LeetCode/LeetCodeHome";
import LeetCodeDetail from "./components/LeetCode/LeetCodeDetail";

const App = () => {
  //don't forget to add font link in index.html
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="leetcode" element={<LeetCode />}>
            <Route index element={<LeetCodeHome />} />
            <Route path=":contactId" element={<LeetCodeDetail />}></Route>
          </Route>
          {/* <Route path="test" element={<Test />} /> */}
          <Route path="*" element={<Error />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
