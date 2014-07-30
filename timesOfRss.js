
//window.onload = function () {
    //debugger
window.onload = function () {
    document.getElementById('url').addEventListener('keypress', getData);
}
function getData() {
    var keyCode = event.keyCode || event.which;
    if (keyCode == 13) {
            var xmlhttp;
            var main = document.getElementById("main");
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
                    //document.body.innerHTML = xmlhttp.responseText;
                    var i = 0;
                    main.innerHTML = "<p class=\"font-title pad-p\"><b>" + obj.responseData.feed.title + "</b></p>"
                    + "<p class=\"margins\"><small>" + obj.responseData.feed.description + "</small></p>";

                    while (obj.responseData.feed.entries[i] != 'undefined') {
                        var div = document.createElement("div");
                        div.id = i.toString();
                        if (i % 2 == 0) {
                            div.className = 'evedivcolor pad margin-per-div';
                        }
                        else
                            div.className += 'odddivcolor pad margin-per-div';


                        main.appendChild(div);
                        var inDiv = document.createElement("div");
                        div.appendChild(inDiv);
                        inDiv.className = 'margin-p pad-p';
                        inDiv.innerHTML = "<u><a href=\"#\" class=\"entry-title\">" + obj.responseData.feed.entries[i].title + "</a></u>"
                                                            + "<span class=\"pull-right\"><small>" + obj.responseData.feed.entries[i].publishedDate + "</small></span><br>"
                                                            + "<p>" + obj.responseData.feed.entries[i].contentSnippet + "</p>";
                        //div.className= 'pad';
                        i++;
                    }

                }
            }
            //xmlhttp.open("GET","http://dev-mystique.tavisca.com/apis",true);
            //xmlhttp.open("GET","http://dev-mystique.tavisca.com/api/deals/all?token=nhjnnmhid2eo5d24xn2scsns",true);
            //xmlhttp.open("GET", "http://dev-mystique.tavisca.com/api/deals/all?token=nhjnnmhid2eo5d24xn2scsns&$filter=Type eq 'hotel'", true)
            //xmlhttp.open("GET", "http://googlefeed.appacitive.com/?q=http://timesofindia.feedsportal.com/c/33039/f/533982/index.rss", true);
            xmlhttp.open("GET", "http://googlefeed.appacitive.com/?q=" + document.getElementById('url').value, true);
            xmlhttp.send();
        }
    }

