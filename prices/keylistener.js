
 function keypressRegister(textId,btnId,excmethod){
	 //textId 文本框id btnId 按键id ,excmethod 执行方法名
	if(document.addEventListener)
	{//如果是Firefox
         document.addEventListener("keypress", fireFoxHandler, true);
    } else
    {
         document.attachEvent("onkeypress", ieHandler);
    }
      function fireFoxHandler(evt)
         {
	          //alert("firefox");
           if (evt.keyCode == 13)
           {
              var bc = $("#"+textId).attr("class");
              if(bc){
	                  eval(excmethod+"()");
	              }
	          }
       }
       function ieHandler(evt)
         {
	          //alert("IE");
           if (evt.keyCode == 13)
           {
              var bc = $("#"+textId).attr("class");
              if(bc){
	                   eval(excmethod+"()");
	              }
 
	          }
       }
       $(function(){
		           $("#"+textId).focus(function(){
			               $(this).addClass("focusflag");
		        });
		           $("#"+textId).blur(function(){
			              $(this).removeClass("focusflag");
			           });
		      });
 }
