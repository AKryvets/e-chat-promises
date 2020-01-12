function validation(name, password, errorBlock) {
    if(typeof name == "string" && typeof password == "string"){
        if(name.length < 1 || password.length < 1){
            return false;
        }

        if(password.length < 6 ){
            return false;
        }

        if(password.indexOf(" ") != -1){
            return false;
        }

        if (!/[a-zа-яёії]/i.test(name)){
            return false;
        }

        return true;
    }else {
        return false;
    }
}
module.exports.valid = validation;