---
sidebar_position: 4
---
# 括弧を追加しよう

## 構文解析
括弧を処理する構文解析は、実に鮮やかに書くことが出来ます。掛け算の時のように、括弧で囲まれた式がいかなる場所で表れるかを考えてみましょう。

括弧を含む式の例
```javascript
(1+2)+3
(1+2)*3
1+(2*3)+4
5+(6)+7
(3+5)
```
()で囲まれた式は、+や\*の左右の式に含まれることがわかります。そして、括弧内には、任意の式を書くことが出来ますね。

これを実装にすると、以下のようになります。
<details>
<summary>example</summary>

```javascript
Factor = "(" e: Expression ")" {
    return e
} / num: Integer {
    return {tag: "Number", value: num}
}
```
</details>

とてもシンプルですね！

## 評価
今回はASTに新たなtagを追加していないので、eval関数は全く変える必要がありません。

## まとめ
括弧を含む四則演算を構文解析し、評価する言語処理系を書くことが出来ました。しかし、これだけではあまりプログラミング言語という感じはしませんね。そこで、次は一般的なプログラミング言語によくある、変数やif、関数を追加していきましょう。
