function step1()
{
var i;a=new Array();var j;var n=0;a[1]="Контрольная";var c="контрольной";
if (document.forms[0].R1[1].checked==true)
{a[1]="Проверочная";c='проверочной';a[0]=2;}else{a[0]=1;};
for (i=2; i<=8; i++) 
{a[i]=document.forms[0].elements[i].value;}
simvol(2);simvol(4);
document.open();
document.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head>');
document.write('<title>Создание тестовой работы. Шаг 2 (из 3-х).</title>');
document.write('<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">');
document.write('<script src="step2.js">');
document.write('</script>');
document.write('</head><body>');

document.write('<table width="80%" border="1" align="center" cellpadding="10"><tr><td bgcolor="#EEEEEE"><p>Заполните вопросы и варианты ответов. Пометьте правильные ответы.</p>');
document.write('<p>Для каждого вопроса можно, при желании, указать его сложность. Чем труднее вопрос, тем выше его балл. Для самых сложных вопросов &#8212; уровень &laquo;E&raquo;. Правильный ответ на такой вопрос принесет в 2 раза больше баллов (200), чем правильный ответ на вопрос, сложность которого оценена в &laquo;A&raquo; (100 баллов). <br> Если сложность не указывать, т.е. у всех вопросов остается уровень &laquo;A&raquo;, правильный ответ на любой вопрос принесет 1 балл.</p>');
document.write('<p>После нажатия кнопки &laquo;Готово&raquo; будет создана программа '+c+' работы. Ее исходный код надо сразу же сохранить в файле, выполнив следующие действия:</p><ul><li>в разделе меню <b><i>Вид</i></b> выбрать пункт <b><i>Просмотр HTML-кода</i></b>;</li><li>откроется исходный код в инструменте <b>&laquo;Блокнот&raquo;</b>;</li><li>в <b>&laquo;Блокноте&raquo;</b> выполнить команду меню <b><i>Файл &#8212; Сохранить как...</i></b></li><li>задать имя сохраняемого файла <b><i>');
if (a[3]!=0){document.write('kl'+a[3]+'_');}
if (a[0]==1){document.write('kr'+a[5]);}else{document.write('pr'+a[5]);}
if (a[6]!=0){document.write('_v'+a[6]);}
document.write('.htm</i></b> (или другое по Вашему выбору), обязательно заменив имя, предлагаемое &laquo;Блокнотом&raquo;.<br>Расширение должно быть обязательно указано явно &#8212; <b><i>htm</i></b>.</li></ul><p>Для добавления к готовой программе рисунков, изменения оформления или редактирования текстов (заголовков, вопросов, ответов) можно воспользоваться любым редактором Web-страниц.</p></td></tr></table><p>&nbsp;</p>');

document.write('<hr>');

document.write('<font color="#888888"><h2>'+a[2])
if (a[3]!=0){document.write('. '+a[3]+' класс.')}
if (a[4]!=""){document.write('<br><i>&laquo;'+a[4]+'&raquo;</i>');}
document.write('</h2></font><font color="#555555"><H2 align="center">'+a[1]+' работа № '+a[5]+'. ')
if (a[6]!=0){document.write('Вариант № '+a[6]+'.')}
document.write('</H2></font><br>');

document.write('<form>');

for (n=0; n<=8; n++) 
{document.write('<input type="hidden" value="'+a[n]+'">');};
document.write('</form>');

for (i=1; i<=a[7]; i++)
{
document.write('<form>');
document.write('<p><b>Вопрос '+i+'</b> <input type="text" size="80">');
document.write(' <b>Сложность</b> <select size="1">');
document.write('<option selected value="1">A</option><option value="1.25">B</option><option value="1.5">C</option><option value="1.75">D</option><option value="2">E</option></select>');
document.write('<blockquote><blockquote><p>');
   for (j=1; j<=a[8]; j++)
   {
   document.write('<input type="radio" name="R1">');
   document.write('<b>Ответ '+j+'</b> <input type="text" size="60"><br>');
   }
document.write('</p></blockquote></blockquote>');
document.write('</form>');
};
document.write('<form>');
document.write('<p align="center"><input type="button" value="Готово" onClick="step2()"></p>');
document.write('</form>');
document.write('</body></html>');
document.close();
}


function simvol(i5)
{
simv=a[i5];
simv=simv.replace(/&/g, "&amp");
simv=simv.replace(/</g, "&lt");
simv=simv.replace(/>/g, "&gt");
a[i5]=simv;
}