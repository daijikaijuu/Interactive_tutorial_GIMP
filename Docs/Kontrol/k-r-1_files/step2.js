function step2()
{
var i;var j;a=new Array();v=new Array();e=new String();o=new Array();s=new Array();var k=0;
var n;var eo;var sl=0;var t;var b;var sd;e='15.2/';var bll=0;var zapoln=0;

for (i=0; i<=8; i++)
{a[i]=document.forms[0].elements[i].value;};


for (i=1; i<=a[7]; i++)
{if (document.forms[i].elements[0].value==""){alert('Необходимо заполнить ВСЕ вопросы!');return;}
for (j=0; j<a[8]; j++)
{if (document.forms[i].elements[j*2+3].value==""){alert('Необходимо заполнить ВСЕ ответы!');return;}}
}

for (i=1; i<=a[7]; i++)
{for (j=0; j<a[8]; j++)
{if (document.forms[i].R1[j].checked==true){zapoln++;}}}
if (zapoln<a[7]){alert('Необходимо отметить ВСЕ правильные ответы!');return;}


sl=(Math.floor(Math.random()*7)+2)*0.1;
t=Math.floor(Math.random()*5)+3;
b=Math.floor(Math.random()*3)+2;
sd=Math.floor(Math.random()*4)+2;


for (i=1; i<t; i++)
{e+=(Math.floor(Math.random()*a[8])*sl+sd)+'/';}

n=0
for (i=1; i<=a[7]; i++)
{
  v[i]=document.forms[i].elements[0].value;simvol('v',i);
  s[i]=document.forms[i].elements[1].value;
  bll+=1*s[i];
  if (s[i]!=1) {k=5;};

   for (j=0; j<a[8]; j++)
    {
      if (document.forms[i].R1[j].checked==true)
      {e+=(j*sl+sd)+'/';};
    o[n]=document.forms[i].elements[j*2+3].value;simvol('o',n);
n++;
    };
}


for (i=0; i<b; i++)
{e+=(Math.floor(Math.random()*a[8])*sl+sd)+'/';};


document.open();
document.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head>');

document.write('<title>'+a[1]+' работа</title>');

document.write('<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">');


document.write('<script language="JavaScript">');

document.write('function sbros() {');
document.write('x=document.forms[0].elements[7].value;');
document.write('for (i=1; i<=x; i++) {document.forms[i].reset();}}');


document.write('function step3() {');

document.write('var i=0;var j=0;var schet=0;')
document.write('var jm=document.forms[0].elements[7].value;');
document.write('var im=document.forms[0].elements[8].value;');
document.write('for (j=1; j<=jm; j++)');
document.write('{for (i=0; i<im; i++)');
document.write('{if (document.forms[j].R1[i].checked==true)');
document.write('{schet++;}}};');
document.write('if (schet<jm){alert("Надо ответить на ВСЕ вопросы!");return;}');





document.write('eo=document.forms[0].elements[9].value;');
document.write('e=new Array();');
document.write('e=eo.split("/");');

document.write('sr=new Array(')
for (i=1; i<=a[7]; i++){document.write(s[i]+',');}
document.write('0')
document.write(');');


document.write('o=new Array();');
document.write('var r=0;var tp='+t+';var kr='+k+';var test='+a[0]+';var ll='+bll+';var osh=0;var text="";');


document.write('for (j=1; j<=jm; j++)');
document.write('{for (i=0; i<im; i++)');
document.write('{if (document.forms[j].R1[i].checked==true)');
document.write('{o[j-1]=i*'+sl+'+'+sd+';}}};');

document.write('for (j=0; j<jm; j++)');
document.write('{if (o[j]==e[j+tp]){r=r+1*sr[j];}else{osh++;}};');

document.write('if (osh!=0){text=" Ошибочных ответов - "+osh+"."}')



document.write('if (test==1)');

document.write('{if (kr==0)');
document.write('{sbros(); alert("Количество правильных ответов: "+r+" из "+jm+" возможных ("+Math.round(r*100/jm)+"%).");}');
document.write('else{sbros(); alert("Набрано баллов: "+(r*100)+" из "+(ll*100)+" возможных ("+Math.round(r*100/ll)+"%).");}}');

document.write('else{if (kr==0)');
document.write('{alert("Количество правильных ответов: "+r+" из "+jm+" возможных ("+Math.round(r*100/jm)+"%).");}');
document.write('else{alert("Набрано баллов: "+(r*100)+" из "+(ll*100)+" возможных ("+Math.round(r*100/ll)+"%)."+text)}}')

document.write('}');




document.write('</script>');

document.write('</head><body>');

document.write('<font color="#888888"><h2>'+a[2])
if (a[3]!=0){document.write('. '+a[3]+' класс.')}
if (a[4]!=""){document.write('<br><i>&laquo;'+a[4]+'&raquo;</i>');}
document.write('</h2></font><font color="#555555"><H2 align="center">'+a[1]+' работа № '+a[5]+'. ')
if (a[6]!=0){document.write('Вариант № '+a[6]+'.')}
document.write('</H2></font><br>');

document.write('<form>');
for (i=0; i<=8; i++) 
{document.write('<input type="hidden" value="'+a[i]+'">');};
document.write('<input type="hidden" value="'+e+'">');
document.write('</form>');

n=0;
for (i=1; i<=a[7]; i++)
{
document.write('<form>');
document.write('<p><b>Вопрос '+i+'.</b> ');
if (k>0)
   {
     document.write('<i>(Сложность &#8212; ');
     if (s[i]==1){document.write('<b>A</b>)</i> ');}
     if (s[i]==1.25){document.write('<b>B</b>)</i> ');}
     if (s[i]==1.5){document.write('<b>C</b>)</i> ');}
     if (s[i]==1.75){document.write('<b>D</b>)</i> ');}
     if (s[i]==2){document.write('<b>E</b>)</i> ');}
    }
document.write(v[i]+'</p>');
document.write('<blockquote><blockquote><p>');
   for (j=0; j<a[8]; j++)
   {
   document.write('<input type="radio" unchecked name="R1">');
   document.write('<b>Ответ '+(j+1)+'.</b> '+o[n]+'<br>');n++;
   }
document.write('</p></blockquote></blockquote>');
document.write('</form>');
}
document.write('<form>');
document.write('<p align="center"><input type="button" value="Готово" onClick="step3()"> ');
document.write('<input type="button" value="Очистить" onClick="sbros()"></p>');
document.write('</form>');
document.write('</body></html>');
document.close();
}
function simvol(j5,i5)
{
eval('simv='+j5+'[i5];');
simv=simv.replace(/</g, "&lt;");
simv=simv.replace(/>/g, "&gt;");
eval(j5+'[i5]=simv;');
}