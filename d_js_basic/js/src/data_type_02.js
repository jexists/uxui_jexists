// data_type_02.js


//자료형 파악하기
//검은색: 문자
//파랑색: 숫자
//숫자랑 문자가 같이 나올경우는 문자에 ""넣어서 나옴

//typeof : 문자인지 숫자인지 알려주는 함수
// var i = 0;
// var myType = typeof(i);
// console.log(i, myType); // 0 "number"

// var s = "0";
// var myType2 = typeof(s);
// console.log(s,myType2); //0 string

// var is = i+s;
// var myT3 = typeof(is);
// console.log(myT3); //string
// // 숫자 + 문자 = 문자

// let n;
// let myT4 = typeof(n);
// console.log(n); //undefined

// var d = null; //지웠다가 다시할때
// var myT5 = typeof(d);
// console.log(myT5); //object

// var e = undefined; //처음부터 없을때
// var myT6 = typeof(e);
// console.log(myT6); //undefined

// let bool = !true; //논리형
// console.log(bool) //!false !!true
// let myT7 = typeof(bool);
// console.log(myT7) //boolean

// ======================================

//배열형식이나 객체형식으로 썻을때 typeof: object

var arr = []; //배열형식
var arrT = typeof(arr);
console.log(arrT); //object


var obj = {}; //객체형식
var objT = typeof(obj);
console.log(objT); //objct

//=== 쓰는 방식

//배열(arr): 나열/ 목록형식 (html:li)
var arr = ['samsung','lg','apple']; //배열형식
var arrT = typeof(arr);
console.log(arr[0]); //samsung
//해설: 0:samsung, 1:lg, 2:apple

//객체: 속성형식
var obj = {'samsung':'gallaxy',
			'lg':'v50s',
			'apple':'iphon'
			}; //객체형식
var objT = typeof(obj);
console.log(obj['samsung']); //gallaxy
