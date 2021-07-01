
/**
 * @jest-environment jsdom
 */
import { handleSubmit } from "../src/client/js/formHandler"
import * as m from "../src/client/js/nameChecker"


//Mock function inside of handlesubmit. The fetch portion of this fn is tested elsewhere
m.checkForName= jest.fn().mockImplementation( async function(){
    return {
        sentence_list:
        [{
            text: "https://www.google.com"
        }],
        subjectivity: "objective",
        confidence: 100}
    } );


describe('Test form handler function call', () => {
    test('Checking valid post and UI update', async () => {


    //creating mock HTML that resembles out index.html (Otherwise JEST complains about null value on event start)
    document.body.innerHTML = ` <input id="name"></input> <div id="results"></div>`;

    const type = "objective";
    const num = 100;
    const mockinput = document.getElementById('name');
    //sets value to input field
    mockinput.value = 'https://www.google.com';
   
    //simulate button event to run handle submit (this runs with onclick on our index.html)
    const event = new Event('start');
    await handleSubmit(event);

    //check that input from our mock in line 10 matches the result of our output message in line 39
    expect(document.getElementById('results').innerHTML).toBe(`URL entered was: ${mockinput.value} <br>Text is: ${type} <br> Completed with a confidence score of ${num}`);
    })

});
