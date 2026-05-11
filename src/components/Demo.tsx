import { IntentRender } from "@ctrip/intent-render-react";

function Demo() {
  return (
    <IntentRender
      ui={{
        type: "Container",
        children: [
          {
            type: "Card",
            props: {
              title: "示例卡片",
              body: "点下面按钮试试。",
            },
          },
          {
            type: "Button",
            props: { label: "Say hello" },
            on: {
              click: [
                { call: "showHello", args: { name: "world" } },
                // { call: "showError", args: {} },
              ],
              // click: "$workflow:showError"
            },
          },
        ],
      }}
      data={{}}
    />
  );
}

export default Demo;
