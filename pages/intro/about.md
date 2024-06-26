---
layout: section
transition: slide-up
level: 2
---

# 本スライドについて

---
layout: intro
transition: slide-up
level: 2
---

<div class="grid grid-cols-2 gap-20">

<div class="flex flex-col justify-center">

# Anthony Fu

本スライドはパリに在住する Vue.js エコシステムの権威、敬愛する Ant Fu 氏による Slidev によって作成され、また付随するその大多数も Vue.js 及び UnJS エコシステムのテクノロジーによって支えられています

</div>

<img class="rounded-full border-4 border-color-[var(--slidev-theme-primary)]" src="https://avatars.githubusercontent.com/u/11247099?v=4" alt="Anthony Fu" />

</div>

---
transition: slide-up
level: 2
---

# 彼が携わったもの

### ほんの一例ですが、これらは全て鉄人 Ant Fu による多大なる努力によって成り立っています

<br/>

<LogoGrid :items="[
    { name: 'Vue.js', path: '/antfu/vue.js.svg' },
    { name: 'VueUse', path: '/antfu/vueuse.svg' },
    { name: 'Nuxt', path: '/antfu/nuxt.svg' },
    { name: 'Intlify', path: '/antfu/intlify.svg' },
    { name: 'UnJS', path: '/antfu/unjs.svg' },
    { name: 'unplugin', path: '/antfu/unplugin.svg' },
    { name: 'nitro', path: '/antfu/nitro.svg' },
    { name: 'Windi CSS', path: '/antfu/windi-css.svg' },
    { name: 'UnoCSS', path: '/antfu/unocss.svg' },
    { name: 'ESLint Stylistic', path: '/antfu/eslint-stylistic.svg' },
    { name: 'Slidev', path: '/antfu/slidev.svg' },
    { name: 'Shiki', path: '/antfu/shiki.svg' },
    { name: 'Twoslash', path: '/antfu/twoslash.svg' },
    { name: 'Vite', path: '/antfu/vite.svg' },
    { name: 'Vitest', path: '/antfu/vitest.svg' },
    { name: 'Vite PWA', path: '/antfu/vite-pwa.svg' },
    { name: 'Vitesse', path: '/antfu/vitesse.svg' },
    { name: 'Type Challenges', path: '/antfu/type-challenges.png' },
    { name: 'Elk', path: '/antfu/elk.svg' },
    { name: '文言', path: '/antfu/wenyan.png' },
  ]" />

---
transition: slide-left
level: 2
---

# Slidev について

本スライドのコードは*生きて*います

また、本スライドには同氏が開発した Shiki および Twoslash による完全自己完結型 TS コンパイラとそれに付随するランタイムが内蔵されています。

ゆえに本スライドのコードブロックは全て**生きています**{.text-primary}

なので、よければミラーリングではなく手元で同期されたスライドを使用してください

```ts twoslash
function* fibonacci(): Generator<number> {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

for (let i = 0; i < 10; i++) console.log(fibGen.next().value);
```
