1;
// # 値の評価と表示
/*
  JavaScriptの多くの実行環境では、Console APIを使ってコンソールに表示
  console.log(引数)の引数にコンソール表示したい値を渡すことで
  評価結果がコンソールに表示される
*/
console.log(1); // => 1
console.log(1 + 1); // => 2

const total = 42 + 42;
console.log(total); // => 84

/*
エラーには多く分けて構文エラーと実行時エラーの2種類

- 構文エラー
  書かれたコードの文法が間違っている場合に発生するエラー¥

  関数呼び出しに)をつけ忘れているため構文エラーが発生
  console.log(1; SyntaxError: missing ) after argument list
  エラーの種類,内容の説明,ファイル名,行番号,列番号

  constをcosntとタイプミスしているため構文エラーが発生
  cosnt a = 1; SyntaxError: unexpected token: identifier

- 実行時エラー
  実行時エラーはプログラムを実行している最中に発生するエラー
  実行時（ランタイム）におきるエラーであるため、ランタイムエラーと呼ばれることも

  APIに渡す値の問題から起きるTypeErrorや
  存在しない変数を参照しようとして起きるReferenceErrorなど
  さまざまな種類がある

  xという存在しない変数を参照したため、ReferenceErrorという実行時エラーが発生
  const value = "値";
  console.log(x); // => ReferenceError: x is not defined

  xという変数や関数が存在するかは、実行してみないとわからない
  そのため、実行してxという識別子を参照したときに
  初めてxが存在するかが判明し、xが存在しない場合はReferenceErrorとなる。
*/

// # データ型

/*
データ型を大きく分けると
プリミティブ型とオブジェクトの2つになる
- プリミティブ型
  真偽値や数値などの基本的な値の型のこと
  プリミティブ型の値は、一度作成したら
  その値自体を変更できないというイミュータブル（immutable）の特性を持ちます

  example: Boolean, Number, String, undefined, null, Symbol

- オブジェクト
  複数のプリミティブ型の値またはオブジェクトからなる集合
  オブジェクトは、一度作成した後もその値自体を変更できるため
  ミュータブル（mutable）の特性を持つ
  オブジェクトは、値そのものではなく値への参照を経由して操作されるため
  参照型のデータともいう

  example: オブジェクト、配列、関数、正規表現、Dateなど

  typeof演算子を使うことで、次のようにデータ型を調べることができる
  (typeof演算子は、プリミティブ型またはオブジェクトかを判別するもの
  オブジェクトの詳細な種類を判定できない)

  typeof nullが"object"となるのは、歴史的経緯のある仕様のバグ
*/

/*
- リテラル
  プログラム上で数値や文字列など
  データ型の値を直接記述できるように構文として定義されたもの
*/

// "と"で囲んだ範囲が文字列リテラル
const str = "こんにちは";

// Boolean: trueとfalseのリテラル
true; // => true
false; // => false

// Number: 整数リテラルと浮動小数点数リテラル

// 整数リテラル: 10進数, 2進数, 8進数, 16進数

// 0から9の数字のみで書かれた数値は、10進数
console.log(1); // => 1
console.log(10); // => 10
console.log(255); // => 255

// 0bからはじまる2進数リテラルは、ビットを表現するのに利用されている
// bは2進数を表すbinaryを意味する
console.log(0b1111); // => 15
console.log(0b10000000000); // => 1024

// 0oからはじまる8進数リテラルは、ファイルのパーミッションを表現する
// oは8進数を表すoctalを意味する
console.log(0o644);  // => 420
console.log(0o777);  // => 511

// 0xからはじまる16進数リテラルは、文字のコードポイントやRGB値の表現などに利用される
// xは16進数を表すhexを意味する
console.log(0xFF); // => 255
// 小文字で書いても意味は同じ
console.log(0xff); // => 255
console.log(0x30A2); // => 12450

// 浮動小数点数リテラル
/* example
    3.14159 のような .（ドット）を含んだ数値
    2e8 のような e または E を含んだ数値
*/

// 0からはじまる浮動小数点数は、0を省略できる
// (.をオブジェクトにおいて利用する機会が多いため
//  0からはじまる場合でも省略せずに書いたほうが意図しない挙動を減らせる)

.123; // => 0.123

// eは指数（exponent）を意味する記号で、eのあとには指数部の値を書く
2e8; // => 200000000

// String
// 文字列リテラル共通のルールとして、同じ記号で囲んだ内容を文字列として扱う

console.log("文字列"); // => "文字列"
console.log('文字列'); // => "文字列"
console.log(`文字列`); // => "文字列"

// エスケープ使用
'8 o\'clock'; // => "8 o'clock"
// エスケープ未使用
"8 o'clock"; // => "8 o'clock"
// 改行記号のエスケープシーケンス
"複数行の\n文字列を\n入れたい";
// テンプレートリテラル
`複数行の
文字列を
入れたい`; // => "複数行の\n文字列を\n入れたい"

/*
テンプレートリテラル内で${変数名}と書いた場合に
その変数の値を埋め込むことができる
*/

const s = "文字列";
console.log(`これは${s}です`); // => "これは文字列です"

/*
nullリテラル
  null値を返すリテラル
  nullは「値がない」ということを表現する値

  foo;// "ReferenceError: foo is not defined"
*/

const foo = null;
console.log(foo); // => null

/*
undefinedはリテラルではない
  undefinedはただのグローバル変数で、undefinedという値を持っているだけ
  同じundefinedという名前のローカル変数を宣言できる

  (undefinedの再定義は非推奨)
*/

function fn(){
  var undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
  console.log(undefined); // => "独自の未定義値"
}
fn();

// オブジェクトリテラル