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
---

# はじめに

<v-click>

本登壇では下記については触れません。

</v-click>

<v-click>

## WASM Ecosystem

</v-click>

<div class="grid grid-cols-10 gap-4 items-center">
<v-click><img src="/webassembly.svg" alt="WebAssembly" /></v-click>
<v-click><img src="/wax.svg" alt="WAX" /></v-click>
<v-click><img src="/wasmer.svg" alt="Wasmer" /></v-click>
<v-click><img src="/wasix.svg" alt="WASIX" /></v-click>
<v-click><img src="/onyx.svg" alt="Onyx" /></v-click>
</div>

<v-click>

## JavaScript Runtime

</v-click>

<div class="grid grid-cols-10 gap-4 items-center">
<v-click><img src="/node.js.svg" alt="Node.js" /></v-click>
<v-click><img src="/deno.svg" alt="Deno" /></v-click>
<v-click><img src="/bun.svg" alt="Bun" /></v-click>
<v-click><img src="/llrt.svg" alt="LLRT" /></v-click>
<v-click><img src="/winterjs.png" alt="WinterJS" /></v-click>
<v-click><img src="/wintercg.svg" alt="WinterCG" /></v-click>
</div>

<v-click>

## JavaScript Engine

</v-click>

<div class="grid grid-cols-10 gap-4 items-center">
<v-click><img src="/v8.svg" alt="V8" /></v-click>
<v-click><img src="/spidermonkey.svg" alt="Spider Monkey" /></v-click>
<v-click><img src="/javascriptcore.svg" alt="JavaScriptCore" /></v-click>
<v-click><img src="/kiesel.svg" alt="Kiesel" /></v-click>
<v-click><img src="/boa.svg" alt="Boa" /></v-click>
</div>

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
