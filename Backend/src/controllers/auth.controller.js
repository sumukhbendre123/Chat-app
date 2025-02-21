export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        //hash pasword
        const hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {

    }
}
export const login = (req, res) => {
    res.send("login route");
}
export const logout = (req, res) => {
    res.send("logout route");
}