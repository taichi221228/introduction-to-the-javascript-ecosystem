---
layout: section
transition: slide-up
level: 2
---

# Islands Architecture

Why is **Astro** gaining attention?

---
layout: two-cols
transition: slide-up
level: 2
---

# Islands Architecture とは

Post SSG

2019 年ごろ、Etsy の フロントエンドアーキテクトである Katie Sylor-Miller が会議中に考案

翌年 Preact の作者である Jason Miller によって広く知れ渡ることとなった

先述の Hydration の課題を解決すべく生まれ、**選択的ハイドレーション**という新たな概念を提唱した

その思想は従来の Web（MPA）的であり、近代の SPA とは異なる

::right::

<div class="grid mx-4">
  <img src="/islands/astro.svg" alt="Astro" />
  <img src="/islands/fresh.svg" alt="Fresh" class="ml-auto" />
</div>

---
layout: two-cols
transition: slide-up
level: 2
---

# Selective Hydration とは

別名: Partial Hydration

Hydration（SSR の課題）を踏まえ生まれた概念

従来のアーキテクチャは、動的なコンテンツの量の割にランタイムが重すぎたという問題があった

これはインタラクティブの量に関係なく常にページ全体を Hydration していたから

ページ全体を海と捉え、特定の動的なコンテンツのみ島のように Hydration するイメージで、Hydration を必要最低限にしようという試み

その他あらゆる**海**は完全に静的な HTML であるため、SSR の全体レンダリングを待つこともなければ、少ないインタラクティブのために大規模なランタイムを用意する必要もない

::right::

![](/islands/islands-architecture.png)

---
transition: slide-up
level: 2
---

# 0 Lock-In

Framework Agnostic

Astro は高度な抽象化機能を有しており、**好きな UI ライブラリを選定することができる**

これは新生の UI ライブラリの生存戦略として非常に優秀で、ユーザーへの負担低下と共に、既存のエコシステムにあやかれるという大きな利点がある

実際 Astro 内でも一番手が混んでいるのはこのライブラリ差異の吸収層

```astro {2,12}
---
import BuyButton from "../components/BuyButton.{ts,tsx,vue,svelte}";
import { getProductDetails } from "ecommerce-package";
import ProductPageLayout from "../layouts/ProductPageLayout.astro";

const product = await getProductDetails(Astro.params.slug);
---

<ProductPageLayout>
  <img src={product.imageUrl} alt={product.imageAlt} />
  <h2>{product.name}</h2>
  <BuyButton id={product.id} client:load />
</ProductPageLayout>
```

---
transition: slide-up
level: 2
---

# Absolute 0

No JavaScript 宣言

**Astro はデフォルトでは一切の JavaScript を禁止する**

例えどんな UI ライブラリを使用したとしても、専用のフラグ `client:{load,visible,only}` を付与し明示的に動的である = 島であることを伝えない限り全てが海として扱われる

ランタイムを含むほぼ全ての JavaScript が抹消され、圧倒的に軽量な Web サイトが完成する

<br />
<br />

````md magic-move
```astro {4}
<ProductPageLayout>
  <img src={product.imageUrl} alt={product.imageAlt} />
  <h2>{product.name}</h2>
  <BuyButton id={product.id} />
</ProductPageLayout>
```

```astro {4}
<ProductPageLayout>
  <img src={product.imageUrl} alt={product.imageAlt} />
  <h2>{product.name}</h2>
  <BuyButton id={product.id} client:load />
</ProductPageLayout>
```
````

---
layout: fact
transition: slide-up
level: 2
---

# 課題

---
transition: slide-up
level: 2
---

# 島間の通信が困難

Islands Architecture の課題 1

Islands Architecture は素晴らしいが、いくつか課題が存在する

1 つ目が**島が全て独立したアプリであること**

```astro {7,8}
---
import Layout from "./layouts/Layout.astro";
import Counter from "./components/Counter.svelte";
import Double from "./components/Counter.svelte";
---

<Layout>
  <Counter client:visble />
  <Double client:visble />
</Layout>
```

例えばこれは `<Counter />` と `<Double />` はそれぞれ完全に独立した Svelte アプリであるため、同期が取れない

グローバルな状態管理ライブラリ等を使用して、追加実装する必要があるがこの手のアプローチは **React の難しさで自明である**

---
transition: slide-up
level: 2
---

# 島の定義が手動

Islands Architecture の課題 2

一般的に Islands Architecture では島の定義が手動である

故に開発者はどこが島でどこが海かを常に把握しておく必要があるし、仕様に即した適切な設計をする必要がある

どのような状況で、どのような手法で島に Hydration を行うかを手動で記述するのはそれなりに難しい

```astro {9,12}
---
import Layout from "./layouts/Layout.astro";
import Carousel from "./components/Carousel.vue";
import Products from "./components/Products.vue";
---

<Layout>
  <h1>Top Page</h1>
  <Carousel client:visible />

  <h2>Products</h2>
  <Products client:load  />
</Layout>
```

---
layout: statement
transition: fade-left
level: 2
---

# 続いては

長かったですね。ようやく彼の登場です
