---
layout: section
transition: slide-up
level: 2
---

# 0 Config & SSG/SSR

Why did **Next.js**/**Nuxt** come to dominate?

---
layout: two-cols
transition: slide-up
level: 2
---

# DX と Perf の両立

時代の寵児の誕生

前述の課題から、React/Vue.js エコシステムには開発基盤とパフォーマンスの課題が存在した

彼らはそれらの解決に乗り出したもの達

これが Meta-Framework、すなわち**ライブラリのフレームワーク**ムーブメントの走り

<LogoList :items="[
    { name: 'React における Next.js', path: '/ssr/next.js.svg' },
    { name: 'Vue.js における Nuxt', path: '/ssr/nuxt.svg' },
    { name: 'Svelte における SvelteKit', path: '/ssr/svelte-kit.png' },
    { name: 'Solid.js における SolidStart', path: '/ssr/solidstart.svg' },
    { name: 'Qwik における Qwik City', path: '/ssr/qwik.svg' },
  ]" :hasEtc="false" />

と言った要領

::right::

<div class='grid gap-4'>
  <img src="/ssr/next.js.svg" alt="Next.js" />
  <img src="/ssr/nuxt.svg" alt="Nuxt" class="ml-auto" />
</div>

---
layout: statement
transition: slide-up
level: 2
---

# とにかく優れた開発体験

---
transition: slide-up
level: 2
---

# File Based Routing

優れていた点その 1

当時は **React Router 被害者の会**により、ルーティングの体験に**かなり**不満が溜まっていた

これを踏まえ、Next.js や Nuxt は特定ディレクトリ（`pages`）配下にコンポーネントを設置するだけでルーティングが完結する基盤を提供した

加えて動的なルーティングや API Routes によるエンドポイントの作成なども簡単にでき、革新的だった

| Route                     | URL           | params                      |
| ------------------------- | ------------- | --------------------------- |
| `pages/blog/[slug].js`    | `/blog/a`     | `{ slug: 'a' }`             |
| `pages/shop/[...slug].js` | `/shop/a/b`   | `{ slug: ['a', 'b'] }`      |
| `pages/shop/[...slug].js` | `/shop/a/b/c` | `{ slug: ['a', 'b', 'c'] }` |

---
layout: two-cols
transition: slide-up
level: 2
---

# 0 Config

優れていた点その 2

`npx create-next-app`（現 `npm create next`）でセットアップが一瞬で済んだ

Create React App もセットアップ自体は速かったが、Next.js は過度にバンドラの設定を秘匿させず、拡張性が高かった

特に、

**ややこしすぎる Webpack の設定を一挙に担い、Code Splitting や Tree Shaking と言った最適化をデフォルトでセットアップしてくれた恩恵は計り知れない**

::right::

```js twoslash
// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: { CUSTOM_KEY: "my-custom-value" },
  redirects: async () => [
    {
      source: "/old-page",
      destination: "/new-page",
      permanent: true,
    },
  ],
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;

    return config;
  },
  images: { domains: ["example.com"] },
};

export default nextConfig;
```

---
transition: slide-up
level: 2
---

# SSR

優れていた点その 4

それまで Express と JSDom でめっちゃ頑張って実装していた SSR が、簡単に書けるようになった

```tsx twoslash
import React from "react";
import { type InferGetServerSidePropsType } from "next";

export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;
export default function Page({ data }: Props) {
  return (
    <div>
      <h1>Server-Side Rendered Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

---
transition: slide-up
level: 2
---

# そもそも SSR とは？

SSR の原理を解説する

Server Side Rendering の略

先述の通り、基本的に VDOM はクライアントサイドで動作する（CSR）が課題が多い

それを踏まえて生まれたのが、**最初のレンダリングが極端に遅く SEO 的にも弱いのなら、最初だけサーバーでやっちまえば良い**という思想

レンダリングとはすなわち**コンポーネントを HTML にコンパイルすること**

React/Vue.js にはそれに該当する低レベル API（例えば `renderToStaticMarkup()`）が生えており、サーバー上で一回 React/Vue.js アプリを起動させ、HTML にコンパイルした上でそれをクライアントに返却する手法が生まれた

こうすることでサーバーは最初に静的な HTML を返すようになり、CSR の課題が解決された

またモバイル端末のような処理能力が低いプラットフォームでも効力を発揮した

---
transition: slide-up
level: 2
---

# 似た概念 SSG について

Static Site Generation の略

SSG は SSR の派生系である

つまり、もし仮にそのフレームワークが SSR の能力を有していた場合、理論上は SSG も可能となる

SSR と SSG の違いは**タイミングだけ**

SSR はリクエストが来る度にレンダリングを行うが、SSG はビルド時に一度だけレンダリングを行い、結果（HTML）をファイルとして出力する

これにより出力された HTML をホスティングするだけで静的サイトを構築できるという理屈で、**根本的にやってる動作自体は基本的に SSR と変わらない**

他にも Incremental Static Regeneration や Edge Side Rendering、Streaming SSR などが存在するが、今回は割愛する

---
layout: two-cols
transition: slide-up
level: 2
---

# SSR の例

```tsx twoslash
import React from "react";
import { useCallback, useState } from "react";

export const Hello = ({ name }: { name: string }) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((p) => ++p);
  }, []);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This component is rendered on the server.</p>

      <button onClick={increment}>increment</button>
      <p>count: {count}</p>
    </div>
  );
};
```

このようなコンポーネントを

::right::

`renderToStaticMarkup` に通すと

```tsx twoslash
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Hello } from "./public/ssr/hello";

const h = renderToStaticMarkup(<Hello name="Taichi" />);
```

こうなる

```html
<div>
  <h1>Hello, Taichi!</h1>
  <p>This component is rendered on the server.</p>

  <button>increment</button>
  <p>count: 0</p>
</div>
```

---
layout: statement
transition: slide-up
level: 2
---

# SSR の課題

---
layout: fact
transition: slide-up
level: 2
---

# Hydration

兎にも角にも全 Meta-Framework（Qwik 以外）はこの問題に見舞われている

---
transition: slide-up
level: 2
---

# Hydration とは

SSR の宿命

勘の良い人は気づいたかも知れないが、SSR がレンダリングした物体には**インタラクティブが欠如している**

```html
<div>
  <h1>Hello, Taichi!</h1>
  <p>This component is rendered on the server.</p>

  <button>increment</button>
  <p>count: 0</p>
</div>
```

このコードだと、`<button />` や `<p />` にあったはずの動的性がない

当然このままでは使えないので、今度は**クライアント側でこの一度レンダリングされたものを接続しなおす必要がある**

この動作を、**乾いた HTML に反応性という水を加えることになぞらえて Hydration（水分補給）** と呼ぶ

---
transition: slide-up
level: 2
---

# ランタイムの差異

Hydration の問題点その 1

SSR はサーバーでレンダリングしているが、**それを実際に使いたいのはクライアントである**

しかしクライアントには何が乗っかっているだろうか？

### VDOM、あるいは JavaScript 実行ファイルである（後者は後ほど説明します）

では VDOM や JavaScript 実行ファイルの実体はなんだろうか？

### JavaScript である

しかし SSR から返却されたものは？

### HTML である

この矛盾の解決のために、React や Vue.js は SSR で受け取った後にクライアントで**同じように一度レンダリング行い、その結果を破棄した後に HTML と接続するという大変回りくどいことをやっている**

Hydration mismatch というエラー名の由来もまさしくこれ

---
transition: slide-up
level: 2
---

# 負荷が高い

Hydration の問題点その 2

当時の SSR で使用される `renderToStaticMarkup` のような関数は、同期的なものだった

他方でご存知の通り Node.js はシングルスレッドである

リクエストに応じてオンザフライでレンダリングをする SSR はこの状況と壊滅的に相性が悪かった

レンダリングが同期処理である都合上、1 つのリクエストが処理されている間、他のリクエストは全て待機状態になりスループットは低下

加えてページ全体がレンダリングされるまでクライアントには一切が送信されないため、扱いを間違えるとユーザーは CSR 以上に長い待機時間を経験することになった

---
layout: image-right
image: https://cover.sli.dev?acf551ab
transition: slide-up
level: 2
---

# まとめ

結局何だったのか？

0 Config & SSR により、開発体験が大幅に向上し、SSR や SSG の難易度も低下した

他方で、難易度は低下したものの依然として SSR は考慮事項が多い

また Hydration というオーバーヘッドが中々に厄介で、ここから JavaScript エコシステムはこれと長く戦うことになる

---
layout: statement
transition: slide-left
level: 2
---

# 続いて
