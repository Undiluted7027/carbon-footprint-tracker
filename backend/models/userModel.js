class User{
    constructor(id, first_name, last_name, email, dob, location){
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.dob = dob;
        this.location = location;
    }
}

module.exports = User;