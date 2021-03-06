// The script that loads the job listings for every F1 team.
// It uses the Fetch API to GET data from 'data/markup/' directory.
// The data present there is valid HTML markup containing job listings
// from every team, written by a Python script running on a separate
// server. After the data is retrieved successfully, it is set as the
// content of correspong <div> tags.

const url = 'data/markup/'
var allConstructors = ['MER', 'FER', 'RBR', 'REN', 'HAS', 'MCL', 'TOR', 'SAU', 'WIL'];

function fetchJobContent(url, cid) {
    fetch(url).then(function(response) {
        if(response.ok) {
            return response.text();
        }
        throw new Error('Network response was NOT OK.');
    }).then(function(jobData) { 
        document.getElementById(cid).innerHTML = jobData;
    }).catch(function(error) {
        console.log('There was a problem with the FETCH operation: ', error.message);
    });
}

allConstructors.forEach(function(team) {
    var finUrl = url + team;
    var contentId = team + "-CONTENT";
    fetchJobContent(finUrl, contentId);
});