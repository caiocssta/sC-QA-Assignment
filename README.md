# spriteCloud-QA-Assignment

## 1. You have listed the most important scenarios to automate (minimal 3 API and 3 Web)
## 2. You have automated the scenarios
## 3. You managed to run the tests in a CI/CD environment
 The CI tool I've selected is CircleCI. I'm not a PRO on that, but I tried my best.
## 4. You share the codebase through GitHub or GitLab
 Here it is! :)
## 5. You add a results folder to the repository, including a result report (HTML,json,xml,etc)
 The folder containing the *mockawesome* JSON and HTML reports is located on the *cypress/reports* directory. 
## 6. Manage to upload the test results to Calliope.pro and share a link to the results.
 [Here are the Calliope Pro reports](https://app.calliope.pro/reports/105938). The CI also has a step that automatically sends a new report to CalliopePro everytime it's executed.

## 7. The codebase has a readme.md file explaining:
### a. How to run the tests locally

For running the tests locally, you must have *NodeJS* installed. The project was developed using the version v14. So if needed, *nvm* might help on that. :) 


Once you've installed NodeJS, you can install the project packages and dependencies using the command 
`npm install`. After that you'll be able to run the tests! 

With the command `npm run cy:test`, you can trigger the script configured to execute all the tests (except the commented ones).

After the tests execution, with the command `npm run cy:report` you can generate a single JSON report for all the suites, and also a cool HTML report! \
Both is going to be located on the *cypress/repo-reports* folder.

### b. How to run the test in a CI/CD pipeline
In order to trigger the CI, all you have to do is *push any change* to the *main* branch on the repository. 

### c. Has a link to the results in Calliope.pro
Here is the link for the Calliope.pro report: https://app.calliope.pro/reports/105938
### d. What you used to select the scenarios, what was your approach? & e. Why are they the most important

The website given to automate web is quite messy and not so much intuitive (some elements has the same ID value, and a lot others doesn't even have an ID). Besides of the Book Store area, I've decided to automate 
 - the flow that validates if all the sublist links are visible on the website sections, 
- the flow related to login on the BookStore
- register-page on BookStore
- if the books information are being displayed correctly
- the 'Add To Your Collection' feature
- assuring that wasn't able to add the same book twice
- deleting all books from account
- the Log Out functionality.
    
    *OBS.: You're going to see that there are some flows that are commented to do not get executed (xit). Those flows are broken and not working properly on the website, but I've put them in the suite to assure the coverage.*
 
 For the Pet Store API, I've selected the main flows related to each part of the store (Pet, Store and User), such as adding a new object with a POST request, retrieving an existing object with GET and deleting a object with DELETE.


### f. What could be the next steps to your project
Actually is quite hard to work on the website that was given, since it doesn't give so much support for tests automation, and I'm not using *xpath* selectors on the project.

For the API, would be good to keep incrementing the suite with tests for the other parts of the API, such as updating information, and etca.
    
    OBS.: One thing I've tried to do on the Test Cases and couldn't find a good way, was validate if the requests really updated the API database (such as trying to retrieve a 
    deleted object to see if it was really deleted), since the API takes some seconds (sometimes even minutes) to update it's database after the request is processed.
    
    I've also noticed some other people is using the Swagger at the same moment (since it's public), and some data is constantly deleted or updated by someone else.
## 8. You nail the interviews!
