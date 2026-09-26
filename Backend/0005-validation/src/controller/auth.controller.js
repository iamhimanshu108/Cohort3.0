/**
 * 
 * req.body = {email, phone, password}
 */

export async function register(req, res){
    

    const {email, phone, password} =  req.body

    const errors = []



    if(!email){
       errors.push({
        field: "email",
        message: "Email is Required"
       })
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(email && !emailRegex.test(email)){
        errors.push({
            field: "email",
            message: "Invalid Email Address"
        })
    }

    if(!phone){
        errors.push({
            field:"phone",
            message: "Phone No is Required"
        })
    }

    const phoneRegex = /'^(?:\+91[\-\s]?|0)?[789]\d{9}$/

    if(phone && !phoneRegex.test(phone)){
         errors.push({
            field:"phone",
            message: "Phone No is Required"
        })
    }


    if(!password && password.trim()){
        errors.push({
            field: "password",
            message: "Password is required"
        })
    }

    if((password.trim()).length < 6){
        errors.push({
            field: "password",
            message: "Paaword field must be min 6 Char"
        })
    }







}