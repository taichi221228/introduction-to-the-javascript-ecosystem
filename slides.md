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

- <img src="/webassembly.svg" alt="WebAssembly" /> WebAssembly
- <img src="/wax.svg" alt="WAX" /> WAX
- <img src="/wasmer.svg" alt="Wasmer" /> Wasmer
- <img src="/wasix.svg" alt="WASIX" /> WASIX
- <img src="/onyx.svg" alt="Onyx" /> Onyx

<br/>
<br/>

etc

<style>
  li {
    position: relative; 
    padding-left: 40px;
  }

  img {
    position: absolute;
    left: 0;
    width: 30px;
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

- <img src="/node.js.svg" alt="Node.js" /> Node.js
- <img src="/deno.svg" alt="Deno" /> Deno
- <img src="/bun.svg" alt="Bun" /> Bun
- <img src="/llrt.svg" alt="LLRT" /> LLRT
- <img src="/winterjs.png" alt="WinterJS" /> WinterJS
- <img src="/wintercg.svg" alt="WinterCG" /> WinterCG

<br/>
<br/>

etc

<style>
  li {
    position: relative; 
    padding-left: 40px;
  }

  img {
    position: absolute;
    left: 0;
    width: 30px;
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

- <img src="/v8.svg" alt="V8" /> V8
- <img src="/spidermonkey.svg" alt="Spider Monkey" />Spider Monkey
- <img src="/javascriptcore.svg" alt="JavaScriptCore" /> JavaScriptCore
- <img src="/kiesel.svg" alt="Kiesel" /> Kiesel
- <img src="/boa.svg" alt="Boa" /> Boa

<br/>
<br/>

etc

<style>
  li {
    position: relative; 
    padding-left: 40px;
  }

  img {
    position: absolute;
    left: 0;
    width: 30px;
  }
</style>
