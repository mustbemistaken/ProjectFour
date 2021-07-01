require('jest-fetch-mock').enableMocks()
import { checkForName } from "../src/client/js/nameChecker"

//testing post function call. We mock the response by fetch and make sure the data returned is the same as the response
test('Checking Valid Post', async () => {

    fetch.mockResponseOnce(JSON.stringify({subjectivity: "objective"}))
    const data = await checkForName('/readForm', "https://www.google.com")
     
    expect(data.subjectivity).toEqual("objective");

    
})
    

