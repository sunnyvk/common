
const config={
    production :{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default : {
        SECRET: 'mysecretkey',
        DATABASE: 'mongodb+srv://admin:Sunny2798@sunnyapi.kndypoa.mongodb.net/Common-API?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}



