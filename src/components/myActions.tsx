import { defineActions } from "@ctrip/intent-render-react";
import { z } from "zod";
import { message } from "antd";

const myActions = defineActions({
  showHello: {
    description: "弹一个 toast 打招呼",
    params: z.object({ name: z.string() }),
    impl: async (args) => {
      message.success(`Hello, ${args.name}!`);
    },
  },
});

export default myActions;
