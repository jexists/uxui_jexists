// slide_indi_n_btn.js

(function($){
//플러그인화 시키기 (DataUrl, imgUrl, 선택자)
$.fn.myIndiSlide = function(jsonList,imgList){


//데이타 불러오기
 let imgUrl = imgList//'../img/slide_test_02/'
 let dataUrl = jsonList //'../data/slide_indi_n_btn.json'
 let slidedata;
	$.ajax({
		async:false,
		dataType: 'json',
		url: dataUrl,
		success: function(data){return slidedata = data;
		}
	});
		console.log(slidedata);
//슬라이드 
 const slide = this //$('#slide_01');
 slide.append('<div class="slide_wrap"><ul></ul></div>')

//다음&이전 버튼
 const slideWrap = slide.find('.slide_wrap');
 const makeBtn = '<div class="btn"><button type="button" class="next"><span>다음내용보기</span></button><button type="button" class="prev"><span>이전내용보기</span></button></div>';
 slideWrap.before(makeBtn);
 const btnArea = slide.find('.btn');
 const btn = btnArea.children('button');


//인디케이터 버튼
 slideWrap.before('<ul class="indicator"></ul>');
 const indicator = slide.find('.indicator');

//각 영역에 필요한 내용담기
 let slideLen = slidedata.length;

 for(let i = 0; i<slideLen; i++){
 let slideForm = `<li><span>${slidedata[i].text}</span></li>`;
 let indiForm = `<li><a href="#"><span class="hidden">${slidedata[i].text}</span></a></li>`;
 slideWrap.children('ul').append(slideForm);
 indicator.append(indiForm);
 slideWrap.find('li').eq(i).css({backgroundImage: 'url('+ imgUrl + slidedata[i].img + ')'})
 };
 const slideUl = slideWrap.children('ul');

//슬라이드 마지막 디자인 복제
 slideUl.children('li').eq(-1).clone().prependTo(slideUl);
 slideLen++;

//인디케이터 디자인
 let n = 0;
 indicator.parent().css({position: 'relative'});
 indicator.css({position:'absolute',bottom:0, width:'100%'});
 indicator.find('li').css({display:'inline-block', marginLeft:'0.5rem'});
 indicator.find('a').css({display:'block',width:'26px', height:'26px', backgroundColor:'#777',borderRadius:'100%'});

 let indiLi = indicator.children('li');
 let indiDefaultC = indiLi.children().css('backgroundColor');

 const indiAction = function(){
    let indiIndex = indiLi.eq(n);
	indiLi.eq(n).addClass('action');
 	indiLi.eq(n).siblings().removeClass('action');
	indiIndex.siblings().children('a').css({backgroundColor:indiDefaultC});
	if( indiIndex.hasClass('action') ){
	 	indiIndex.children('a').css({backgroundColor: '#f07'});	 }
 }; // 
 indiAction();	 

 // $('head').append('<style class="myStyle"></style>')
 //  $('head').find('.myStyle').append('.indicator li.action >a {background-color:#fff !important;}')
 

//버튼 디자인
 btnArea.css({position:'absolute', zIndex:500, top:'50%', left:'5%', width:'90%', height:0});
 btn.css({float:'left', width: '50px', height: '50px', transform:'translateY(-50%)'});
 /*if(btn.hasClass('next')){
 	btn.eq(0).css({float:'right'});
 };*/
 btn.eq(0).css({float:'right'});
 btn.eq(1).css({float:'left'});

//슬라이드 디자인
 let thisH = slide.outerHeight();
 slideWrap.css({width:'100%', height:(thisH-50)+'px'});
 slideUl.css({width: 100 * slideLen + '%', height:'100%', marginLeft:'-100%', position:'relative', left:0});
 slideUl.children('li').css({width:100/slideLen + '%', height:'100%', float:'left', backgroundRepeat:'no-repeat', backgroundPosition: '50% 50%', backgroundSize: 'cover'})

// 인디케이터 클릭&포커스
 indiLi.on('click',function(e){
 	e.preventDefault();
 	n = $(this).index();
 	// indiLi.eq(n).addClass('action');
 	// indiLi.eq(n).siblings().removeClass('action');
 	slideUl.animate({left: -100 * n + "%"});
 	indiAction();	
 });

//버튼 클릭
 btn.on('click',function(e){
 	e.preventDefault();
 	let next = $(this).hasClass('next');
 	if(next){
 		n++;
 		if(n >= slideLen-1){n=0; slideUl.css({left:'100%'});}
 	}else{n--;}
 		slideUl.animate({left:-100*n+'%'},function(){
 			if(n<0){n=slideLen-2;slideUl.css({left:-100*n+'%'});}
 		});
// indiLi.eq(n).addClass('action');
// indiLi.eq(n).siblings().removeClass('action');
indiAction();	
 });
}; //플러그인
})(jQuery);