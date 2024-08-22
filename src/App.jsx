import Page from "./page";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class">
      <Page></Page>
    </ThemeProvider>
  );
}

export default App;
