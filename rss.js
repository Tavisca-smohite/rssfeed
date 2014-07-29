window.onload = function () {

    var hotel = document.getElementById("hotelid");
    var car = document.getElementById("carid");
    var reload = document.getElementById("reloadid");


    reload.onclick = function () {
        window.location.reload();
    }


    hotel.onclick = function () {
        //window.location.reload();
        
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                var obj = JSON.parse(xmlhttp.responseText);

                var i = 0;

                while (obj.deals[i] != 'undefined') {
                    var div = document.createElement("div");
                    div.id= i.toString();
                    if (i % 2 == 0) {
                        div.className='evedivcolor pad';
                    }
                    else
                        div.className += 'odddivcolor pad';

                    
                    document.body.appendChild(div);
                    div.innerHTML = "<p>HotelId :  " + obj.deals[i].hotelId + "<br>"
                                                        + "HotelName :  " + obj.deals[i].hotelName + "<br>"
                                                        + "Title : " + obj.deals[i].title + "<br>"
                                                        + "Description  :" + obj.deals[i].description + "<br>"
                                                        + "Image  :</p>";
                    show_image(obj.deals[i].imageUrl, 300, 300, i);
                    //div.className= 'pad';
                    i++;
                }
            }
        }
        function show_image(src, width, height, i) {
            var m = i.toString();
            var n = document.getElementById(m);
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;
            // img.alt = alt;
            n.appendChild(img);
            // This next line will just add it to the <body> tag
            //document.body.appendChild(img);
        }
        //xmlhttp.open("GET","http://dev-mystique.tavisca.com/apis",true);
        //xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=guzppsicy1llk3itlwtxacgk",true);
        xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=guzppsicy1llk3itlwtxacgk&$filter=Type eq 'hotel'", true);


        xmlhttp.send();
    }


    //------car-------

    car.onclick = function () {
       // window.location.reload();
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                var obj = JSON.parse(xmlhttp.responseText);

                var i = 0;

                while (obj.deals[i] != 'undefined') {
                    var div = document.createElement("div");
                    div.id = i.toString();
                    if (i % 2 == 0) {
                        div.className = 'evedivcolor pad';
                    }
                    else {
                        div.className = 'odddivcolor pad';
                    }


                    document.body.appendChild(div);
                    div.innerHTML = "<p>Rental CompanyName : " + obj.deals[i].rentalCompanyName + "<br>"
                                                        + "Rental CompanyCode :  " + obj.deals[i].rentalCompanyCode + "<br>"
                                                        + "Title : " + obj.deals[i].title + "<br>"
                                                        + "Description  :" + obj.deals[i].description + "<br>"
                                                        + "Image :</p>";
                    show_image(obj.deals[i].imageUrl, 300, 300, i);
                    i++;
                }
            }
        }
        function show_image(src, width, height,i) {
            debugger;
            var img = document.createElement("img");
            img.src = src;
            img.width = width;
            img.height = height;
            var idDiv = i.toString();
            var n = document.getElementById(idDiv);
            n.appendChild(img);
            // img.alt = alt;

            // This next line will just add it to the <body> tag
            //document.body.appendChild(img);
        }
        //xmlhttp.open("GET","http://dev-mystique.tavisca.com/apis",true);
        //xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=guzppsicy1llk3itlwtxacgk",true);
        //xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=guzppsicy1llk3itlwtxacgk&&$filter=Type eq 'car'", true);
        xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=guzppsicy1llk3itlwtxacgk&$filter=Type eq 'car'", true);
        

        xmlhttp.send();
    }



}//window end