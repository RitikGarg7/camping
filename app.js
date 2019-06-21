var exp=require("express");
var app=exp();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgrounds=[
    {name:"Salmon Creek",image:"https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
    {name:"Granite Hill",image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
    {name:"Mountain Cook",image:"https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg"},

]

app.get("/",function(req,res) {
    res.render("landing.ejs");
});

app.get("/campgrounds",function(req,res) {
    

    res.render("campgrounds.ejs",{campgrounds:campgrounds});
})

app.get("/campgrounds/new",function(req,res) {
    res.render("new.ejs");
})


app.post("/campgrounds",function(req,res) {
   // get data from form and add to campgrounds array
   var name=req.body.name;
   var image=req.body.image;
   var newCampground={name:name,image:image};
   campgrounds.push(newCampground);
   // redirect to campgrounds page
   res.redirect("/campgrounds");
   res.send("you hit the post route")
});














app.listen(3000,function() {
    console.log("server started");
})