function userForm(reqq,resp){
resp.write(`    <form action = "/submit" method = "post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <button type="submit">Submit</button>
    </form>`)
}
module.exports = userForm;