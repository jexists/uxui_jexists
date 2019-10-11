# jQuery

[http://code.jquery.com](http://code.jquery.com/) 제이쿼리 코드 jQuery 3.x & jQuery UI 1.12.1  (오른쪽 링크저장)

> jQuery 3.x 
>
> jQuery UI 1.12.1 -> jQuery 뒤쪽에다가 써야한다.
>
> jQuery Migrate: 기존에 사라진것 모두 모은것

> slim, slim minified 익스플로어 하위버전 X
> minified - 용량은 적지만 스페이스없음
> uncompressed - 코드 보기 쉬움

#### cdn으로 불러오는 방법

<script src="https://code.jquery.com/jquery-3.4.1.js"></script>

```html
<!-- jQuery 3.x (구조) -->
<script src="../../js/base/jquery-3.4.1.min.js"></script>
<!-- jQuery UI 1.12.1 (애니메이션) -->
<script src="../../js/base/jquery-ui.min.js"></script>

```

```html
<!-- 과거 -->
<script>
$(document).ready(function(){
	
});
</script>
<!-- 축약 -->
<script>
$(function(){

});
</script>

<!-- 현재: 즉시실행함수 -->
<script>
(function($){

})(jQuery);
</script>
```

```html
<script>
(function($){

})(jQuery);

// 
    
function jQuery(){}
var $ = jQuery;
$() == jQuery()
jQuery(function(){})
</script>
```

#### jQuery 쓰는 형식 3가지 방법

```html
<script>
(function)
</script>
```

jquery 버전 알기

```jav
(function($){
    console.log($.fn.jquery);
})(jQuery);
```

```javascript
//javascript 
document.querySelector('#wrap')

//jQuery (css사용하는 사람이 더 친숙하게 쓰기위해만듬)


```

