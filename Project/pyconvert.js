//"https://spotifycharts.com/regional/br/daily/latest/download"


function getCountry() {
    var obj = document.getElementById("mySelect");
    document.getElementById("demo").innerHTML = 
    obj.options[obj.selectedIndex].text;
    return obj.options[obj.selectedIndex].text;
}
  


function convertCSVToJSON(str, delimiter = ' ') {
    const titles = str.slice(0, str.indexOf(',')).split(delimiter);
    const rows = str.slice(str.indexOf(',') + 1).split(',');
    return rows.map(row => {
        const values = row.split(delimiter);
        return titles.reduce((object, curr, i) => (object[curr] = values[i], object), {})
    });
};

function getTop20(){}

function getRawData(str){
    d3.csv("https://cors-anywhere.herokuapp.com/https://spotifycharts.com/regional/"+str+"/daily/latest/download", function(data1) {
    // Process the data, for the url provided
           console.log(data1);
    });
}




let data;

data = 'id, name, email\n0, Todd, todd@gmail.com\n1, Petra, petra@gmail.com';
var menuSubmit = document.querySelector(".submit-button");

console.log(convertCSVToJSON(data, ','))
