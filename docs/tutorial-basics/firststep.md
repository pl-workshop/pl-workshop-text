---
sidebar_position: 1
---

# はじめの一歩
まずは、数字のみをパースし、評価する言語処理系を見ながら、ツールの使い方を学びましょう。

**以下リロードをすると書いたプログラムが消えてしまいます。気をつけて下さい。**

## 構文解析
今回は、構文解析に**PEG.js**というライブラリを用います。PEG([Parsing Expression Grammer](https://ja.wikipedia.org/wiki/Parsing_Expression_Grammar))によって定義された文法からパーサーを作るライブラリです。[playground](https://pl-workshop.github.io/pl-workshop/)を開くと、文法定義部に、次のようなコードが書かれています。
```javascript
start = Expression
Expression = Factor
Factor = num: Integer {
    return {tag: "Number", value: num}
}
```
まず、startと書いてある場所から文法定義が始まっています。今回の場合は、Expressionがトップの定義となっています。そして、Expressionは、Factorであると定義されています。

そして、Factorの定義には、`num: Integer`という表記があります。これは、「FactorとはIntegerであり、Integerの結果はnumに代入される」ということを表しています。Integerは、数字が一個以上並んでいる部分にマッチして、その数字を返すように予め定義されている文法です。
<details>
<summary>Integerの定義</summary>

```javascript
Integer = _ [0-9]+ { 
    return parseInt(text(), 10); 
}
```
_は0個以上の空白、改行を消費する文法で、次のような定義になっています。
```javascript
_ = [ \\t\\n\\r]*
```
</details>
そして、その後の中括弧で囲まれた部分には、JavaScriptのコードを書くことができ、Factorがどのような値を返すかを定義することが出来ます。中括弧内では、先程Integerの結果が代入されたnumを使うことが出来ます。

return文で返した値が結果となります。今回は、`{tag: "Number", value: num}`を返しています。このように、ASTをJavaScriptのオブジェクトを使って表現していきます。

それでは、実際に構文解析してみましょう。入力に、好きな正の数字を入れてください。そして、**Parse!**ボタンを押してみましょう。

すると、右側にあるAST Viewerに、ASTを図示した結果が表示されます。Rootは木の根元を表しています。その下のNumberは、`{tag: "Number", value: num}`のtagが表示されたものです。そして、valueの下に、入力した数字が表示されているはずです。

## 評価
評価部に書いてあるコードを見てみましょう。
```javascript
const eval = (ast) => {
    switch (ast.tag) {
        case "Number": return ast.value
    }
}
```
astを受け取るeval関数が定義されています。eval関数の中では、`ast.tag`の値によってswitchされています。今回は、`"Number"`の分岐先では、`ast.value`を返しています。

このeval関数が、評価時のエントリーポイントになるようにこのツールは作られています。

それでは、**Eval!**ボタンを押してみましょう。評価結果に、入力した数字が表示されているはずです。
