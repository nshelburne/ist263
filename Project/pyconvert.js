/*return value selected value*/
function getCountry() {
    var obj = document.getElementById("mySelect");
    document.getElementById("entCountry").innerHTML = obj.options[obj.selectedIndex].text;
    console.log(obj.options[obj.selectedIndex].text);
    return obj.options[obj.selectedIndex].text;
}

function getRawData(){
    
        /* getting dropdown value */
        var element = document.getElementById("mySelect");  
        var country = element.value;                        

        /* concatenate url for file request */
        var url = 'https://cors-anywhere.herokuapp.com/https://spotifycharts.com/regional/'+country+'/daily/latest/download';
        
        /* make get request */
        const Http = new XMLHttpRequest();
        Http.open("GET", url);
        Http.send();
         
        /* parse data */
        Http.onreadystatechange = (e) => {       
          var csv = Http.responseText;
          var lines = csv.split("\n");

          for (var i = 1; i < lines.length; i++) {
            document.getElementById("results").innerHTML += lines[i]+'<br>'; 
            }
        }
        var rUrl = "https://nshelburne.github.io/ist263/Project/TopSongs.htm?cc=" + country;
            window.location.href= rUrl;
    }


function displayTop10(){
    let songURIList;
    songURIList = ["71X7bPDljJHrmEGYCe7kQ8", "1YLUG87uQnxKbCK5YZzmes","1YLUG87uQnxKbCK5YZzmes","71X7bPDljJHrmEGYCe7kQ8","1YLUG87uQnxKbCK5YZzmes","71X7bPDljJHrmEGYCe7kQ8","1YLUG87uQnxKbCK5YZzmes"];
    let songId;
    songId=["num1","num2","num3","num4","num5","num6"];
    
    for (var i = 0; i < 6; i++) {
        var link = "https://open.spotify.com/embed/track/" + songURIList[i];
        var iframe = document.createElement('iframe');
        iframe.frameBorder=0;
        iframe.width="300px";
        iframe.height="380px";
        iframe.id="randomid";
        iframe.setAttribute("src", link);

        document.getElementById(songId[i]).appendChild(iframe);
 }}


