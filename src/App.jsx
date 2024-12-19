import Page from "./page";
import { ThemeProvider } from "next-themes";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Page></Page>
    </ThemeProvider>
  );
}

export default App;
