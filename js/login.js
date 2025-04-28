// login file for validation 


// first we will make a simple data for it 

const SqyyaData = [
    {email : "sqyya001@gmail.com",password : "123456"},
    {email : "example@domain.com",password : "123456"},
];

// variables declaration 
const email = document.getElementById('Email1').value;
const password = document.getElementById('Password1').value;
let isValid = true;


//validation function 
document.getElementById('formValidation').addEventListener('submit',function(e){
    e.preventDefault();
    // first we need to make the massage that will came when something get wrong
    document.querySelectorAll('.error-message').forEach(el => el.style.display='none');
    document.querySelectorAll("input").forEach(el => {
        el.classList.remove("error");
        el.classList.remove("success");
    });
    
    //email
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById('emailError').style.display='block';
        document.getElementById('Email1').classList.add('error');
        isValid=false;
    }
    else{
        document.getElementById('Email').classList.add('success');
    }
    //password
    if(!password || password.length <6){
        document.getElementById('passwordError').style.display='block';
        document.getElementById('Password1').classList.add('error');
        isValid=false;
    }
    else{
        document.getElementById('Password1').classList.add('success');
    }
    //now we need to check if the email and password are in database or not
    if(isValid){
        const user = SqyyaData.find(u => u.email ===email && u.password ===password);
        const status = document.getElementById('Status');
        if(user){
            status.textContent="تم تسجيل الدخول";
            status.style.color="#00B894";
        }
        else{
            status.textContent="البريد الإلكتروني أو كلمة المرور غير صحيحة";
            status.style.color="#D63031";

        }
    }

});