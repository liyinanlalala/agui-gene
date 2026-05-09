import {
  IntentRenderProvider,
  type IntentRenderPackage,
} from "@ctrip/intent-render-react";
import cardDef from "./components/cardRef";
import Card from "./components/Card";
import Demo from "./components/Demo";
import { antdIntentRenderPackage } from "@ctrip/intent-render-antd";

const myPackage: IntentRenderPackage = {
  id: "my-app",
  version: "0.1.0",
  meta: { name: "My App Components" },
  components: {
    definitions: { Card: cardDef },
    implementations: { Card },
  },
};

function App() {
  return (
    <IntentRenderProvider packages={[myPackage, antdIntentRenderPackage]}>
      <Demo />
    </IntentRenderProvider>
  );
}

export default App;
