//jshint esversion:6
const https= require("https");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
  res.render("home",{startingContent:homeStartingContent});

});

// Get all blogs
var axios = require('axios');
function App(){
const [setPosts] = useState ([]);

useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await api.get('https://adg-rec-task.herokuapp.com/');
      if (response && response.data) setPosts (response.data);
    } catch (err){
      console.log(err);
    }
  }

  return () => {
    
  }
  fetchPosts();
}, [])
}

// express.Router().get("/",async (res,req) =>{
//       try{
//         const blog = await axios.get("https://adg-rec-task.herokuapp.com/");
//         const Data = await JSON.stringify(blog.data)
//         res.render("home",{ Data })
//       }
//       catch(err){
//         console.log(err);
//       }
// })
// ----------------------------------------------------
// var config = {
//   method: 'get',
//   url: 'https://adg-rec-task.herokuapp.com/',
//   headers: { }
// };

// axios(config)
// .then( function (response) {
//   console.log(JSON.stringify(response.data));
//   console.log(JSON.stringify(response.data[0].title));
//   response.render("home" , {Data:(response.data)})

  
//     const Data= JSON.parse(response.data)
//     response.render("home" , {Data:(response.data)})
//     // const id= Data._id
//     // const title= Data.title
//     // const details = Data.details
//     // const author = Data.author

//     // return id
//     // return title
//     // return details
//     // return author
//     // console.log(id);
//     // console.log(title);

// })
// .catch(function (error) {
//   console.log(error);
// })


// Get blog by id

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://adg-rec-task.herokuapp.com/getBlog/624c6e505f149bf0b41076d5',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));

//   response.on("data", function(data){
//     const Data= JSON.parse(data)
//     const id= Data._id
//     const title= Data.title
//     const details = Data.details
//     const author = Data.author

//     res.setHeader("Content-Type", "text/html");
//     res.write(id)
//     res.write(title)
//     res.write(details)
//     res.write(author)
//     res.send()
// })
// .catch(function (error) {
//   console.log(error);
// })})



app.listen(3000, function() {
  console.log("Server started on port 3000");
})
