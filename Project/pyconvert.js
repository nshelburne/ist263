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
          /*var songName;*/

          for (var i = 1; i < 7; i++) {
            document.getElementById("results").innerHTML += lines[i]+'<br>'; 
            }
        }
        /* Pass data from index page to top20 page */
        var rUrl = "https://nshelburne.github.io/ist263/Project/TopSongs.html?cc=" + country;
            window.location.href= rUrl;
    }


function displayTop10(){
    let songURIList;
    var URI1= 1;
    var URI2= 2;
    var URI3= 3;
    var URI4= 4;
    var URI5= 5;
    var URI6= 6;
    let songURIList1
    songURIList1=[URI1, URI2, URI3, URI4, URI5, URI6];
    songURIList = ["71X7bPDljJHrmEGYCe7kQ8", "1YLUG87uQnxKbCK5YZzmes","1YLUG87uQnxKbCK5YZzmes","71X7bPDljJHrmEGYCe7kQ8","1YLUG87uQnxKbCK5YZzmes","71X7bPDljJHrmEGYCe7kQ8","1YLUG87uQnxKbCK5YZzmes"];/*Ur1 */
    let songId;
    songId=["num1","num2","num3","num4","num5","num6"];/*Name of Songs */
    
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


