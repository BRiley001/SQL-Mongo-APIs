# Building NEM from Skratch
# Step 1
Create a new directory at root.
mkdir Code-Cardio && cd Code-Cardio
#Step 2 - Start your node
Inside the directory SQL-Mongo-APIs/Code-Cardio, run npm init -y to create a new package.json file. Then create a new javascript file for your server, touch index.js.
#Step 3 - Install packages
Install the following npm packages:
npm i express body-parser mongojs mongoose compression morgan helmet http-errors cookie-parser debug
# Step 4 - Create Express Server
Create basic **MVC** structure.
mkdir models views controllers.
This will create three folders.
**Predict Activity**
What are the names of those three folders?
# Step 5 - Express Generator
Use [Express Generator](http://expressjs.com/en/starter/generator.html) to automatically generate basic.
**Knoweldge Check Activity**
What is npx?
What does it DO ?
npx express-generator --ejs then type y for yes.
#  Add app.listen to app.js
js
const PORT = 777;
app.listen(PORT, ()=> console.log(`running on port ${PORT}`) );
# Step 7 - Walk through the Express Generator
**Explain Activity**
1. What does the routes folder do?
2. What is expressJS express.static doing?
3. What is difference between app.use() and app.get() ?
Inside the directory, SQL-Mongo-APIs/Code-Cardio/routes
# Add Body-Parser
Add Body-Parser to app.js or SQL-MONGO-APIS/Code-Cardio/app.js.
js
   var bodyParser = require('body-parser');
   app.use(bodyParser.urlencoded({
     extended: true
   }));
   app.use(
     bodyParser.text() 
   );
# Update Route
Add post route to index.js inside the routes SQL-MONGO-APIS/Code-Cardio/routes folder.
`js
var express = require('express');
var router = express.Router();


/* GET home page. */
router
.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express' 
  }
  );
})
.post('/setdata', async (request,response) => {
  console.log("request: ", request)
  console.log("request body: ", request.body)
  console.log("response: ", response)
  console.log("response body: ", response.body)
  response.end();
})

module.exports = router;
`
# Update EJS VIEW
Add a POST route for our form.
Note the name property on the input tags...
html
    <form action="/setdata" method="post">
      <input name="urlencoded" type="text">
      <button type="submit"></button>
    </form>
    <form action="/setdata" method="post">
      <input name="txtencoded" type="text">
      <button type="submit"></button>
    </form>
Now go to the page at http://localhost:777/ and add random text to the form and hit the submit button. Then check your console response.