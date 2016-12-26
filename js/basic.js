var designwidth=750;
var fontSize=100;
function fontsize(){
    var relWidth=document.documentElement.clientWidth;
    relFontSize=fontSize*relWidth/designwidth;
    document.getElementsByTagName('html')[0].style.fontSize=relFontSize+'px';
}
fontsize();
window.onresize=fontsize;/**
 * Created by Administrator on 2016/10/27.
 */
