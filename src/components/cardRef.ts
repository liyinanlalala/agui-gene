import { z } from "zod";
import type { ComponentDef } from "@ctrip/intent-render-react";

const cardDef: ComponentDef = {
  description: "信息卡片,展示 title 和 body 文本",
  props: z.object({
    title: z.string(),
    body: z.string(),
  }),
};

export default cardDef