// sign_in_answer.js

(function($){
	let checkPw = /^(?=.*[a-zA-Z])(?=.*^[a-zA-Z0-9].*[0-9]).{6,15}$/;
	//[정리] 비밀번호 형식 체크 (영문대소문자 및 숫자(특수문자) 포함하여 6~15글자)

	let emailCheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
	//[정리] 이메일 형식 체크 (이름@주소.지역인지)

	let numCk = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
	//[정리] 전화번호

	const userId = $('#userId');
	
	$('input').on('blur',function(){
		let thisVal = $(this).val();
		console.log(thisVal);
		if(thisVal == ""){
			//console.log('내용을 입력하지 않았음')
			// $(this).closest('li').next('.narr').show();
			$(this).closest('li').addClass('error');
		}
	});

	userId.on('blur',function(){
		let thisLi = $(this).closest('li');
		let thisVal = $(this).val();
		if(thisVal == ""){
			$(this).closest('li').addClass('error');
		}else if(!emailCheck.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('이메일형식에 맞게 내용을 입력하세요')
		}else{
			thisLi.removeClass('error');
		}
	});

//pw 비교해서 일치 여부
	const userPw = $('#userPw');
	const userPwRe = $('#userPwc');

	let beforePwVal, afterPwVal;

	/*userPw.on('blur',function(){
		beforePwVal = userPw.val();
	});

	userPwRe.on('blur',function(){
		afterPwVal = userPwRe.val();
		console.log(beforePwVal+":"+afterPwVal)
		if(beforePwVal !== afterPwVal){
			$(this).closest('li').addClass('error');
			console.log('일치X')
		}
	});*/

	userPw.on('blur',function(){
		beforePwVal = userPw.val();
		let thisVal = $(this).val();
		let thisLi = $(this).closest('li');
		//console.log(thisVal);
		if(thisVal == ""){
			thisLi.addClass('error');
			thisLi.find('.narr').text('비밀번호 입력하세요')
		}if(thisVal.length <= 5){
			thisLi.addClass('error');
			thisLi.find('.narr').text('비밀번호는 6~15자 이내입니다.')
		}else if(!checkPw.test(thisVal)){
			thisLi.addClass('error');
			thisLi.find('.narr').text('영문 숫자 특수문자 혼용.')
		}else{
			thisLi.removeClass('error')
		}
	});

	userPwRe.on('keyup',function(){
		afterPwVal = userPwRe.val();
		//console.log(beforePwVal+":"+afterPwVal)
		if(beforePwVal !== afterPwVal){
			$(this).closest('li').addClass('error');
		}else{
			$(this).closest('li').removeClass('error');
		}
	});

	const pwlabel = $('label[for="userPw"]');

	pwlabel.on('mousedown',function(e){
		console.log(e.which);//which 1:왼 2:스크롤 3:오른쪽
		if(e.which==1){
			userPw.attr({type:'text'});
		}
	});
	pwlabel.on('mouseup keyup mousemove',function(e){
		userPw.attr({type:'password'});
	});
//=========================================================
	//정규표현식: Regular Expression (RegExp)

	let a = 10;
	let b = 4;
	let c = 8; 
	let re = / a + c /; //정규표현식 =
	let re2 = new RegExp('a+c');
	console.log(re) // /a + c/ 
	console.log(re2) // /a + c/ 
	//new 혹은  / / 사용 (*권장 / / )

	//정규표현식 메소드
	//1. exec : 대응되는 문자열을 찾는 메소드 (배열로 변환)
	//2. test : 해당하는 문자열이 유무 파악 (t/f)
	//3. match : 해당하는 문자열이 유무 파악 (배열로 반환)
	//4. search : 해당하는 문자열의 유무 파악 (index 반환 //숫자)
	//5. replace : 찾아 바꾸기
	//6. split : 문자열을 배열로 반환 (나누기 string 메소드) 


	let t = /^a&&$r/.test('after school');
	console.log(t);

})(jQuery);