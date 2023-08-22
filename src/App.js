import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Hfa from "./pages/Hfa";
import Kontakt, { kontaktAction } from "./pages/Kontakt";
import NotFound from "./pages/NotFound";
import Hauses, { hausesLoader } from "./pages/hauses/Hauses";
import HausDetailed, { hausDetailedLoader } from "./pages/hauses/HausDetailed";
import HausFehler from "./pages/hauses/HausFehler";

import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import HausLayout from "./layouts/HausLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="hfa" element={<Hfa />} />
        <Route path="kontakt" element={<Kontakt />} action={kontaktAction} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route
        path="hauses"
        element={<HausLayout />}
        errorElement={<HausFehler />}
      >
        <Route index element={<Hauses />} loader={hausesLoader} />
        <Route
          path=":id"
          element={<HausDetailed />}
          loader={hausDetailedLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
