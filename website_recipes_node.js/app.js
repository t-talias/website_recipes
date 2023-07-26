// יצירת יכולת שאילתות
var myExpress=require('express')
var app=myExpress()

//יכולת קריאת נתונים 
var bodyParser=require('body-parser')
app.use(bodyParser())

//חיבור לקונטרולר של המתכונים
var MyRecepieController=require('./Controllers/recepiesController')
app.use('/Recipes',MyRecepieController)

//חיבור לקונטרולר של המשתמשים 
var MyUserController=require('./Controllers/userController')
app.use('/Users', MyUserController)

//התחברות  לשרת
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:1234', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
    credentials: true
}))

//ניתוב לקבצים חיצוניים כגוון תמונות 
var path=require('path')
//הגדרת התיקייה כציבורית 
app.use(myExpress.static(path.join(__dirname,'public')))

//website_recipes-התחברות למסד נתונים 
var Mymongoose=require('mongoose')
Mymongoose.connect("mongodb://localhost:27017/website_recipes", { useNewUrlParser: true, useUnifiedTopology: true })
var db=Mymongoose.connection
//פונקציה שתהיה בעת פתיחה 
db.on('open',()=>{
     console.log("db!!!!!!!!!!!👌");
})

app.listen(1234,()=>{
     console.log('✌✌✌✌✌✌✌✌✌');
})