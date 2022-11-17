---
sidebar_position: 1
---
# 変数を追加しよう
変数定義と変数の使用が出来るようにしましょう。
## 構文解析
### 変数定義の構文解析
変数定義の文法を考えましょう。今回は次のような文法とします。
```
let (変数名)=(代入する式);
```
ここで、小文字の英字の1個以上の並びにマッチするプリミティブな文法のIdentを紹介します。
```
Ident = _ [a-z]+ { return text() }
```
次に、これをPEG.jsのコードに落とし込んでいきましょう。
どのようなASTを構築するかによって書き方が変化するのですが、今回は
```
let a=1;
let b=2;
a+b
```
のように、変数定義が複数あってから、式が来るようなプログラムが実行できるようにします。
<details>
<summary>example</summary>

```javascript
start = Assign
Assign = "let " ident: Ident "=" e1: Expression ";" _ e2: Assign {
    return {tag: "Assign", ident: ident, assign_expr: e1, value: e2}
} / Expression
```
</details>

### 変数の使用の構文解析
これは簡単ですね。Factorの末尾に追記しましょう。
```javascript
Factor = ･･･
} / ident: Ident {
    return {tag: "Variable", name: ident}
}
```

## 評価
変数を使ったプログラムを評価するには、変数の値を覚えておく必要があります。そのため、グローバル変数として環境をあらわすenvを用意します。
```javascript
let env = {} // envは変数名と値の辞書とする
let eval = ･･･
```
さて、ast.tagが"Assign"の時にやるべきことは何でしょうか？評価規則を考えてみましょう。
```
let (変数名)=(代入する式); (後続の式)
```
まず、代入する式を評価します。そして、envに、(変数名)のときの値を登録します。その後、後続の式を評価します。
JavaScriptでの辞書への追加方法は以下の通りです。
```javascript
env["a"] = 1
```
それでは、ast.tagが"Assign"のときの分岐を書いてみましょう。

<details>
<summary>example</summary>

```javascript
case "Assign":
    env[ast.ident] = eval(ast.assign_expr)
    return eval(ast.value)
```
</details>
評価規則がそのままコードになっていることがわかりますね。

次に、変数を使用するための評価規則を追加します。ast.tagが"Variable"のastに出会ったときに、envからその変数の値を取り出します。
<details>
<summary>変数の使用</summary>

```javascript
case "Variable":
    return env[ast.name]
```
</details>

これで、変数を使ったプログラムが実行できるようになりました。実際に試してみましょう！
