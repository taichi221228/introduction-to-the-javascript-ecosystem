---
layout: section
transition: slide-up
level: 2
---

# Anti-VDOM

Why is **Svelte**/**SolidJS** gaining attention?

---
layout: two-cols
transition: slide-up
level: 2
---

# コンパイル時最適化とは

IR からの脱却

2016 年後期、ついに VDOM から脱却したライブラリが登場した

当時の Pete の言葉通り

> 必要に応じて生の DOM と DOM API を使えば React に勝つことができる

を体現した彼らは、効率的に　**DOM を直接操作する**

ビルド時にその全て解決し、VDOM のような実行時の中間表現に関するオーバーヘッドを持たない JavaScript のみを出力する

だから Svelte は公式ドキュメントで**自身のことをコンパイラと呼称する**

::right::

<div class='grid mx-4'>
  <img src="/compiler/svelte.svg" alt="Svelte" />
  <img src="/compiler/solidjs.svg" alt="SolidJS" class="ml-auto" />
</div>

---
layout: two-cols
transition: slide-up
level: 2
---

# Anti-React Way Reactivity

React は偉大だが、難しすぎる

React は反応性としては Vue.js などと比べても特殊で、大多数が**該当箇所を再レンダリングする**のに対し、React は**全てを再レンダリングする**という特徴を持つ

つまり React 以外は自動でレンダリングをスキップするが、React ではレンダリングをスキップしたい時は**明示的に書かなければいけない**

これはある側面では正しい。故に React はステートを変更すればその画面の依存は全て更新されることが確約されているため、堅牢と言える

しかし一方で、この仕様は難易度を増加させる\
書き手の力量でアプリの品質が変わるのだ

::right::

![](/compiler/kitze.png)

<small class="opacity-50">Web フロントエンドの権威 kitze にとって React Hooks は扱い辛いものだった</small>

---
transition: slide-up
level: 2
---

# 従来のコード

冗長で窮屈。そして危険

````md magic-move
```jsx
import { useState } from "react";

const Component = (props) => {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <p>Selected {selected ? selected.name : "nothing"}</p>
      <ul>
        {props.items.map((item) => (
          <li>
            <button onClick={() => setSelected(item)}>{item?.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

```tsx
import { useState } from "react";

const Component = (props) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (item) => {
    setSelected(item);
  };

  return (
    <div>
      <p>Selected {selected ? selected.name : "nothing"}</p>
      <ul>
        {props.items.map((item) => (
          <li>
            <button onClick={() => handleClick(item)}>{item?.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

```tsx
import { useCallback, useState } from "react";

const Component = (props) => {
  const [selected, setSelected] = useState(null);

  const handleClick = useCallback((item) => {
    setSelected(item);
  }, []);

  return (
    <div>
      <p>Selected {selected ? selected.name : "nothing"}</p>
      <ul>
        {props.items.map((item) => (
          <li>
            <button onClick={() => handleClick(item)}>{item?.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```
````

---
transition: slide-up
level: 2
---

# Svelte/SolidJS では

簡潔で柔軟。それでいて堅牢

````md magic-move
```tsx
import { useCallback, useState } from "react";

const Component = (props) => {
  const [selected, setSelected] = useState(null);

  const handleClick = useCallback((item) => {
    setSelected(item);
  }, []);

  return (
    <div>
      <p>Selected {selected ? selected.name : "nothing"}</p>
      <ul>
        {props.items.map((item) => (
          <li>
            <button onClick={() => handleClick(item)}>{item?.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

```svelte
<script>
  export let items = [];
  let selected = null;
</script>

<div>
  <p>Selected {selected ? selected.name : 'nothing'}</p>
  <ul>
    {#each items as item (item.id)}
      <li>
        <button on:click={() => (selected = item)}>{item.name}</button>
      </li>
    {/each}
  </ul>
</div>
```

```tsx
import { createSignal } from "solid-js";

const [selected, setSelected] = createSignal(null);

const Component = (props) => {
  return (
    <div>
      <p>Selected {selected() ? selected().name : "nothing"}</p>
      <ul>
        {props.items.map((item) => (
          <li>
            <button onClick={() => setSelected(item)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```
````

---
transition: slide-up
level: 2
---

# 書き手が過度に最適化について考える必要がない

さらに速い方法がわかるかね？こうしないことだ

Svelte の作者 Rich Harris 大先生の言葉を借りると

> デフォルトで不必要な作業を行うことは危険で、たとえその作業が些細なものであっても、最適化の際に明確なボトルネックがないためにアプリがやがて**じわじわと破滅に向かう**（death by a thousand cuts）ことに屈してしまう
>
> Svelte は、そのような状況に陥らないよう明示的に設計されているのだ

<br />

> 重要なのは、VDOM は**機能ではない**ということだ
> <br /><br />
> VDOM は目的を達成するための手段であり、その目的とは宣言的で状態駆動型の UI 開発だ
> <br /><br />
> VDOM は状態遷移を考えることなくアプリケーションを開発できるようにし、**一般的には十分な**パフォーマンスを得られるという点で価値がある。バグを減らし、退屈な作業ではなく創造的な作業に多くの時間を費やすことができるようになる
> <br /><br />
> しかし、万一 VDOM を使用せずに同様のプログラミングモデルを実現できることがわかったらどうだろうか？
> <br /><br />
> Svelte の登場である

---
layout: statement
transition: fade-left
level: 2
---

# 続いては
