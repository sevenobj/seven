
//金牌师资选项卡
var btns=document.querySelectorAll(".fxq-jpsz-bg");
var alink=document.querySelectorAll(".fxq-jpsz-alink");
for(var i=0;i<btns.length;i++){
    btns[i].index=i;
    btns[i].onclick=function(){
        for(var i=0;i<btns.length;i++){
            btns[i].style.background="none"
            alink[i].style.color="#000"
        }
        btns[this.index].style.backgroundImage="url(./images/bg.png)"
        btns[this.index].style.backgroundPosition="center"
        btns[this.index].style.backgroundSize="100% 100%"
        alink[this.index].style.color="#fff"
    }
}
