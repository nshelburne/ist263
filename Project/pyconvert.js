//"https://spotifycharts.com/regional/br/daily/latest/download"

/*return value selected value*/
function getCountry() {
    var obj = document.getElementById("mySelect");
    document.getElementById("entCountry").innerHTML = obj.options[obj.selectedIndex].text;
    console.log(obj.options[obj.selectedIndex].text);
    return obj.options[obj.selectedIndex].text;

}
  
/*used on test variable "data"*/
function convertCSVToJSON(str, delimiter = ' ') {
    const titles = str.slice(0, str.indexOf(',')).split(delimiter);
    const rows = str.slice(str.indexOf(',') + 1).split(',');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};

function getRawData(){
    /*d3.csv("https://cors-anywhere.herokuapp.com/https://spotifycharts.com/regional/"+str+"/daily/latest/download", function(data) {
    // Process the data, for the url provided
        for (var i = 1; i < data.length; i++) {
            /*console.log(data[i].Position);
            console.log(data[i].TrackName);
            console.log(data[i].Artist);
            console.log(data[i].Streams);
            console.log(data[i].Url);
            console.log(data);
        }
    });*/
    
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
    }

function displayTop20(array){
let songURIList;
songURIList = "71X7bPDljJHrmEGYCe7kQ8", "1YLUG87uQnxKbCK5YZzmes";
document.getElementById("num1").innerHTML= songURIList[0];
}
/* testing Purposes*/


console.log(convertCSVToJSON(data, ','))
