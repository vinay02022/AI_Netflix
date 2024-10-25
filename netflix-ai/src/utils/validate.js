 const validateData=(email,password)=>{
     
     const isEmailVal=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
     console.log(isEmailVal);
    const isPassValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    console.log(isPassValid);
    
    if(!isEmailVal) return "Email Id is not valid ."
    if(!isPassValid) return "Password is not Valid ."
    return null;
}
export default validateData;