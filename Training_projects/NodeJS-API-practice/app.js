const https = require('https');

/*Print the message to console */
function printMessage(username, badgeCount, points, pointType) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}


function getProfile(username){

    const request = https.get(

        /*API URL*/
        `https://teamtreehouse.com/profiles/${username}.json`,



        /*Event*/
        (response) =>{

            /*Logs the statusCode Propriety from the requested URL*/
            console.dir(response.statusCode);


            let body = '';

            /*The data event executes a callback function when the data on the API is accessed*/
            response.on('data', (data) =>{

                /*This line of code concatenates the data to a workable string*/
                body += data.toString();
            });
            response.on('end', () => {

                /*The 'JSON.parse' parses the 'body' string to a workable object*/
                const profile = JSON.parse(body)
                printMessage(username, profile.badges.length, profile.points.total)

            })
        }
    
    );


}



/* The slice() method ignores the first 2 items on the argv array from the process object*/ 
const users = process.argv.slice(2)

/*This line executes the getProfile() function for each user we input on the node CLM */
users.forEach(getProfile)



