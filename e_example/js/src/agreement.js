// agreement.js

(function($){
//form 기능에서 사용하는 jQuery매소드
//val(); => 해당하는 input요소에 들어있는 value 값을 가져오는 기능
//is(':focus'); => 어떠한 상황이 처리가 되었는지 확인. /hover, focus, checked  //hasClass('class_name') 비슷 : class이름의 유무 판단
//prop(); => 속성명 / 속성의 상황묘사

//is(':checked')
//prop('checked',true) => 속성의 상황 묘사해서 역할 부여/체크해제 (addClass/removeClass)랑 비슷

//전체 동의를 클릭하면 전체가 체크되게 만들기
const allCheck = $('#allCheck');
const cbSel = $('.cb_sel')
let ck;

allCheck.on('click',function(e){
	//console.log(e);
	//let thisCheck1 = $(this).is(':checked'); //상태
	//let thisCheck2 = $(this).prop('checked');
	ck = $(this).is(':checked'); //속성명
	//console.log(ck +'전체'); // = true

	if(ck){
		cbSel.attr('checked',true);
		cbSel.prop('checked',true);
		allCheck.prop('checked',true);
		allCheck.attr('checked',true);
	}else{
		cbSel.attr('checked',false);
		cbSel.prop('checked',false);
		allCheck.prop('checked',false);
		allCheck.attr('checked',false);
	}
});

//===================

cbSel.on('click',function(){

	let idCheck = $(this).attr('id');
	let idN = $('#' + idCheck);
	let idnIs = idN.is(':checked');
	( idnIs ) ? idN.attr('checked',true).prop('checked',true):
	idN.attr('checked',false).prop('checked',false);

	for(let i = 0; i<cbSel.length; i++){
		ck = cbSel.eq(i).is(':checked');
		(ck) ? allCheck.prop('checked',true).attr('checked',true):
		allCheck.prop('checked',false).attr('checked',false); break;
	}


/*  //같은코드인데 each라는 것으로 바꿀예정
	for(let i = 0; i<cbSel.length; i++){
		ck = cbSel.eq(i).is(':checked');
		//console.log(ck)
		if(ck == false){
			allCheck.prop('checked',false);
			allCheck.attr('checked',false);
			break;
			//break //반복문자체를 끊어버리는 기능(for문기능) & 멈추고 빠져나가기
			//continue //해당하는 것을 사용하지않고 건너뛰기
		}else{
			allCheck.prop('checked',true);
			allCheck.attr('checked',true);
		}
	}*/
	
	/*cbSel.each(function(data){
		ck = $(this).is(':checked');
	  //console.log(ck +'each'); // = true

		if(ck == false){

			allCheck.prop('checked',false);
			allCheck.attr('checked',false);
			
		}else{
			allCheck.prop('checked',true);
			allCheck.attr('checked',true);
		}
	});*/

});


})(jQuery);



/*
삼항연산자 = () ? 참 : 거짓
[주의] *속도는 if문보다 삼항연산자가 빠르다  
중간에 세미콜론이 들어가면 에러
두줄 이상이 들어가는내용은 사용불가

(ck) ? allCheck.prop('checked',true).attr('checked',true):
allCheck.prop('checked',false).attr('checked',false); break;
====================
if(ck){
	allCheck.prop('checked',true).attr('checked',true);
}else{
	allCheck.prop('checked',false).attr('checked',false);
	break;
}
*/