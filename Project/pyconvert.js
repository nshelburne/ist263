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

        /* Pass data from index page to top20 page */
        var rUrl = "https://nshelburne.github.io/ist263/Project/TopSongs.html?cc=" + country;
            window.location.href= rUrl;
    }

function getCC(){
 /*Pull country code from URL */
 let params = new URLSearchParams(location.search);
 var countrycode;
 countrycode= params.get('cc');

 /* concatenate url for file request */
 var url = 'https://cors-anywhere.herokuapp.com/https://spotifycharts.com/regional/'+countrycode+'/daily/latest/download';
 
 /* make get request */
 const Http = new XMLHttpRequest();
 Http.open("GET", url);
 Http.send();
  
 /* parse data by line*/ 
 Http.onreadystatechange = (e) => {       
   var csv = Http.responseText;
   var lines = csv.split("\n");
     return lines;
    }
}

function displayTop10(l){
        var linesStrings = l;
        let songURIList;
        var songInfo;
        let songInfo2;
        
        /*parse data to save URI code for top 6 songs;*/
          for (var i = 1; i < 7; i++) {
            songInfo=linesStrings[i];
            console.log(songInfo);
            songInfo2=songInfo.splice(-22);
            songURIList+=songInfo2;

    let songId;
    songId=["num1","num2","num3","num4","num5","num6"];/*Order of Songs */
    /* display spotify web players for coresponding songs */
    for (var i = 0; i < 6; i++) {
        var link = "https://open.spotify.com/embed/track/" + songURIList[i];
        var iframe = document.createElement('iframe');
        iframe.frameBorder=0;
        iframe.width="300px";
        iframe.height="380px";
        iframe.id="randomid";
        iframe.setAttribute("src", link);

        document.getElementById(songId[i]).appendChild(iframe);
    }
}

}
