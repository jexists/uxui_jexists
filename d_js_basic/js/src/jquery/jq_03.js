// jq_03.js

(function($){
	//$()
	$('#myBox').css({'width':'80%','height':'900px',
		'margin':'auto', 'backgroundColor': '#ddd'});

	//생성 (요소, 값)
	/*es6기반의 코드
	const myBox = document.querySelector('#myBox');
	const myh2 = document.createElement('h2');
	let h2Text = document.createTextNode('jQuery text 생성하기');
	myh2.appendChild(h2Text);
	myBox.appendChild(myh2);
	*/

	const myBox = $('#myBox');
	myBox.append('<h2></h2>');
	const myh2 = myBox.children('h2');
	//myh2.append('jQuery를 통해 글자를 생성하기'); 가능한데 다른거를 써라
	myh2.text('<i>jQuery를 통해 글자를 생성하기안녕</i>')
	//append랑 text차이점 append는 태그랑 글씨 가능
	//text는 글자만 쓸수있음 태그안먹음

	//html(), append(), prepend(), appendTo(), prepend(), before(), after()
	//text()

	// myBox.html('<p>요소를 생성하였습니다.</p>')
	//내용이 있는 상태에서 작성하면 내용을 지우고 작성하게 된다.
	//기존요소를 삭제하고 새롭게 추가하는 기능
	let con = myBox.html()
	// console.log(con) //myBox태그랑 내용을 알수있음
	//내용을 파악할때 사용한다. 

	myBox.html('<p>요소를 생성하였습니다.</p>')
//내용이 있는 상태에서 작성하면 내용을 지우고 작성하게 된다.
	myBox.append('<p> 요소를 append생성하였습니다.</p>');
//기존요소를 두고, 내부에 뒤에 추가 
	myBox.prepend('<p>요소를 prepend추가생성하였습니다.</p>');
//기존요소를 두고, 내부에 앞에 추가
// myBox.appned('p') //방에 아버지께서 들어가신다.
//내용이 있으면 움직는 내용

	let myt = $('h2');
	myt.appendTo(myBox); //아버지께서 방에 들어가신다.
	// myt.prependTo(myBox);
// append(), prepend(), appendTo(), prependTo()
// 값을 내부에 삽입하는 기능, 해당요소를 만들어서 삽입 
// 또는 기존의 요소를 끌어와서 삽입하는 기능
// *To 가 붙으면 주어의 위치가 바뀌는 것을 의미
//before & after=========================
myBox.before('<div class="beforeBox"></div>');
myBox.after('<div class="afterBox></div>');

// let myBefore = myBox.before(); 
// let myAfter = myBox.after(); 
let myBefore = myBox.prev(); //이전요소 파악할때 사용
let myAfter = myBox.next(); //다음요소 파악할때 사용
console.log(myBefore, myAfter);
//XXXXXXXXXXXXXXXXXXXXXXXXXX


//확인(크기, 속성)====================

//width(), height(),
//innerWidth(),outerWidth(),outerWidth(true), 
//innerHeight(), outerHeight(),outerHeight(true),
//위와 유사: css('width'), css('height')
//attr(), removeAttr()

//parseInt(), parseFloat();
 const resultBox = $('#resultBox');
 //다시 해봐라 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 let resultWidth = resultBox.width(); //()값변경가능
 //padding, border를 제외한 width값
 console.log(resultWidth); //=216
 //박스사이즈: 300 나온값: 216 bec 보더랑 박스사이즈때문에 

 let resultinnerWidth = resultBox.innerWidth(); 
 //padding 값을 포함한 width값 //=280
 console.log(resultinnerWidth);

 let resultoutWidth = resultBox.outerWidth();
 console.log(resultoutWidth)
 //padding, border값 포함 //=300
 let resultouttrueWidth = resultBox.outerWidth(true);
 console.log(resultouttrueWidth)
 //마진값을 포함한 가로값 //=396

 let resultBoxWidth = resultBox.css('width');
 let resultPaddingWidth = parseInt(resultBox.css('paddingLeft')) + parseInt(resultBox.css('paddingRight'));
 let pasWidth = parseInt(resultBoxWidth) + resultPaddingWidth;
 console.log(pasWidth); // 364값이나옴


 // let myat = resultBox.attr('id');
 // console.log(myat); // = resultBox
 //================
 let url = "http://www.naver.com"
 resultBox.attr({'class':'adC','data-class':'url'});
 // console.log(myat); // = undefined (class가 없기때문에)

 resultBox.on('click', function(){
	// resultBox를 클릭하면 뭘하세요
	// resultBox.append('<a href="url">클릭하면 이동</a>') 
	// url을 글자로 인식한다. //url 인식불가
	// resultBox.append('<a href="' + url + '">클릭하면 이동</a>') 
	resultBox.append(`<a href="${url}">클릭하면 이동</a>`);
	//백팁사용! 그래서 변수로 이해함
	//밖에다 ' ' 써야 안에 ""가 먹는다. 
	resultBox.removeAttr('id');
 });



//삭제하기============================
 // myBox.empty(); //내용물이 깨끗하게 사라진다.
 // myBox.remove(); //전체 지우기

//jQuery 기초개념: 매소드 체인, 콜백
//매소드 체인 : 하나의 함수 또는 메소드를 체인처럼 연결하여 처리하는 것

// 콜백: 하나의 함수내에서 다시 함수를 호출하여 사용하는 기능
/*$().find().animate({},function(){
	$().animate({},function())
});*/

//이벤트
//show(), hide(), fadeIn, fadeout, slideUp, slideDown, toggle, hasClass

})(jQuery);