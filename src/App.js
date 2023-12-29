import { RecoilRoot } from "recoil";
import AdminPage from "./pages/AdminPage";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <AdminPage />
    </RecoilRoot>
  );
}

export default App;
