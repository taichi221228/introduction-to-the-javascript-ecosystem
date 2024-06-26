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

# JavaScript ややこしいですよね

---
layout: two-cols
class: mx-4
transition: slide-up
level: 2
---

# 速すぎる代謝

進化が速すぎて追い付けない

- 速い理由はいくつかあるが、大きなものに**需要過多**が挙げられる
- このグラフはクライアント JS のバイトとリクエストサイズの推移
- 年々増加の一途を辿っており、ブラウザが要求する JavaScript のサイズが大きくなり続けていることが分かる
- つまりこれは Web へのインタラクティブの需要が増しているということ。年々 Web フロントエンドに求められるハードルが上がっている
- 供給（進化）が間に合っておらず、次から次へと課題が発生している状態

::right::

![Timeseries JavaScript Bytes](/timeseries/bytes.png)
![Timeseries JavaScript Requests](/timeseries/requests.png)

---
transition: slide-left
level: 2
---

# JavaScript の進化は段階的

JavaScript エコシステムは急速に進化しているが、実はその進化は段階的

- 都度課題に見舞われ、都度それを解決しているに過ぎず、進化の手法は一般の技術と全く変わらない。
- 一般的に JavaScript エコシステムがややこしいとされるのは、進化の軌跡を正しく追えていない事による前提知識の欠如

ということで今回は{.text-primary.text-2xl}

**今から約 11 年前の2013 年の 5 月に US で産声をあげ、同年 9 月の EU にて引き起こされた Web フロントエンド最大のパラダイムシフト**{.text-primary.text-2xl}

から、{.text-primary.text-2xl}

**現時点で可能なあらゆる最適化機構を取り入れ、文字通り最強となったモダンフロントエンドの到達点 Qwik の登場**{.text-primary.text-2xl}

までを軽く解説します{.text-primary.text-2xl}
