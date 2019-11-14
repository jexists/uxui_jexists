# 반응형 웹 jQuery 세팅

#### 세로 가로 변경일때 자동 새로고침


```javascript
// jq_rwd_01.js

(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		console.log(nowWinW); //변경된 사이즈
		location.reload(); //새로고침
	})
})(jQuery);
```
#### 세로변경일때 새로고침X

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침
		}
	})
})(jQuery);
```

### 현재디바이스 크기 파악하여 정의

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
//===============================
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	//console.log(nowWinW); //변경된 사이즈
	if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

#### if 문 함수처리

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
} //DeviceCheck();

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 console.log(nowDevice);
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log(beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

#### 사이즈 변환 확인

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('beforeDevice', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		location.reload(); //새로고침

		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(){
 if (winW <= mob) {
 	nowDevice = 'mobile';
 }else if(winW > mob && winW <= tab){
 	nowDevice = 'tablet';
 }else if(winW > tab && winW <= pc){
 	nowDevice = 'pc browser';
 }else if(winW > pc && winW <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('beforeDevice', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		let afterDevice = DeviceCheck();
		console.log('afterDevice', afterDevice);
		//location.reload(); //새로고침
		}
	})
})(jQuery);
```

```javascript
(function($){
	const win = $(window);
	let winW = win.outerWidth();
	console.log(winW);
//현재 디바이스 크기 파악하여 정의
let mob = 480, tab = 768, pc = 1280, laptop = 1366;
let nowDevice = 0;
const DeviceCheck = function(w){
 if (w <= mob) {
 	nowDevice = 'mobile';
 }else if(w > mob && w <= tab){
 	nowDevice = 'tablet';
 }else if(w > tab && w <= pc){
 	nowDevice = 'pc browser';
 }else if(w > pc && w <= laptop){
 	nowDevice = 'laptop';
 }else{nowDevice = 'pcfull';}
 // console.log(nowDevice);
 return nowDevice;
} //DeviceCheck();
let beforeDevice = DeviceCheck();
console.log('전', beforeDevice);

	win.on('resize',function(){
		let nowWinW = win.outerWidth();
		//console.log(nowWinW); //변경된 사이즈
		if(winW !== nowWinW){//이전의값과 지금의 값이 똑같이 않으면
		let afterDevice = DeviceCheck();
		console.log('후', afterDevice);
		//location.reload(); //새로고침
		}
	})
})(jQuery);
```



```javascript
// jq_rwd_01.js

(function($){
 //현재 디바이스 크기 파악하여 정의
 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
 //함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = 'mobile';
  }else if(w > mob && w <= tab){
  	nowDevice = 'tablet';
  }else if(w > tab && w <= pc){
  	nowDevice = 'pc browser';
  }else if(w > pc && w <= laptop){
  	nowDevice = 'laptop';
  }else{nowDevice = 'pcfull';}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){
        //이전의값과 지금의 값이 다를 경우 && 이전과 이후의 이름이 다를경우에만 
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

```javascript
// jq_rwd_01.js

(function($){
//반응형 크기에 따라 불러오는 파일 정의
let myD = ['mobile','tablet','pc']; //myD[0] 배열형식가능
 const wrap = $('#wrap');
 let tempUrl ='./rwd_temp/';
 const LoadFile = function(w){
 	switch(w){
 		case 'mobile': wrap.load(tempUrl + 'mob.html');
 		break;
 		case 'tablet': wrap.load(tempUrl + 'tab.html');
 		break;
 		case 'pc': wrap.load(tempUrl + 'pcbase.html');
 		break;
 		case 'laptop': wrap.load(tempUrl + 'laptop.html');
 		break;
 		case 'pcfull': wrap.load(tempUrl + 'pcfull.html');
 		//default사용가능
 		break;
 	}//switch(w)
 }//LoadFile()

//현재 디바이스 크기 파악하여 정의 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
//함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = 'mobile';
  }else if(w > mob && w <= tab){
  	nowDevice = 'tablet';
  }else if(w > tab && w <= pc){
  	nowDevice = 'pc browser';
  }else if(w > pc && w <= laptop){
  	nowDevice = 'laptop';
  }else{nowDevice = 'pcfull';}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 LoadFile(beforeDevice);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){//이전의값과 지금의 값이 다를 경우
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

#### 파이널

```javascript
// jq_rwd_01.js

(function($){
//반응형 크기에 따라 불러오는 파일 정의
let mySet = ['mobile','tablet','pc','laptop','pcfull']; //myD[0] 배열형식가능
 const wrap = $('#wrap');
 let tempUrl ='./rwd_temp/';
 const LoadFile = function(w){
 	//for문 사용 가능/ 단순화 가능
 	switch(w){
 		case mySet[0]: wrap.load(tempUrl + 'mob.html');
 		break;
 		case mySet[1]: wrap.load(tempUrl + 'tab.html');
 		break;
 		case mySet[2]: wrap.load(tempUrl + 'pcbase.html');
 		break;
 		case mySet[3]: wrap.load(tempUrl + 'laptop.html');
 		break;
 		case mySet[4]: wrap.load(tempUrl + 'pcfull.html');
 		//default사용가능
 		break;
 	}//switch(w)
 }//LoadFile()

//현재 디바이스 크기 파악하여 정의 //내가 사용하는 값 정의
 let mob = 480, tab = 768, pc = 1280, laptop = 1366;
 let nowDevice = null;
//함수를 처리해서 해당하는 값 처리
 const DeviceCheck = function(w){
  if (w <= mob) {
  	nowDevice = mySet[0];
  }else if(w > mob && w <= tab){
  	nowDevice = mySet[1];
  }else if(w > tab && w <= pc){
  	nowDevice = mySet[2];
  }else if(w > pc && w <= laptop){
  	nowDevice = mySet[3];
  }else{nowDevice = mySet[4];}
  return nowDevice;
 } //DeviceCheck();

 const win = $(window);
 let winW = win.outerWidth();
 console.log(winW);

 let beforeDevice = DeviceCheck(winW);
 LoadFile(beforeDevice);
 console.log('전', beforeDevice);

//사이즈가 변하면 파악
 win.on('resize',function(){
	let nowWinW = win.outerWidth();
	let afterDevice = DeviceCheck(nowWinW);
	console.log('후', afterDevice);
	if(winW !== nowWinW && beforeDevice !== afterDevice){//이전의값과 지금의 값이 다를 경우
	location.reload(); //새로고침
	}
 })
})(jQuery);
```

