import {
  defineCapability,
  defineCapabilities,
} from "@ctrip/intent-render-react";
import { z } from "zod";
import { message } from "antd";

const myCapabilities = defineCapabilities({
  addToCart: defineCapability({
    description: "把指定商品加入购物车",
    params: z.object({ productId: z.string() }),
    impl: async (args) => {
      message.success(`已加入购物车: ${args.productId}`);
    },
  }),
});

export default myCapabilities;
