var lakukan;

function GetCount(yyyy,MM,dd,HH,mm,ss,ctl,language){
        dateFuture = new Date(yyyy,MM,dd,HH,mm,ss);
	dateNow = new Date(serverTime);								//grab current date
	amount = dateFuture.getTime() - dateNow.getTime();		//calc milliseconds between dates
        
	delete dateNow;
        var Dayx;
        if (language =='ID'){Dayx ='Hari'}else{ Dayx ='Day';}
	// time is already past
	if(amount < 0){
		//document.getElementById(ctl).innerHTML="Done..";
                dwr.util.setValue(ctl,"Expired ..");
                document.getElementById(ctl).style.background = "#ffffff"; 
	}
	// date is still good
	else{
		days=0;hours=0;mins=0;secs=0;out="";
		amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

		days=Math.floor(amount/86400);//days
		amount=amount%86400;

		hours=Math.floor(amount/3600);//hours
		amount=amount%3600;

		mins=Math.floor(amount/60);//minutes
		amount=amount%60;

		secs=Math.floor(amount);//seconds
                
                secs = secs - 2
                if (secs < 0) {
                    secs = 60 + secs;
                    mins = mins - 1;
                    if (mins < 0) {
                        mins = 60 + mins;
                    }
                }               
                 
		if(days != 0){
                    out += days +" "+Dayx+" "+((days!=1)?"":"")+", ";}
                else { }
                
		if(days != 0 || hours != 0){
                    var h = hours.toString();
                    if (h.length == 1){hours = "0" + hours;}
                    
                    out += hours +":"+((hours!=1)?"":"");}
                if (hours ==0){
                    out += "00:";
                }
                
		if(days != 0 || hours != 0 || mins != 0){
                    var m = mins.toString();
                    if (m.length == 1){mins = "0" + mins;}
                    out += mins +((mins!=1)?"":"")+":";}
                
                   
                 var s = secs.toString();
                    if (s.length == 1){secs = "0" + secs;}
                    //out += secs - 1;
                    out += secs ;
		//document.getElementById(ctl).innerHTML=out;
                
               if (secs % 2 == 0) {
                    document.getElementById(ctl).style.background = "#FFFF66"; 
                }
                else
                {
                  document.getElementById(ctl).style.background = "#ffffff";  
                }
                //setInnerHtml(ctl, out);
                dwr.util.setValue(ctl,out);
                
		setTimeout("GetCount("+yyyy +","+MM+","+dd+","+HH+","+mm +","+ss+",'"+ctl+"','"+language+"')", 2000);
	}
}
