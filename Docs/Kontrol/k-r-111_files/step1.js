function step1()
{
var i;a=new Array();var j;var n=0;a[1]="�����������";var c="�����������";
if (document.forms[0].R1[1].checked==true)
{a[1]="�����������";c='�����������';a[0]=2;}else{a[0]=1;};
for (i=2; i<=8; i++) 
{a[i]=document.forms[0].elements[i].value;}
simvol(2);simvol(4);
document.open();
document.write('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><html><head>');
document.write('<title>�������� �������� ������. ��� 2 (�� 3-�).</title>');
document.write('<meta http-equiv="Content-Type" content="text/html; charset=windows-1251">');
document.write('<script src="step2.js">');
document.write('</script>');
document.write('</head><body>');

document.write('<table width="80%" border="1" align="center" cellpadding="10"><tr><td bgcolor="#EEEEEE"><p>��������� ������� � �������� �������. �������� ���������� ������.</p>');
document.write('<p>��� ������� ������� �����, ��� �������, ������� ��� ���������. ��� ������� ������, ��� ���� ��� ����. ��� ����� ������� �������� &#8212; ������� &laquo;E&raquo;. ���������� ����� �� ����� ������ �������� � 2 ���� ������ ������ (200), ��� ���������� ����� �� ������, ��������� �������� ������� � &laquo;A&raquo; (100 ������). <br> ���� ��������� �� ���������, �.�. � ���� �������� �������� ������� &laquo;A&raquo;, ���������� ����� �� ����� ������ �������� 1 ����.</p>');
document.write('<p>����� ������� ������ &laquo;������&raquo; ����� ������� ��������� '+c+' ������. �� �������� ��� ���� ����� �� ��������� � �����, �������� ��������� ��������:</p><ul><li>� ������� ���� <b><i>���</i></b> ������� ����� <b><i>�������� HTML-����</i></b>;</li><li>��������� �������� ��� � ����������� <b>&laquo;�������&raquo;</b>;</li><li>� <b>&laquo;��������&raquo;</b> ��������� ������� ���� <b><i>���� &#8212; ��������� ���...</i></b></li><li>������ ��� ������������ ����� <b><i>');
if (a[3]!=0){document.write('kl'+a[3]+'_');}
if (a[0]==1){document.write('kr'+a[5]);}else{document.write('pr'+a[5]);}
if (a[6]!=0){document.write('_v'+a[6]);}
document.write('.htm</i></b> (��� ������ �� ������ ������), ����������� ������� ���, ������������ &laquo;���������&raquo;.<br>���������� ������ ���� ����������� ������� ���� &#8212; <b><i>htm</i></b>.</li></ul><p>��� ���������� � ������� ��������� ��������, ��������� ���������� ��� �������������� ������� (����������, ��������, �������) ����� ��������������� ����� ���������� Web-�������.</p></td></tr></table><p>&nbsp;</p>');

document.write('<hr>');

document.write('<font color="#888888"><h2>'+a[2])
if (a[3]!=0){document.write('. '+a[3]+' �����.')}
if (a[4]!=""){document.write('<br><i>&laquo;'+a[4]+'&raquo;</i>');}
document.write('</h2></font><font color="#555555"><H2 align="center">'+a[1]+' ������ � '+a[5]+'. ')
if (a[6]!=0){document.write('������� � '+a[6]+'.')}
document.write('</H2></font><br>');

document.write('<form>');

for (n=0; n<=8; n++) 
{document.write('<input type="hidden" value="'+a[n]+'">');};
document.write('</form>');

for (i=1; i<=a[7]; i++)
{
document.write('<form>');
document.write('<p><b>������ '+i+'</b> <input type="text" size="80">');
document.write(' <b>���������</b> <select size="1">');
document.write('<option selected value="1">A</option><option value="1.25">B</option><option value="1.5">C</option><option value="1.75">D</option><option value="2">E</option></select>');
document.write('<blockquote><blockquote><p>');
   for (j=1; j<=a[8]; j++)
   {
   document.write('<input type="radio" name="R1">');
   document.write('<b>����� '+j+'</b> <input type="text" size="60"><br>');
   }
document.write('</p></blockquote></blockquote>');
document.write('</form>');
};
document.write('<form>');
document.write('<p align="center"><input type="button" value="������" onClick="step2()"></p>');
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