import UserSchema from "../models/User.js";

const HandleGetAllUsers = (req, res) => {
    try {
        res.send("MVC WORKING, Welcome");
    } catch (error) {
        console.log(error);
    }
}

const HandleRegisterUser = async (req, res) => {
    try {
        const isUserExists = await UserSchema.findOne({ email: req.body.email });
        if (isUserExists) {
            return res.status(404).json({ message: "User With This Email Already Exists" })
        }
        const createUser = new UserSchema({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        })
        const saveUser = await createUser.save();

        res.status(200).json({ user: saveUser })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const HandleLoginUser = async (req, res) => {
    try {
        const isUserExists = await UserSchema.findOne({ email: req.body.email });
        if (!isUserExists) {
            return res.status(404).json({ message: 'User Not Found' })
        }
        if (isUserExists.email === req.body.email && isUserExists.password === req.body.password) {
            res.status(200).json({ message: "Logged In Successfully", user: isUserExists })
        } else {
            res.status(400).json({ message: "Invalid Username And Password" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export { HandleGetAllUsers, HandleRegisterUser, HandleLoginUser };