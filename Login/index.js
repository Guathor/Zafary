/* Contstantes*/
const boton = window.document.querySelector('#boton');
const mensajeError = document.querySelector('.error');


boton.addEventListener('click', mostrarDatos);


function mostrarDatos () {
    
    const input1 = window.document.querySelector('#email');
    const user = input1.value;
    const input2 = window.document.querySelector('#contraseña');
    const pass = input2.value;
    /*resetear passwor y email */
    console.log(user);
    input1.value = ''; 
    input1.focus(); 

    console.log(pass);
    input2.value = '';
    input2.focus(); 

    if (user === 'ejemplo@gmail.com' & pass === '123456'){  
        window.location.assign('http://127.0.0.1:5500/Layout/index.html'); 
    } else {
        mensajeError.classList.remove('hide');
        mensajeError.classList.add('visible');
        
    }
}



