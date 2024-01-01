import { RecoilRoot } from "recoil";
import ContentPage from "./pages/ContentPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <ContentPage />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
