import { checkForName } from "./nameChecker"

//function calls a post request fn and uses its response to populate our view with select elements from meaningcloud response
async function handleSubmit(event) {

    event.preventDefault()


    // check what text was put into the form field and run it through a regex check to see if its a valid URL. If so, run a post request to fetch data against URL. Otherwise, alert user of an invalid URL entry.
    let formText = document.getElementById('name').value
    console.log(formText)

    if(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(formText)){
    
    const data = await checkForName('/readForm', {formtext:formText})
    document.getElementById('results').innerHTML = `URL entered was: ${data.sentence_list[0].text} <br>Text is: ${data.subjectivity} <br> Completed with a confidence score of ${data.confidence}`;
    document.getElementById('results').style.border= "2px solid black ";
 } else{

    alert("invalid URL")
 }
}  


export { handleSubmit}



