// Future JavaScript will go here

//If Auth is doen with Linkedin below should run but currently as soon as we click on linkedin window changes and extension disappear
// 

//AC: For this we need to get it from csv or text box 
function launch() {
window.location.href = "https://www.linkedin.com/in/aradhika-chawla-45ba3015/";
let urls = []
document.querySelectorAll('[data-urn]').forEach(elem=>urls.push('https://www.linkedin.com/feed/update/'+elem.getAttribute("data-urn")));
console.log(urls);

}


var csvFileData = [
    ['Alan Walker', 'Singer'],
    ['Cristiano Ronaldo', 'Footballer'],
    ['Saina Nehwal', 'Badminton Player'],
    ['Arijit Singh', 'Singer'],
    ['Terence Lewis', 'Dancer']
 ];
   
 //create a user-defined function to download CSV file 
 function download_csv_file() {
 
     //define the heading for each row of the data
     var csv = 'Name,Profession\n';
     
     //merge the data with CSV 
     // AC: Update this with urls if that is available to send urns in csv else will get hard coded above value
     csvFileData.forEach(function(row) {
             csv += row.join(',');
             csv += "\n";
     });
  
     //display the created CSV data on the web browser 
     document.write(csv);
 
    
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     
     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'Famous Personalities.csv';
     hiddenElement.click();
 }