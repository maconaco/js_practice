"use strict";
// # コメント
// - 一行コメント
//   この部分はコードとして評価されない

/*
  - 複数行コメント
    囲まれている範囲がコードして評価されない
    複数行コメントのなかに複数行コメントは書けない
*/

// HTML-likeコメント(後方互換性のために存在)
/*
<-- この行はコメントと認識される
console.log("この行はJavaScriptのコードとして実行される");
--> この行もコメントとして認識される
*/

// # 変数と宣言
// 変数
// 変数同士を","で区切ると同時に複数の変数を定義できる
/*
- const:  再代入できない変数の宣言と参照する値(初期値)の定義ができる
          const 変数名 = 初期値;
*/

/*
const bookTitle = "JavaScript Primer",
const bookCategory = "プログラミング";
と同じ
 */

// bookTitleという変数は、初期値が"JavaScript Primer"という文字列であると定義
const bookTitle = "JavaScript Primer",
      bookCategory = "プログラミング";
/*
後から値を代入することはできない
bookTitle = "新しいタイトル"; TypeError: invalid assignment to const 'bookTitle'
エラーが発生するとそれ以降の処理はされなくなる

一般的に変数への再代入は「変数の値は最初に定義した値と常に同じである」という
参照透過性と呼ばれるルールを壊すため、バグを発生させやすい要因として知られている。
そのため、変数に対して値を再代入する必要がない場合は
constキーワードで変数宣言することを推奨
*/

/*
- let:  値の再代入ができる変数の宣言と参照する値(初期値)の定義ができる
        let 変数名 = 初期値;
*/

// mainTitleという変数は、初期値が"JavaScript Primer"という文字列であると定義
let mainTitle = "JavaScript Primer";

// letは初期値を設定しない変数の定義もできる
// bookは自動的に`undefined`という値になる
let book;

// 代入演算子(=)を使うことで値を代入できる
book = "JavaScript primer";

// letで宣言した変数に対しては何度でも値の代入が可能
let count = 0;
count = 1;
count = 2;
count = 3;

/*
- var:  同じ名前の変数を再定義できる
        値の再代入ができる変数の宣言と参照する値(初期値)の定義ができる
        初期値を設定しない変数の定義もできる
        var 変数名 = 初期値;
*/

var bookCover;
bookCover = "JavaScript Primer";
bookCover = "新しいタイトル";

// xという変数を定義する
var x = 1;
// 同じ変数名の変数xを定義できる
var x = 2;
// 変数xは2になる => 意図せずに同じ変数名で定義してもエラーとならずに、値を上書きしてしまう

/*
変数名の識別子のルール
1. 半角のアルファベット、_（アンダースコア）、$（ダラー）、数字を組み合わせた名前
2. 変数名は数字から開始できない
3. 予約語と被る名前は利用できない
*/

var $; // OK: $が利用できる
var _title; // OK: _が利用できる
var jquery; // OK: 小文字のアルファベットが利用できる
var TITLE; // OK: 大文字のアルファベットが利用できる
var es2015; // OK: 数字は先頭以外なら利用できる
var 日本語の変数名; // OK: 一部の漢字や日本語も利用できる(非推奨)

/*
- NG例
  - 数字から始まっている
    var 1st; error: An identifier or keyword cannot immediately follow a numeric literal.ts(1351)
  - 数字のみで構成されている
    var 123; error: Variable declaration expected.ts(1134)
  - `var`は変数宣言のために予約されているので利用できない
    var var; error: Variable declaration expected.ts(1134)
  - `if`はif文のために予約されているので利用できない
    var if; error: Variable declaration expected.ts(1134)
*/

/*
constは「再代入できない変数」を定義する変数宣言であり、必ずしも定数を定義するわけではない。
定数とは、一度定義した名前（変数名）が常に同じ値を示すもの。

変数を宣言する場合には、まずconstで定義できないかを検討し
できない場合はletを使うことを推奨
*/
