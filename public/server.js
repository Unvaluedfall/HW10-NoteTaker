// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(express.static(path.join(__dirname, "public")));

// Varibles
var arryNewNotes = [];

// HTML
// Index
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/assets/js/index.js", function(req, res) {
  res.sendFile(path.join(__dirname, "/assets/js/index.js"));
  });

// Notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });
app.get("/assets/css/styles.css", function(req, res) {
    res.sendFile(path.join(__dirname, "/assets/css/styles.css"));
  });
app.get("/notes/assets/js/index.js", function(req, res) {
  res.sendFile(path.join(__dirname, "/assets/js/index.js"));
  });

// API 
// Get - Notes
app.get("/api/notes", function(req, res) {
  var fsApiNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8", (err, data) =>{
      if(err) throw err;
        return data
    })
    // console.log(fsApiNotes)

    return res.json(fsApiNotes)
  });

// Post - Notes
app.post("/api/notes", function(req, res) {
  const newNotesArray = [];
  var newNotes = req.body;

  newNotes = JSON.stringify(newNotes)
  
  // console.log(newNotes)
  // console.log(fsApiNotes)
  // console.log(arryNewNotes[0])
  

  var fsApiNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8", (err, data) =>{
    if(err) throw err;
      return data
  })
console.log(fsApiNotes)

// fsApiNotes.split(["[","]"], 2)


newNotesArray.push(fsApiNotes)




//  fsApiNotes.map(notes => newNotesArray.push(notes))

newNotesArray.slice(0,1)

  console.log(newNotesArray)
  


    // var newARR = fsApiNotes.map(notes => )

  // fsApiNotes.map(notes => newNotes.push(notes));


  // var fsApiDB = fs.appendFile(path.join(__dirname, "../db/db.json"), newNotes, "utf8", (err) => {
  //   if (err) throw err;
  //   console.log('The "data to append" was appended to file!');
  // });
  res.end();
});

// Post - Delete
app.delete("/api/notes/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  