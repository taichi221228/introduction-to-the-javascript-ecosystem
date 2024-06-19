---
layout: section
transition: slide-up
level: 2
---

# 本題

---
layout: statement
transition: slide-up
level: 2
---

<section class="grid gap-20">

# みなさん JS にどのようなイメージを持ちますか？

<v-clicks>

十中八九の方が

# **ややこしい**ではないでしょうか？

</v-clicks>

</section>

---
layout: statement
transition: slide-up
level: 2
---

<section class="grid gap-20">

<v-clicks>

# ではなぜこんなにもややこしいのか？

それは

# **エコシステムの代謝が速すぎるから**

</v-clicks>

</section>

---
layout: two-cols
class: mx-4
transition: slide-up
level: 2
---

# 代謝が速い理由

巨大化する JavaScript

速い理由はいくつかあるが、大きなものに**需要過多**が挙げられる

このグラフはクライアント JS のバイトとリクエストサイズの推移

年々増加の一途を辿っており、ブラウザが要求する JavaScript のサイズが大きくなり続けていることが分かる

つまりこれは Web へのインタラクティブの需要が増していることを意味し、年々 Web フロントエンドに求められるハードルが上がっている

供給（進化）が間に合っておらず、次から次へと課題が発生している状態

::right::

![Timeseries JavaScript Bytes](/timeseries/bytes.png)
![Timeseries JavaScript Requests](/timeseries/requests.png)

---
layout: statement
transition: slide-left
level: 2
---

# JavaScript の進化は段階的

JavaScript エコシステムは急速に進化しているが、実はその進化は段階的

都度課題に見舞われ、都度それを解決しているに過ぎず、進化の手法は一般の技術と全く変わらない

ただ階段を登る速度が速いだけで、突然変異のように爆発的に進化したことも、性質を変えたこともない

一般に JavaScript エコシステムがややこしいとされるのは、進化の軌跡を正しく追えていない事による前提知識の欠如にある

<br />

<div class="text-xl">

ということで今回は、今から約 11 年前、2013 年の 5 月に US で産声をあげ、同年 9 月の EU にて引き起こされた **Web フロントエンドのパラダイムシフト**から、現時点で可能なあらゆる最適化機構を取り入れ、文字通り最強となった**モダンフロントエンドの到達点 Qwik の登場**までを軽くおさらいする

</div>
