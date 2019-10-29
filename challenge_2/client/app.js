  $(document).ready(function () {

        var items = [
              { name: "Item 1", color: "Green", size: "X-Large" },
              { name: "Item 2", color: "Green", size: "X-Large" },
              { name: "Item 3", color: "Green", size: "X-Large" }];

              var keys = [];
              for(var i = 0; i < items.length; i++){
                for (var key in obj){
                    keys.push(key);
                }
              }
              

        var jsonObject = JSON.stringify(items);

        $('').text(jsonObject);

        $('').text(ConvertToCSV(jsonObject));
    });



 function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = '';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ','

                    line += array[i][index];
                }

                str += line + '\r\n';
            }

            return str;
        }


