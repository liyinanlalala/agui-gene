import {
  IntentRenderProvider,
  type IntentRenderPackage,
} from "@ctrip/intent-render-react";
import cardDef from "./components/cardRef";
import Card from "./components/Card";
import { antdIntentRenderPackage } from "@ctrip/intent-render-antd";
import myCapabilities from "./components/myCapabilities";
import Chat from "./components/Chat";
import { App as AntdApp } from "antd";

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
    <AntdApp>
      <IntentRenderProvider
        packages={[myPackage, antdIntentRenderPackage]}
        capabilities={myCapabilities} // ← 跟 1.2 比就多这一行
        llm={{
          endpoint:
            "//intent-render-function.fws.faas.qa.nt.ctripcorp.com/api/intent-render/generate",
        }}
      >
        <Chat />
      </IntentRenderProvider>
    </AntdApp>
  );
}

export default App