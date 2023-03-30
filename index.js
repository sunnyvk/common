const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
// const multer = require('multer')
// const dotenv = require("dotenv");

// dotenv.config();
// const path = require('path')


// var cors = require('cors')
// app.use(cors())

// app.use(express.json())

// app.use(express.urlencoded({ extended: true }))


// const User=require('./models/user');
// const {auth} =require('./middlewares/auth');



// adding new user (sign-up route)
// app.post('/api/register',function(req,res){
//     // taking a user
//     const newuser=new User(req.body);

//    if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});

//     User.findOne({email:newuser.email},function(err,user){
//         if(user) return res.status(400).json({ auth : false, message :"email exits"});

//         newuser.save((err,doc)=>{
//             if(err) {console.log(err);
//                 return res.status(400).json({ success : false});}
//             res.status(200).json({
//                 succes:true,
//                 user : doc
//             });
//         });
//     });
//  });




// login user
// app.post('/api/login', function(req,res){
//     let token=req.cookies.auth;
//     User.findByToken(token,(err,user)=>{
//         if(err) return  res(err);
//         if(user) return res.status(400).json({
//             error :true,
//             message:"You are already logged in"
//         });

//         else{
//             User.findOne({'email':req.body.email},function(err,user){
//                 if(!user) return res.json({isAuth : false, message : ' Auth failed ,email not found'});

//                 user.comparepassword(req.body.password,(err,isMatch)=>{
//                     if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});

//                 user.generateToken((err,user)=>{
//                     if(err) return res.status(400).send(err);
//                     res.cookie('auth',user.token).json({
//                         isAuth : true,
//                         id : user._id
//                         ,email : user.email
//                     });
//                 });    
//             });
//           });
//         }
//     });
// });



// get logged in user
// app.get('/api/profile',auth,function(req,res){
//     res.json({
//         isAuth: true,
//         id: req.user._id,
//         email: req.user.email,
//         name: req.user.firstname + req.user.lastname

//     })
// });


//logout user
// app.get('/api/logout',auth,function(req,res){
//     req.user.deleteToken(req.token,(err,user)=>{
//         if(err) return res.status(400).send(err);
//         res.sendStatus(200);
//     });

// }); 




// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema)


// const userSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// const jwtSecret = 'your_secret_key';

// app.post('/api/signup', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({
//             email,
//             password: hashedPassword,
//         });

//         await user.save();

//         const token = jwt.sign({ userId: user._id }, jwtSecret);

//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while signing up');
//     }
// });

// app.post('/api/signin', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).send('Invalid email or password');
//         }

//         const isPasswordValid = await bcrypt.compare(password, user.password);

//         if (!isPasswordValid) {
//             return res.status(400).send('Invalid email or password');
//         }

//         const token = jwt.sign({ userId: user._id }, jwtSecret);

//         res.json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('An error occurred while signing in');
//     }
// });



// const User = new mongoose.Schema(
// 	{
// 		name: { type: String, required: true },
// 		email: { type: String, required: true, unique: true },
// 		password: { type: String, required: true },

// 	},

// )

// const model = mongoose.model('UserData', User)



// app.post('/api/register', async (req, res) => {
// 	console.log(req.body)
// 	try {
// 		const newPassword = await bcrypt.hash(req.body.password, 10)
// 		await User.create({
// 			name: req.body.name,
// 			email: req.body.email,
// 			password: newPassword,
// 		})
// 		res.json({ status: 'ok' })
// 	} catch (err) {
// 		res.json({ status: 'error', error: 'Duplicate email' })
// 	}
// })

// app.post('/api/login', async (req, res) => {
// 	const user = await User.findOne({
// 		email: req.body.email,
// 	})

// 	if (!user) {
// 		return { status: 'error', error: 'Invalid login' }
// 	}

// 	const isPasswordValid = await bcrypt.compare(
// 		req.body.password,
// 		user.password
// 	)

// 	if (isPasswordValid) {
// 		const token = jwt.sign(
// 			{
// 				name: user.name,
// 				email: user.email,
// 			},
// 			'secret123'
// 		)

// 		return res.json({ status: 'ok', user: token })
// 	} else {
// 		return res.json({ status: 'error', user: false })
// 	}
// })







//Routes
// app.post("/login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 

// app.post("/register", (req, res)=> {
//     const { name, email, password} = req.body
//     User.findOne({email: email}), exec((err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })

// }) 




// get logged in user
// app.get('/register',function(req,res){
//     res.json({
//         name: req.user.name,
//         email: req.user.email

//     })
// });



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// //Routes
app.post("/login", async(req, res)=> {
    const { email, password} = req.body


    const user= await User.findOne({ email: email})
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    console.log(user);
    })


app.post("/register", async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.findOne({ email: email })
    if (user) {
       return res.json({ message: "User already registerd" })
    } else {
        const user = await  User.create({
            name,
            email,
            password
        })
        console.log(user);
        // user.save(err => {
        //     if(err) {
        //         res.send(err)
        //     } else {
        //         res.send( { message: "Successfully Registered, Please login now." })
        //     }
        // })
    }
})






// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const app = express();
// app.use(bodyParser.urlencoded({extended : false}));
// app.use(bodyParser.json());
// app.use(cookieParser());
// var cors = require('cors')
// app.use(cors())

// // Define a secret for JWT
// const JWT_SECRET = 'your_secret_key_here';

// // Define a user model with an email and password
// const User = {
//   email: String,
//   password: String
// };

// // Define a function to create a new user account
// async function signup(req, res) {
//   // Get the email and password from the request body
//   const { email, password } = req.body;

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create a new user with the email and hashed password
//   const user = new User({
//     email,
//     password: hashedPassword
//   });

//   // Save the user to the database
//   await user.save();

//   // Send a response with the new user's email
//   res.json({ email: user.email });
// }

// // Define a function to log in with an existing user account
// async function signin(req, res) {
//   // Get the email and password from the request body
//   const { email, password } = req.body;

//   // Find the user with the given email
//   const user = await User.findOne({ email });

//   // If the user doesn't exist, send an error response
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }

//   // Check if the password is correct
//   const isPasswordCorrect = await bcrypt.compare(password, user.password);

//   // If the password is incorrect, send an error response
//   if (!isPasswordCorrect) {
//     return res.status(401).json({ error: 'Invalid email or password' });
//   }

//   // Generate a JWT token
//   const token = jwt.sign({ email: user.email }, JWT_SECRET);

//   // Send a response with the JWT token
//   res.json({ token });
// }

// // Define the routes for signup and signin
// app.post('/signup', signup);
// app.post('/signin', signin);


















mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/Common-API?retryWrites=true&w=majority')
        .then(() => {
            console.log('connected to MongoDB')
            app.listen(4000, () => {
                console.log('Node api is running on port 4000')
            })
        }).catch((error) => {
            console.log(error)
        })