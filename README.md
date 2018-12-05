# bmiCal
for friend

友達がwebアプリを作れるようにするための作り方を試してみます
わかりやすいと感じてもらって、抵抗感なく楽しんでもらえるといいな


### index.htmlをつくろう

いま私たちは１つのディレクトリ(フォルダ)にいる
そのディレクトリの中にindex/htmlをつくろう

### index.htmlに文字を表示しよう

BMIの計算アプリを作るので、そのタイトルを表示しよう
H1タグでタイトルを表示しよう
HTMLを書いたら表示されているか確認しよう

### formを3つ、研鑽するボタンを1つ表示しよう

BMIの値を出すために必要な入力するフォームを作ろう
体重欄、身長欄、計算結果のBMIを表示する欄
この３つを置いてみよう
計算するボタンを１つ置いていみよう

### 結果を表示するスクリプトを書いてみよう

いいじゃんできてきたね！
でも今の状態ではボタンを押しても何もしてくれません。
それは「ボタンを押したらこれをする」というプログラムが書かれていないからです。
まずは「ボタンを押したら、3つ目のBMIのformに数字の0を表示する」というプログラムを書いてみましょう

### BMIの計算をしてみよう

「ボタンを押したら、3つ目のBMIのformに数字の0を表示する」という動作ができましたね。
では早速BMI計算をしてみましょう。
体重、身長の値をweight, heightという変数をつくってその変数に入れましょう。
入れた後は計算をして、3つ目のBMIのformに表示させましょう。

### 少数点を切り捨てよう

計算できるようになりましたか？いいねいいね！もうそろそろ完成だね！！
でも計算してみると「23.333333...」のように小数点がたくさん表示されることがあるんじゃないでしょうか。
小数点第一までの表示にしてみましょう。

### scriptファイルを作ってファイルを分割しましょう

完成ですね！いえーい！！おめでとー！！！！
index.htmlのなかにscriptをたくさん書いてしまうと、どこに何が書かれているかすぐに判断ができない状態になってしまいます。
なので、多くのWebページは「表示に関するhtmlファイル」と「中身の計算方法などが書かれているscriptファイル」を分けることが良しとされています。
なので script.js というファイルを作りましょう

### script.jsファイルにindex.htmlのscript部分を写そう！

scriptタグに入っているところをコピペして、script.jsにプログラム部分を移行しよう！
コピペでオッケー！

### 不要になった部分を削除
 index.htmlに書かれていたプログラム部分をscript.jsにうつしたので、不要になった部分を削除しよう。
 削除したら、script.jsをindex.htmlから読み込めるようにするプログラムを書こう
