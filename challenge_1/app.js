
var reload = $('.button1');

reload.on('click', function(){
	location.reload();
});


var shift = 1;
var play = true;
$('table tr td').click(function(){
    if ($(this).text() === "" && play){
        if((shift%2) === 1){
            $(this).append("X");
        } else {
            $(this).append("O"); 
        }
        shift++;
   
    }
    });


 function whoIsTheWinner() {
 	
	var cell1 = $("table tr:nth-child(1) td:nth-child(1)").text();
	var cell2 = $("table tr:nth-child(1) td:nth-child(2)").text();
	var cell3 = $("table tr:nth-child(1) td:nth-child(3)").text();
	var cell4 = $("table tr:nth-child(2) td:nth-child(1)").text();
	var cell5 = $("table tr:nth-child(2) td:nth-child(2)").text();
	var cell6 = $("table tr:nth-child(2) td:nth-child(3)").text();
	var cell7 = $("table tr:nth-child(3) td:nth-child(1)").text();
	var cell8 = $("table tr:nth-child(3) td:nth-child(2)").text();
    var cell9 = $("table tr:nth-child(3) td:nth-child(3)").text();
        
		if ((cell1 === cell2) && (cell2 === cell3)) {
			return cell3;
		} else if ((cell4 === cell5) && (cell5 === cell6)) {
			return cell6;
		} else if ((cell7 === cell8) && (cell8 === cell9)) {
			return cell9;
		}
		else if ((cell1 === cell4) && (cell4 === cell7)) {
			return cell7;
		} else if ((cell2 === cell5) && (cell5 === cell8)) {
			return cell8;
		} else if ((cell3 === cell3) && (cell6 === cell9)) {
			return cell9;
		}
		else if ((cell1 === cell5) && (cell5 === cell9)) {
			return cell9;
		} else if ((cell3 === cell5) && (cell5 === cell7)) {
			return cell7;
		}
		return -1;
    };
    




	
            
	

