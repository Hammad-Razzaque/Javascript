const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


function showError(input, message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSucess(input){
    const formControl=input.parentElement;
    formControl.className='form-control sucess';
}

form.addEventListener( 'submit',function(e){
    e.preventDefault();
// console.log (username.value);
    if(username.value === ''){

        showError(username,'Username is required');
    }
    else{
        showSucess(username);
    
    }
    if(email.value === ''){

        showError(email,'Email is required');
    }
    else{
        showSucess(email);
    }

    if(password.value === ''){

        showError(password,'Password is required');
    }
    else{
        showSucess(password);
    }
    
    if(password2.value === ''){

        showError(password2,'Password is required');
    }
    else{
        showSucess(password2);
    }

});
