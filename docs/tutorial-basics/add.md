---
sidebar_position: 2
---

# 足し算を追加しよう

## 構文解析
次は、足し算を追加します。足し算の文法としては、一般的な1+2+3のような中置記法にしましょう。(ポーランド記法が良い人は頑張ってください。)

さらに、1+2+3は(1+2)+3のように計算される、つまり+は左結合の演算子ということにします。それでは、まず、文法定義を考えてみる前に、PEG.jsの文法定義方法の詳細を見ていきましょう。

`""`で囲まれた文字列は、その文字列自身にマッチします。
```javascript
plus = "+" // plusは+にマッチする文法
```
空白によって区切られた文法列は、その文法列の左からマッチしていくことを表しています。
```javascript
Integer "+" Integer // 数字+数字 の並び(e.g. 1+1)にマッチする文法
```
最後に、任意の文法の末尾に\*を付けると、その文法が0回以上繰り返されることを意味しています。
```javascript
"+"* // 0個以上の+の並び(e.g. ++++)にマッチする文法
("+" Integer)* // +数字 の組み合わせが0個以上繰り返された並び(e.g. +1+2+3)にマッチする文法(()で文法をグループ化出来ることに注意してください)
```

それでは、足し算の文法定義を考えて見ましょう。(下に答えを書くので、考えたい人は気をつけて下さい)
<br />
<br />
<br />
<br />
<br />

`Expression = Factor ("+" Factor)*`とすることで、Expressionは足し算にマッチする文法となります。次に、Expressionの戻り値を定義しましょう。まず、`Factor`と`("+" Factor)*`の結果を取り出します。("+" Factor)\*の戻り値は、0番目の要素に"+", 1番目の要素にFactorの戻り値が入った配列、の配列です。(e.g. +1+2であれば`[["+", {tag: "Number", value: 1}], ["+", {tag: "Number", value: 2}]]`)
```javascript
Expression = e1: Factor e2: ("+" Factor)*
```
次に、中括弧内部を書いていきます。足し算のASTのtagは、"Add"にしましょう。e1の値を、e2をfor文で回しながら変えていくのが良いでしょう。(reduceを使って書くのも良いです)

以下一例
```javascript
Expression = e1: Factor e2: ("+" Factor)* {
    let result = e1
    for (const e of e2) {
        result = {tag: "Add", lh: result, rh: e[1]}
    }
    return result
}
```

このプログラムが何をしているのか分かりにくければ、次のようにconsole.logを挿入し、f12を押して開発者ツールを起動して、コンソールでeに何が入っているのか見てみましょう。
```javascript
Expression = e1: Factor e2: ("+" Factor)* {
    let result = e1
    for (const e of e2) {
        // highlight-next-line
        console.log(e)
        result = {tag: "Add", lh: result, rh: e[1]}
    }
    return result
}
```
このように、分からない箇所があったら、console.logを使って変数の中に何が入っているのか確認してみましょう。

それでは、実際に数式を入力に入れて試して見ましょう。期待した結果は出ましたか？ここで、例えば1+2+3の場合、1+2の部分木が木のより深い位置にあることに注意してください。

## 評価
足し算の評価規則は、[はじめに](../intro.md)の[評価](../intro.md#評価)で確認しました。その評価規則を実際にeval関数に書き下していきましょう。

まず+の左側を評価します。
```javascript
eval(ast.lh)
```
次に+の右側を評価します。
```javascript
eval(ast.rh)
```
最後に、左側を評価した値と右側を評価した値を足した値を返します。
```javascript
const eval = (ast) => {
    switch (ast.tag) {
            ︙
        case "Add": return eval(ast.lh) + eval(ast.rh)
    }
}
```
それでは、実際に**Eval!**ボタンを押して確かめてみましょう。期待通りの結果になりましたか？
