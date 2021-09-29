import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import Gallery from "./page/Gallery";
import "./App.css";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div style={{ background: "linear-gradient(white, #b9edec)" }}>
        <Gallery />
      </div>
    </AppProvider>
  );
}

export default App;
