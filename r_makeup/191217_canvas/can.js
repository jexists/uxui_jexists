//can.js

// //const loading = document.querySelector('.loading');
// const loadingJS = document.getElementsByClassName('loading');
// const lodingjQueyry = $('.loading');
// const lodingjQueyryJS = $('.loading')[0];



// //console.log(loading) 
// //태그로 나온다. <canvas width="300" height="300" class="loading"></canvas>
// console.log(loadingJS)
// //배열로 나온다. [0]을 붙여야 나온다.

// console.log(lodingjQueyry);
// //배열로 나온다. k.fn.init [prevObject: k.fn.init(1)]

// console.log(lodingjQueyryJS);
// //[0]을 붙여야 나온다. 똑같이 나온다. 
// //this = window // $(this) = 객체


// const rect = document.querySelector('.rectangle');
// const rctx = rect.getContext('2d');

// rctx.fillStyle = "#cff";
// rctx.fillRect (0,0, 100, 100)

// rctx.fillStyle = "#7c4";
// rctx.fillRect (50,50, 200, 200)

const myCan = document.querySelectorAll('.my_can');

console.log(myCan); //배열로 나와있음
for(let i=0; i<myCan.length; i++){
    // myCan[i].append = '' //문자로 나옴
    myCan[i].innerHTML = '<canvas width="400" height="400" class="loading"></canvas>'
    let loading = document.querySelectorAll('.loading')[i];
    loading.style = 'transform:rotate(-90deg)';
    
}

// const resultArr = [90, 10, 40];
const resultArr = [{sj:'photoshop', sc:90},{sj:'illustrator',sc:99},{sj:'indesign',sc:95}];
//resultArr[0].sc

// [].each(function(index,data){}) //javascript는 반대
document.querySelectorAll('.loading').forEach(function(data,index){
    console.log(data);


let ctx = data.getContext('2d');


//ctx.beginPath(); //시작

// const myR = function(r){
//     return Math.PI / 180 * r;
// };
//console.log(myR(50))

let myR = function(r){
    return Math.PI / 180 * (3.6 * r)
}

let progressArc = function(r){
    ctx.arc(200, 200, 100, 0, myR(r)); //반시계방향
}

// let j = 0;
// setInterval(function(){
//     j++;
//     if(j>20){j=0}
//     ctx.beginPath();
//     progressArc(j);
//     // console.log(j)
//     ctx.stroke();
// },200);


let j = 0;
let go;
// let s = 70;
let graphGo = function(s){
    go = setInterval(function(){
    if(j < s){
        ctx.beginPath();
        ctx.lineWidth = 50;
        ctx.strokeStyle = '#f07';
        progressArc(++j);
        
        ctx.stroke();
    }else{
        clearInterval();
    }
},30);
};
graphGo(resultArr[index].sc);
// progressArc(20);

//ctx.arc(200, 200, 100, 2, 2 * Math.PI); //반시계방향
// 호(x좌표, y좌표, radius반지름 , 완전한원 (0), )
//ctx.stroke(); //끝

});