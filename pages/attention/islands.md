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

<div class='grid mx-4'>
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

ページ全体を海と捉え、特定の動的なコンテンツのみ島のように Hydration するイメージから来ている

その他あらゆる**海**は完全に静的な HTML であるため、SSR の全体レンダリングを待つこともなければ、少ないインタラクティブのために大規模なランタイムを用意する必要もない

::right::

![](/islands/islands-architecture.png)
