import { RecoilRoot } from "recoil";
import ContentPage from "./pages/ContentPage";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ContentPage />
    </RecoilRoot>
  );
}

export default App;
