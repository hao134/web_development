const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');
 
 
const app = express();
 
app.use(express.static(__dirname));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
 
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
 
app.post('/', function(req, res) {
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
 
  const data = {
 
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
 
  const jsonData = JSON.stringify(data);
 
  const url = "https://us10.api.mailchimp.com/3.0/lists/1fb64a86b6"
 
  const options = {
    method: "POST",
    auth: "shihhao:YOUR_API_KEY"
  }
 
  const request = https.request(url, options, function(response) {

    if (response.statusCode === 200) {
        res.sendFile(__dirname+"/success.html");
    } else {
        res.sendFile(__dirname+"/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 5000, function(){
    console.log("server is running on port 5000.");
});

// ---------------------------------------------------------------
// another version

// const express = require("express");
// const client = require("@mailchimp/mailchimp_marketing");
 
// const app = express();
 
// app.use(express.static("public"));        // this allows to import css from computer
// app.use(express.urlencoded({extended: true}));
 
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/signup.html");
// });
 
// client.setConfig({
//   apiKey: "8d4818c25728cea8aa17d6d31f740c1f-us10",
//   server: "us10", // example : us12
// });
 
// app.post("/", function (req, res) {
//     const firstName = req.body.fname;
//     const lastName = req.body.lname;
//     const email = req.body.email;
 
//     async function run() {
//         const response = await client.lists.addListMember("1fb64a86b6", {
//             email_address: email,
//             status: "subscribed",
//             merge_fields: {
//                 FNAME: firstName,
//                 LNAME: lastName
//             }
//             // members: [{
//             //     email_address: email,
//             //     status: "subscribed",
//             //     merge_fields: {
//             //         FNAME: firstName,
//             //         LNAME: lastName
//             //     }
//             // }]
//           });
//         console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`);
//         res.sendFile(__dirname + "/success.html");
//     }
//     run().catch(e => res.sendFile(__dirname + "/failure.html"));
// });



// app.listen(5000, function(){
//     console.log("server is running on port 5000.");
// });

// API KEY
// 8d4818c25728cea8aa17d6d31f740c1f-us10

// LIST ID
// 1fb64a86b6