// htmlのボタンのidからボタンを取得
var button = document.getElementById("btn");


// ボタンがクリックされた時
button.addEventListener("click",function() {

	// weight, heightという変数を作って、各テキストフィールドのvalueを入れる
	let weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;

	// 身長をメートル表示にする
	height = height * 0.01; 

	// bmiという変数を作ってBMI計算した数字を入れる
	// BMI＝体重(kg) ÷ { 身長(m) Ｘ 身長(m) }
	var bmi = weight / ( height * height);

	// 小数点1位以下を切り捨て
	bmi = bmi.toFixed(1);

	// bmi結果の欄にbmiを入れる
	document.getElementById("bmi").value = bmi;
});

