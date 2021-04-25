const User = require('../../models/User')
const bcrypt = require('bcrypt')

const SessionController = {
    

    async createSession(req, res){
        const {username, password } = req.body;
        


        
        try {

            const user = await User.findOne({username: username})
            console.log("Usuario: " + user.username)
           
            
           
            if (await bcrypt.compare(password, user.password)) {
                return res.status(200).json();

            } else {
                return res.status(400).json(err);
                
            } 
        
        }
            catch (err) {
            return res.status(400).json(err);
        }
    }
}

module.exports = SessionController