import { useState } from "react";
import { z } from "zod";
import {
  useIntentRenderGenerate,
  IntentPage,
  type PageBundle,
} from "@ctrip/intent-render-react";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

function Chat() {
  const [product] = useState({ id: "p-1", name: "Pro Plan", price: 99 });
  const [intent, setIntent] = useState(
    "用卡片展示当前产品,底部加『加入购物车』按钮",
  );
  const { bundle, generate, isGenerating } = useIntentRenderGenerate();

  const handleGenerate = () =>
    generate(intent, {
      dataSchemas: {
        product: {
          schema: productSchema,
          value: product,
          description: "用户正在编辑的产品",
        },
      },
    });

  return (
    <>
      <textarea
        value={intent}
        onChange={(e) => setIntent(e.target.value)}
        rows={2}
      />
      <button
        onClick={handleGenerate}
        disabled={isGenerating || !intent.trim()}
      >
        {isGenerating ? "生成中…" : "生成"}
      </button>
      {/* 用 key 让 bundle 工作流变化时 IntentPage 重挂 */}
      {bundle?.ui && (
        <IntentPage
          key={JSON.stringify(Object.keys(bundle.workflows ?? {}))}
          bundle={bundle as PageBundle}
        />
      )}
    </>
  );
}

export default Chat;
