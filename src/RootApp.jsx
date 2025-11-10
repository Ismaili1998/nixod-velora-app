import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PageLoader from "@/components/PageLoader";
import store from "@/redux/store";
import "./index.css";

const VeloraErp = lazy(() => import("./app/VeloraErp"));

export default function RootApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<PageLoader />}>
          <VeloraErp />
        </Suspense>
      </Provider>
    </BrowserRouter>
  );
}
