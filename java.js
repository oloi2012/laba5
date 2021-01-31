function openWin1(){
	  var win1 = document.getElementById("1");
	 myWin = window.open("", "displayWindow");
     myWin.document.open();
     //  новый документ 
     myWin.document.write("<html><head><title>displayWindow");
     myWin.document.write("</title></head><body>");
     myWin.document.write("<center><font size=+2>");
     myWin.document.write("id элемента: 1");
     myWin.document.write("<br>");
	 myWin.document.write(" Имя тега родительского элемента: ",win1.children[0].parentNode.nodeName);
	 myWin.document.write("<br>");
	 myWin.document.write("Количествво потомков: " ,win1.children.length);
     myWin.document.write("</font></center>");
     myWin.document.write("<br>");
 
	
 for (let i=0; i < win1.children.length; i++)
  {
	 myWin.document.write("<font size=+1>");
     myWin.document.write("<li>",win1.children[i].nodeName,"(",win1.children[i].innerHTML,")","</li>");
  
  }
     myWin.document.write("<ul>");
     myWin.document.write("</body></html></font>");

     myWin.document.close();
}

function openWin2(){
	  var win2 = document.getElementById("2");
	 myWin = window.open("", "displayWindow");
     myWin.document.open();
     //  новый документ 
     myWin.document.write("<html><head><title>displayWindow");
     myWin.document.write("</title></head><body>");
     myWin.document.write("<center><font size=+2>");
     myWin.document.write("id элемента: 2");
     myWin.document.write("<br>");
	 myWin.document.write(" Имя тега родительского элемента: ",win2.children[0].parentNode.nodeName);
	 myWin.document.write("<br>");
	 myWin.document.write("Количествво потомков: " ,win2.children.length);
     myWin.document.write("</font></center>");
     myWin.document.write("<br>");
 
	
 for (let i=0; i < win2.children.length; i++)
  {
  myWin.document.write("<li>",win2.children[i].nodeName,"(",win2.children[i].innerHTML,")","</li>");
  
  }
     myWin.document.write("<ul>");
     myWin.document.write("</body></html>");

     myWin.document.close();
}

function openWin3(){
	  var win3 = document.getElementById("3");
	 myWin = window.open("", "displayWindow");
     myWin.document.open();
     //  новый документ 
     myWin.document.write("<html><head><title>displayWindow");
     myWin.document.write("</title></head><body>");
     myWin.document.write("<center><font size=+2>");
     myWin.document.write("id элемента: 3");
     myWin.document.write("<br>");
	 myWin.document.write(" Имя тега родительского элемента: ",win3.children[0].parentNode.nodeName);
	 myWin.document.write("<br>");
	 myWin.document.write("Количествво потомков: " ,win3.children.length);
     myWin.document.write("</font></center>");
     myWin.document.write("<br>");
 
	
 for (let i=0; i < win3.children.length; i++)
  {
  myWin.document.write("<li>",win3.children[i].nodeName,"(",win3.children[i].innerHTML,")","</li>");
  
  }
     myWin.document.write("<ul>");
     myWin.document.write("</body></html>");

     myWin.document.close();
}
var myWin;
var num;
var clicker = addEventListener("click", handler);

function btnClick(){
	num = document.forma.chars.value;
}

function handler (event){
  var f1 = event.target.id;
  if (f1 == num && num == 1) {
   openWin1();	
}
 if (f1 == num && num == 2) {
   openWin2();	  
}
 if (f1 == num && num == 3) {
   openWin3();	
}
}



