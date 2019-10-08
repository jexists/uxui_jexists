//data_type_02-1

//javascript 기본형 내용 정리하기

/*
변수: 
- var (오래도록 사용한 변수, hoist 현상문제)
- let (hoist 현상을 막기위해 생성된 변수)
- const (최초에 생성후에 변경이 불가능하도록 처리된 변수-상수의 개념을 가짐)
*/

// console.log (myVar);
// var myVar = 0; //undefined

// var myVar;
// console.log(myVar);
// myVar = 0; //0

// /*숫자( 0 ), 문자 ("0")*/

// var num = 100;
// console.log ( typeof(num) ); //number
// var str = "100";
// console.log ( typeof(str) ); //string

// var num = 100;
// console.log ( typeof("num") ); //string
// var str = "100";
// console.log ( typeof("123") ); //number

// /*참(true)/거짓*/
// var bool = false;
// console.log (typeof(bool)); //boolean

// /*null/undefined*/
// var myrel = 123;
// myrel = null; //초기화하겠다. 
// console.log (typeof(myrel)); //object

// var myRel;
// console.log (typeof(myRel)); //undefined

// console.log ('배열&객체===========');

/* array([]), object{" ":" "} */
// var arr = [1,2,3];
// console.log(typeof(arr)); //object

// console.log(arr[2]); //3 = 배열&객체 같은형식

// var obj = {"a":"pen", "b":"mouse"} //a&b ""X ->다른거때문에 하는것이 좋음
// // console.log(typeof(obj)); //object

// // console.log(obj["b"]); //mouse = 배열&객체 같은형식 (한글,띄어쓰기,특수기호)


// var reset = null;
// // console.log(typeof(reset));//object

// // console.log ('배열&객체===========');
// console.log(arr);
// console.log(arr.__proto__);
// console.log(arr.constructor);
// console.log(arr.constructor.name);

// console.log(obj);
// console.log(obj.__proto__);
// console.log(obj.constructor);
// console.log(obj.constructor.name);

// console.log(reset.constructor.name); //cannot read property


console.log ('연산===========');
/*연산자: operator*/
var i = 10 + 2; //12
i -= 6; //i - 6; //6
i *= 2; //i * 2; //12
i /= 4; //i / 4; //3
i /= 2; //i / 2; //1.5
i *= 2; //i * 2; //3
i %= 2; //i % 2; //1
i += 2; //i + 2; //3

//나중에 한줄짜리로 바꾸면 ; 없을경우 에러가 생겨서 꼭 써야한다.

var n = 10;
++n; //11 - 1을 더하다
++n; //12
n++; //13 = 앞에 있는 값을 도출 but 실제값은 +1 
n+=1; //14
console.log(++n); //15
console.log(n++); //15 앞에 있는 값을 도출 but 실제값은 +1 
console.log(n); //16

for(var i=0; i<10 ; i++){
	console.log(i);
}
