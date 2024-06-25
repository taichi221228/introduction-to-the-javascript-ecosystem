---
layout: section
transition: slide-up
level: 2
---

# Resumability

Why is **Qwik** gaining attention?

---
layout: two-cols
transition: slide-up
level: 2
---

# Qwik とは

Resumability ~ 再開可能性 ~

2021、Builder.io の創設者である Misko Hevery（Angular の共同創設者でもある）によって開発が開始された

**Web フロントエンドのパフォーマンスを次のレベルに押し上げるライブラリ**

最大の特徴として**他のライブラリが達成できなかった Hydration から完全に脱却することに成功している**

::right::

<div class="grid items-center justify-center h-full">

![Qwik](/resumability/qwik.svg)

</div>

---
layout: two-cols
transition: slide-up
level: 2
---

# 改めて Hydration とは

Hydration is Pure Overhead

本日二度目になるが、UI ライブラリから見て Hydration には課題が存在する

Hydration の手順

1. **Listener**: イベントリスナーを見つけ DOM にインストールする
2. **Component Tree**: アプリ・コンポーネントを表す内部データ構造を構築する
3. **Application State**: サーバー上の Store にフェッチまたは保存されたデータをリストアする

::right::

そしてオーバーヘッドになっている箇所

1. フレームワークは現在のページに関連付けられているすべてのコンポーネントコードをダウンロードする必要がある
2. ページ上のコンポーネントに関連付けられたテンプレートを実行してリスナーの場所と内部コンポーネントツリーを再構築する必要がある

![Hydration vs Resumable](https://cdn.builder.io/api/v1/image/assets/YJIGb4i01jvw0SRdL5Bt/04681212764f4025b2b5f5c6a258ad6e?format%3Dwebp%26width%3D945)

---
layout: section
transition: slide-up
level: 2
---

# Resumability とは

Qwik は上記の課題を解決すべく、新しいアプローチを考える

---
transition: slide-up
level: 2
---

# Listener の課題

イベントリスナーのない DOM は単なる静的なページであり、アプリケーションではない

今日のすべてのサイトの標準は、非常に高いレベルのインタラクティブ性であり、静的に見えるサイトでもイベントリスナーは満載

そんなイベントリスナー満載のサイトにおいて、現在のアプローチの最も問題なのはこの 3 点

1. テンプレートコードを積極的にダウンロードする必要がある
2. テンプレートコードを積極的に実行する必要がある
3. イベントハンドラーコードを積極的にダウンロードする必要がある

このアプローチには拡張性がない

アプリケーションが複雑になるにつれ積極的にダウンロードして実行する必要があるコードの量も比例して増加する

そしてこれはアプリケーションのチャンクを遅延ロードすることで軽減可能だが、問題はそれ自体が時間と労力を消費する開発タスクであること

---
transition: slide-up
level: 2
---

# Serialized Listener

拡張可能なイベントリスナー

Qwik はこの問題への明確な解答を持つ

Qwik は **イベントリスナーをシリアル化し、それを該当の DOM に直接埋め込んでしまう**

````md magic-move
```html
<button>click me</button>
```

```html
<button on:click="./chunk.js#handler_symbol">click me</button>
```
````

このアプローチはめちゃくちゃに秀逸で、**DOM に直接アタッチしている都合上イベントリスナーの登録という作業が必要ない**

つまり `<button />` にアタッチされたこのイベントは**押下されるまで決して発火されず、必要にかられない限り永遠にコストがかからない**

```ts twoslash
document.querySelector("dom_symbol")?.addEventListener("click", (_event) => {
  // Do something
});
```

使われるかもわからないインタラクティブのためにコストを割く必要がない {.opacity-50.text-sm}

---
transition: slide-up
level: 2
---

# Global Listener

Qwik Loader と Event Bubbling

勘のいい人は

> このアプローチでは押下してから JS のパースや実行が入るので、ユーザーがボタンを押してから動作するまでにかなり遅延が生じるのでは？

と思うかも知れないが、この問題を解決するために Qwik は多くの布石を打っている

1 つが **Global Listener**

Qwik は通常の `[onclick]` は使用せず、独自の `[on:click]` を使用する

これによりイベント発生から実行までをインターセプトし、最適化を挟めるようにしている

更に Qwik は Root Element（`<document />`）にあらゆる種類のイベントを一度だけ登録し、Bubble を辿って発生元を特定する

これにより他のフレームワークとは違い **`addEventListener` の数は `O(1)` であることが確定する**

ちなみに Global Listener を含む Qwikloader のランタイムコストは 1KB

---
transition: slide-up
level: 2
---

# Prefetching Modules

積極的な Service Worker の使用

布石 2 つ目が **Service Worker による積極的なプリフェッチ戦略**

Qwik はシリアライズの過程で生まれたチャンク `./chunk.js#handler_symbol` を全て Service Worker でプリフェッチし、これによりイベント発火からチャンクのダウンロードのラグを解消する

なお、不要なコードをプリフェッチすることはない

Qwik はレンダリング中に個々のイベント リスナー、コンポーネントの状態、コンポーネントをシンボルとして収集でき

たとえば、`カートに追加` ボタン 1 つを除いてほとんど静的な製品ページがあったとした場合、

Qwik Optimizer はクリックイベントと、それに付随する `カートに追加` のウィジェットのレンダラーのシンボルのみを収集する

アプリケーションの関連しない他の部分をダウンロード、ハイドレート、再レンダリングすることはなく、Qwik はイベントリスナーに必要なコードのみをプリフェッチする

---
layout: image-right
image: https://cover.sli.dev?b57f214f
transition: slide-up
level: 2
---

# 脱 Hydration

カルマからの脱却

SSR の項目でした例を用いると、既存のフレームワークは SSR した時点であらゆる情報が失われる

コンポーネントの境界やインタラクティブなど、ほぼ全てがひっぺがされ、静的な HTML に変わる

故に SSR ではクライアントサイドで整合性を担保するために Hydration と言う名の**再実行**が必要であった

**だが Qwik は違う**

もう一度 Hydration の項目を見てみよう

---
transition: slide-up
level: 2
---

# Hydration とは（再掲）

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

この動作を、**乾いた HTML に反応性という水を加えることになぞらえて Hydration** と呼ぶ

---
transition: slide-up
level: 2
---

# ランタイムの差異（再掲）

Hydration の問題点その 1

<div class="opacity-50">

SSR はサーバーでレンダリングしているが、**それを実際に使いたいのはクライアントである**

しかしクライアントには何が乗っかっているだろうか？

### VDOM、あるいは JavaScript 実行ファイルである（後者は後ほど説明します）

では VDOM や JavaScript 実行ファイルの実体はなんだろうか？

### JavaScript である

しかし SSR から返却されたものは？

### HTML である

</div>

この矛盾の解決のために、React や Vue.js は SSR で受け取った後にクライアントで**同じように一度レンダリング行い、その結果を破棄した後に HTML と接続するという大変回りくどいことをやっている**

<div class="opacity-50">

`Hydration Mismatch` というエラー名の由来もまさしくこれ

</div>

---
transition: slide-up
level: 2
---

# Resumable Component Tree

繰り返しますが、Qwik は**再開可能**です

通常の SSR では Hydration のコスト支払いは不可避である

しかしこれを嫌った Qwik は、レンダリング結果に様々な情報を埋め込むことを考えた

これは先の例の Qwik 版の実際のコードであり、他のものに比べて明らかに情報が多いのがわかる\
クライアントの Qwikloader はこの埋め込まれた情報を元に SSR から処理ををそのまま継続する

だから Qwik は**再開**なのである

````md magic-move
```html
<div>
  <h1>Hello, Taichi!</h1>
  <p>This component is rendered on the server.</p>

  <button>increment</button>
  <p>count: 0</p>
</div>
```

<!-- prettier-ignore-start -->
```html
<!--qv q:id=0 q:key=Ncbm:0t_0--><!--qv q:id=1 q:key=Nulk:4e_1-->
<div q:key="4e_0">
  <h1>Hello, <!--t=2-->Taichi<!---->!</h1>
  <p>This component is rendered on the server.</p>

  <button on:click="hello_component_increment_jlllffmx3c8.js#Hello_component_increment_JLllfFmX3c8[0]" q:id="3">
    increment
  </button>
  <p>count: <!--t=4-->0<!----></p>
</div>
<!--/qv--><!--/qv-->
```
<!-- prettier-ignore-end -->
````

---
transition: slide-up
level: 2
---

# Serialization

Qwik の根底

Qwik の理念は、コードの読み込みを可能な限り遅らせること

Qwik のコードの随所に登場する `$` がシリアライズ兼遅延読み込みのフラグであり、**`$` でラップされた箇所は全て Chunk が区切られ、最小実行単位としてシリアライズされる**

ちなみにパフォーマンスの観点から、この Qwik Optimizer は Rust で実装されている

```tsx {1,3,6}
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <button
      onClick$={() => {
        alert("Hello Qwik");
      }}
    >
      Hello Qwik
    </button>
  );
});
```

---
transition: slide-up
level: 2
---

# Optimize の例

軽く解説

このようなコンポーネントがあった場合

````md magic-move
```tsx
import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <button
      onClick$={() => {
        alert("Hello Qwik");
      }}
    >
      Hello Qwik
    </button>
  );
});
```

<!-- prettier-ignore-start -->
```tsx
import { _ as _jsxQ, q as qrlDEV } from "./_qwikCore.js";

const app_component_Ncbm0Trxwgc = () => {
  return /*#__PURE__*/ _jsxQ(
    "button", null,
    {
      onClick$: /*#__PURE__*/ qrlDEV(
        () => import("./app_component_p_onclick_qaxf8kamygk.js"),
        "app_component_p_onClick_qAXF8KaMygk",
        { file: "/app.tsx", lo: 105, hi: 132, displayName: "app_component_p_onClick" },
      ),
    },
    "Hello Qwik", 3, "4e_0",
    { fileName: "app.tsx", lineNumber: 4, columnNumber: 10 },
  );
};

export { app_component_Ncbm0Trxwgc };
```
<!-- prettier-ignore-end -->

```tsx
const app_component_p_onClick_qAXF8KaMygk = () => {
  alert("Hello Qwik");
};

export { app_component_p_onClick_qAXF8KaMygk };
```
````

---
transition: slide-up
level: 2
---

# Qwikloader の仕組み

最後に Qwik が Hydration を辞めた方法を解説

1. Qwikloader が全イベントに対しての Global Listener を設置

2. ユーザーが `<button />` をクリックしたら、Bubble を辿って DOM を特定

3. イベントパスを辿り、要素上の `[on:click]` を検索

4. `document.baseURI`・`[on:click]`・`[q:base]` を使用し、Chunk へのパス（QRL）を解決

5. QRL からエクスポートされたシンボル `#clickHandler` を取得し実行

```html
<html>
  <body q:base="/build/">
    <button on:click="./myHandler.js#clickHandler">push me</button>
    <script>
      /* Qwikloader */
    </script>
  </body>
</html>
```

---
layout: image-right
image: https://cover.sli.dev?9c533f6f
transition: slide-up
level: 2
---

# その他

それだけではありません

Qwik は最も新しいこともあり、それまでに生まれた新型 UI ライブラリ全ての特徴的な優位性を持っている

<LogoList :items="[
  { name: 'Comptime Optimization', path: '/resumability/svelte.svg' },
  { name: 'Fine-Grained Reactivity', path: '/resumability/solidjs.svg' },
  { name: 'Zero Lock-In', path: '/resumability/astro.svg' },
  { name: 'Islands Architecture', path: '/resumability/fresh.svg' },
]" :hasEtc="false" />

この全ての最適化の上に成り立っているのも Qwik が**結論**とされる理由のひとつ

---
transition: slide-up
level: 2
---

# 結局のところ何が嬉しいのか？

なぜ Qwik なのか

実は Qwik を超えることはできなくとも、匹敵するほど軽量なパフォーマンスは他のどのフレームワークでも実現ができる

それは React や Vue.js といった VDOM 搭載型でも例外ではない

正直これはこれだけで別の勉強会を開けるくらいのものなので今回は深く触れないが、

React なら React Server Components と React Compiler およびメモ化コンパイラ Milion.js、そして Next.js App Router の全てをフルに使えば、

Vue.js なら Vue 3 Vapor Mode と呼ばれる新型コンパイラの使用と、それに即した設計を行えば、

それぞれかなりのパフォーマンスを出すことができるだろう

しかし Qwik の優れている点は、**普通に使用するだけで React や Vue.js はもちろん、Svelte や Solid.js の本気に匹敵するパフォーマンスを出せること**

そして、このパフォーマンスが React や Vue.js では**最大**であるのに対し、Qwik では**最小**であること

---
transition: slide-up
level: 2
---

# 課題

最後に Qwik の抱える最強故の課題

1. 難しすぎる

   兎にも角にも Qwik 最大の課題。**Think Qwik** が難しすぎる\
   Qwik チームは 「React の知識だけで使える」と言っているが、まず間違いなく無理である\
   強力なパフォーマンスを発揮するために多くの制約があり、これらは React の知識から逸脱している

2. SSR 前提

   Qwik は SSR の段階で処理できるものは全て処理してしまい、クライアントに不必要に処理を強要しない\
   故に SSR が前提であり、CSR でアプリを作ることが難しい

3. まともな UI ライブラリがない

   現状まともな UI ライブラリが存在しない\
   ライブラリ登場初期にエコシステムが弱いのはどうしようもないとしても、あまりにも択がない

しかし現状理論上最強なのは間違いないので、今後どうなっていくかが一番楽しみな技術である
