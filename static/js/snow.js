snejinki=new Array(3); // количество снежинок
      
// Картинки - снежинки
Image0=new Image(); Image0.src=snejinki[0]="static/img/1.png";
Image1=new Image(); Image1.src=snejinki[1]="static/img/2.png";
Image2=new Image(); Image2.src=snejinki[2]="static/img/3.png";

Amount=30; // густота снега
Ypos=new Array();
Xpos=new Array();
Speed=new Array();
Step=new Array();
Cstep=new Array();
ns=(document.layers)?1:0;
ns6=(document.getElementById&&!document.all)?1:0;
      if (ns){
for (i = 0; i < Amount; i++){
var P=Math.floor(Math.random()*snejinki.length);
rndPic=snejinki[P];
document.write("<LAYER NAME='sn"+i+"' LEFT=0 TOP=0><img src="+rndPic+"></LAYER>");
}
}
else{
document.write('<div style="position:absolute;top:0px;left:0px"><div style="position:relative">');
for (i = 0; i < Amount; i++){
var P=Math.floor(Math.random()*snejinki.length);
rndPic=snejinki[P];//osw
document.write('<img id="si'+i+'" src="'+rndPic+'" style="position:absolute;top:0px;left:0px">');
}
document.write('</div></div>');
}
WinHeight=600;
WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
for (i=0; i < Amount; i++){
      Ypos[i] = Math.round(Math.random()*WinHeight);
      Xpos[i] = Math.round(Math.random()*WinWidth);
      Speed[i]= 1.2;
      Cstep[i]=0;
      Step[i]=Math.random()*0.1+0.2;
}
function fall(){
var WinHeight=600;
var WinWidth=(ns||ns6)?window.innerWidth-70:window.document.body.clientWidth;
var hscrll=(ns||ns6)?window.pageYOffset:document.body.scrollTop;
var wscrll=(ns||ns6)?window.pageXOffset:document.body.scrollLeft;
for (i=0; i < Amount; i++){
sy = Speed[i]*Math.sin(90*Math.PI/180);
sx = Speed[i]*Math.cos(Cstep[i]);
Ypos[i]+=sy;
Xpos[i]+=sx;
if (Ypos[i] > WinHeight){
Ypos[i]=-60;
Xpos[i]=Math.round(Math.random()*WinWidth);
Speed[i]=1;
}
if (ns){
document.layers['sn'+i].left=Xpos[i];
document.layers['sn'+i].top=Ypos[i]+hscrll;
}
else if (ns6){
document.getElementById("si"+i).style.left=Math.min(WinWidth,Xpos[i]);
document.getElementById("si"+i).style.top=Ypos[i]+hscrll;
}
else{
eval("document.all.si"+i).style.left=Xpos[i];
eval("document.all.si"+i).style.top=Ypos[i]+hscrll;
}
Cstep[i]+=Step[i];
}
setTimeout('fall()',50); // скорость снежинок
}

window.onload=fall
//-->