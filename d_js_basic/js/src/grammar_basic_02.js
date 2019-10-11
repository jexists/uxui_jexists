//grammar_basic_02.js


//while (){} =====================


// console.log(n);
// var n ;
// while(n<=100){
// 	//var n = 0;
// 	console.log(n);
// 	n++;
// } //0~100
// console.log(n);


//조건이 거짓이 될수있는 상황이 없을경우는 계속 끝까지 반복한다.
//꼭 거짓이 될수있는 상황을 만들어라! -> 과열된댜!!

//최초의 값이 어떻한 조건을 보고있고 그 조건을 수행하고 그 후에 연산하게 되어있다. 
//최초 -> 조건 -> 수행 -> 연산 -> 조건 -> 수행 계속 반복 (조건이 거짓이되어야 빠져나온다.)

//do while =========================
// var n = 0;
// do{
// 	console.log(n);
// 	n++
// } while(n>100)

// console.log(n); //1

// var n = 0;
// do{
// 	console.log(n);
// 	n++;
// } while(n>100)

// console.log(n); //1

//=====================================================
//for(){}

// var n = 0;
// for (;n <= 10;){
// 	console.log(n);
// 	n++
// }
// let n = 0;
// for(; n <=10; n++){
// console.log(n);

// }
// console.log(n);

// for in 문==============================================

// var arr =["사과","배","바나나", "오렌지"];

// for (let i=0; i<4; i++){
// 	console.log(arr[i]);
// }
//-배열에서는 for~in을 사용하지 않는다. (느려진다. )

// let obj = { 
//  "red":"사과",
//  "yellow":"바나나",
//  "orange":"오렌지",
//  "green":"키위",
//  "purple":"포도"};

// for (let i in obj) {
// 	console.log(obj[i]);
// };

// for(let i =0; i<10; i++){} //= 숫서를 가지고 있는 형태 일반형식, 배열

// for(let i in object){} //객체일때 사용

// var myArr = ['빨강','파랑','노랑','녹색','보라'];

// myArr.forEach(function(data){
// 	console.log(data)
// }); //빨강, 파랑, 노랑, 녹색, 보라 한개씩 뿌려준다.

// for 테스트 ===========================================

//과거형
//var product = document.getElementById('prdocut');

//현재형
let product = document.querySelector('#product');
product.style.width = "100%";
product.style.height = "auto"; // 단위안써도 자동px (쓰는것 권장)
product.style.minHeight = "300px"; //min-height -> minHeight
product.style.backgroundColor = "#f96"; //자바스크립(-)X => camelCase로 변경

let ul = document.createElement('ul'); // ul 태그 생성
product.appendChild(ul); //ul 생성해서 넣기
ul = document.querySelector('#product>ul');
ul.style.width = "90%";
ul.style.height = "auto";
ul.style.minHeight = "400px";
ul.style.margin = "auto";
ul.style.backgroundColor = "#77f";

/*
let li = document.createElement('li');
ul.appendChild(li); //여기에 ul은 태그가 아니라 ul변수
li = document.createElement('li'); //생성하고 
ul.appendChild(li); //자식요소로 옮긴다 (집어넣는다)
li = document.createElement('li');
ul.appendChild(li);
//그래서 반복문을 사용해라
*/

let ar= ['우유', '쥬스','차','커피', '슬러시','요거트'];
console.log( ar.length ); //length(변수의 목록의 개수)

// 반복문 사용
for (let i=0; i<ar.length; i++){
	let li = document.createElement('li');
	let myText = document.createTextNode(ar[i]);
	li.appendChild(myText);
	ul.appendChild(li);
}

