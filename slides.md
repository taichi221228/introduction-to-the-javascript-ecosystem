---
theme: unicorn
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
layout: center
title: What's the Aim of the Current JavaScript Ecosystem? An Overview of Its Developments ~ The Evolution Leading to the Emergence of Qwik in Frontend Development ~
highlighter: shiki
transition: slide-left
mdc: true
---

# What's the Aim of the Current JavaScript Ecosystem?

The Evolution Leading to the Emergence of Qwik in Frontend Development

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: fade-out
layout: center
---

# はじめに

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-left
level: 2
layout: center
---

# 本登壇ではこれらの技術については触れません

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-up
level: 2
---

# WASM Ecosystem

本登壇では WebAssembly に付随する技術については触れません

<br />

- <img src="/wasm/webassembly.svg" alt="WebAssembly" /> WebAssembly
- <img src="/wasm/wax.svg" alt="WAX" /> WAX
- <img src="/wasm/wasmer.svg" alt="Wasmer" /> Wasmer
- <img src="/wasm/wasix.svg" alt="WASIX" /> WASIX
- <img src="/wasm/onyx.svg" alt="Onyx" /> Onyx

<br/>

etc

<style>
  ul {
    --icon-size: 25px;
  }

  li {
    position: relative; 
    padding-left: calc(var(--icon-size) + 10px);
  }

  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: var(--icon-size);
    translate: 0 -50%;
  }
</style>

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-up
level: 2
---

# JavaScript Runtime

本登壇では JavaScript 実行環境については触れません

<br/>

- <img src="/runtime/node.js.svg" alt="Node.js" /> Node.js
- <img src="/runtime/deno.svg" alt="Deno" /> Deno
- <img src="/runtime/bun.svg" alt="Bun" /> Bun
- <img src="/runtime/llrt.svg" alt="LLRT" /> LLRT
- <img src="/runtime/winterjs.png" alt="WinterJS" /> WinterJS
- <img src="/runtime/wintercg.svg" alt="WinterCG" /> WinterCG

<br/>

etc

<style>
  ul {
    --icon-size: 25px;
  }

  li {
    position: relative; 
    padding-left: calc(var(--icon-size) + 10px);
  }

  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: var(--icon-size);
    translate: 0 -50%;
  }
</style>

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-up
level: 2
---

# JavaScript Engine

本登壇では JavaScript エンジンについては触れません

<br/>

- <img src="/engine/v8.svg" alt="V8" /> V8
- <img src="/engine/spidermonkey.svg" alt="Spider Monkey" /> Spider Monkey
- <img src="/engine/javascriptcore.svg" alt="JavaScriptCore" /> JavaScriptCore
- <img src="/engine/hermes.svg" alt="Hermes" /> Hermes
- <img src="/engine/kiesel.svg" alt="Kiesel" /> Kiesel
- <img src="/engine/boa.svg" alt="Boa" /> Boa

<br/>

etc

<style>
  ul {
    --icon-size: 25px;
  }

  li {
    position: relative; 
    padding-left: calc(var(--icon-size) + 10px);
  }

  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: var(--icon-size);
    translate: 0 -50%;
  }
</style>

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-left
level: 2
---

# CSS Ecosystem

本登壇では JavaScript におけるスタイリング手法については触れません

<br />

- <img src="/styling/emotion.png" alt="Emotion" /> Emotion
- <img src="/styling/vanilla-extract.svg" alt="Vanilla Extract" /> Vanilla Extract
- <img src="/styling/tailwind-css.svg" alt="Tailwind CSS" /> Tailwind CSS
- <img src="/styling/unocss.svg" alt="UnoCSS" /> UnoCSS
- <img src="/styling/panda-css.svg" alt="Panda CSS" /> Panda CSS
- <img src="/styling/stylex.svg" alt="StyleX" /> StyleX
- <img src="/styling/macaron-css.svg" alt="Macaron CSS" /> Macaron CSS

<br/>

etc

<style>
  ul {
    --icon-size: 25px;
  }

  li {
    position: relative; 
    padding-left: calc(var(--icon-size) + 10px);
  }

  img {
    position: absolute;
    top: 50%;
    left: 0;
    width: var(--icon-size);
    translate: 0 -50%;
  }
</style>

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-left
level: 2
layout: center
---

# 本スライド は Slidev で作成されました

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-up
level: 2
layout: intro
introImage: "https://avatars.githubusercontent.com/u/11247099?v=4"
---

# Anthony Fu

本スライドはパリに在住する Vue.js エコシステムの権威 Ant Fu 大先生による Slidev によって作成されました。また付随するその大多数も Vue.js 及び UnJS エコシステムのテクノロジーによって支えられています。

---
logoHeader: "https://www.dawntraoz.com/images/logo.svg"
website: "Taichi Fukuda"
handle: "taichi221228"
transition: slide-up
level: 2
---

# 彼が携わったもの

これらは全て鉄人 Ant Fu による多大な努力によって成り立っています

<br/>

<ul class="grid grid-cols-7 items-center gap-y-4">
<li><img src="/antfu/vue.js.svg" alt="Vue.js" /></li>
<li><img src="/antfu/vueuse.svg" alt="VueUse" /></li>
<li><img src="/antfu/nuxt.svg" alt="Nuxt" /></li>
<li><img src="/antfu/intlify.svg" alt="Intlify" /></li>
<li><img src="/antfu/unjs.svg" alt="UnJS" /></li>
<li><img src="/antfu/unplugin.svg" alt="unplugin" /></li>
<li><img src="/antfu/nitro.svg" alt="nitro" /></li>
<li><img src="/antfu/windi-css.svg" alt="Windi CSS" /></li>
<li><img src="/antfu/unocss.svg" alt="UnoCSS" /></li>
<li><img src="/antfu/eslint-stylistic.svg" alt="ESLint Stylistic" /></li>
<li><img src="/antfu/slidev.svg" alt="Slidev" /></li>
<li><img src="/antfu/shiki.svg" alt="Shiki" /></li>
<li><img src="/antfu/twoslash.svg" alt="Twoslash" /></li>
<li><img src="/antfu/vite.svg" alt="Vite" /></li>
<li><img src="/antfu/vitest.svg" alt="Vitest" /></li>
<li><img src="/antfu/vite-pwa.svg" alt="Vite PWA" /></li>
<li><img src="/antfu/vitesse.svg" alt="Vitesse" /></li>
<li><img src="/antfu/type-challenges.png" alt="Type Challenges" /></li>
<li><img src="/antfu/elk.svg" alt="Elk" /></li>
<li><img src="/antfu/wenyan.png" alt="文言" /></li>
</ul>

<style>
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    width: 60px;
    margin-inline: auto;
  }
</style>

---

# Slidev について

---

# Why did `X` dominate?

---

# VDOM の発明

Why did React/Vue.js dominate?

---

# 0 Config と SSR

Why did Next.js/Nuxt dominate?

---

# 混沌への対抗

Why did Webpack dominate?

<!--
モジュールシステム・タスクランナーについて
-->

---

# No bundling

Why did Vite dominate?

---

# Why is `X` gaining attention?

---

# コンパイル時最適化

Why is Svelte gaining attention?

---

# Absolute Zero & Island Architecture

Why is Astro gaining attention?

---

# Edge first & True portability

Why is Hono gaining attention?

---

# Zero Hydration Resumability

Why is Qwik gaining attention?

---

# プロダクションサイドで採用できうるものは何か？

---

# と、その前に

---

# React や Vue.js は終わったのか？

---

# 決してそんなことはない

---

# Svelte

---

# Astro
