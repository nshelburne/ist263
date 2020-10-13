//"https://spotifycharts.com/regional/br/daily/latest/download"

/*return value selected value*/
function getCountry() {
    var obj = document.getElementById("mySelect");
    document.getElementById("entCountry").innerHTML = obj.options[obj.selectedIndex].text;
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

function getRawData(str){
    d3.csv("https://cors-anywhere.herokuapp.com/https://spotifycharts.com/regional/"+str+"/daily/latest/download", function(data1) {
    // Process the data, for the url provided
           console.log(data1);
    });
}

function getTop20(){/*should probably be apart of getRawData*/}

/* Filled for testing*/
/*Should be initially empty, then filled with parsed data from csv file*/
let songURIList;
songURIList = "lBDxNz93h4cBElMpeINpL", "1YLUG87uQnxKbCK5YZzmes";

/* testing Purposes*/
let data;
data = 'id, name, email\n0, Todd, todd@gmail.com\n1, Petra, petra@gmail.com';

var menuSubmit = document.querySelector(".submit-button");

console.log(convertCSVToJSON(data, ','))
