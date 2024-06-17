---
background: https://cover.sli.dev
title: What's the Aim of the Current JavaScript Ecosystem? An Overview of Its Developments ~ The Evolution Leading to the Emergence of Qwik in Frontend Development ~
class: text-center
highlighter: shiki
transition: slide-left
mdc: true
---

# What's the Aim of the Current JavaScript Ecosystem?

The Evolution Leading to the Emergence of Qwik in Frontend Development

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/taichi221228" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
transition: fade-out
layout: center
---

# はじめに

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
transition: slide-left
level: 2
layout: center
---

# 本登壇ではこれらの技術については触れません

---
transition: slide-up
level: 2
---

# はじめに

本登壇ではこれらの技術については触れません

## WASM Ecosystem

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
transition: slide-up
level: 2
---

# はじめに

本登壇ではこれらの技術については触れません

## JavaScript Runtime

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
transition: slide-up
level: 2
---

# はじめに

本登壇ではこれらの技術については触れません

## JavaScript Engine

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
transition: slide-up
level: 2
---

# はじめに

本登壇ではこれらの技術については触れません

## CSS Ecosystem

<br/>

- <img src="/styling/emotion.png" alt="Emotion" /> Emotion
- <img src="/styling/vanilla-extract.svg" alt="Vanilla Extract" /> Vanilla Extract
- <img src="/styling/tailwind-css.svg" alt="Tailwind CSS" /> Tailwind CSS
- <img src="/styling/unocss.svg" alt="UnoCSS" /> UnoCSS
- <img src="/styling/panda-css.svg" alt="Panda CSS" /> Panda CSS
- <img src="/styling/stylex.svg" alt="StyleX" /> StyleX
- <img src="/styling/css-hooks.svg" alt="CSS Hooks" /> CSS Hooks
- <img src="/styling/macaron-css.svg" alt="Macaron CSS" /> Macaron CSS

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
