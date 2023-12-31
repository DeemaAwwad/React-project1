export const validationUserData = (user)=>{


        let errors = {};
        if(user.name.trim() == ''){
            errors.name = 'username is required';
        }else if (user.name.trim().length <3){
            errors.name = 'username must be at least 3 characters'
        }

        if(user.email.trim() == ''){
            errors.email = 'useremail is required';
        }else if (user.email.trim().length <10){
            errors.email = 'useremail must be at least 10 characters'
        }

        if(user.password.trim() == ''){
            errors.password = 'userpassword is required';
        }else if (user.password.trim().length <3){
            errors.password = 'userpassword must be at least 3 characters'
        }

        return errors;
        
}