
document.addEventListener('DOMContentLoaded', function() {

    const modalContainer= document.createElement('container')
    const textInput = document.getElementById('textInput');
    const buttonChange = document.createElement('btn')
    const container = document.querySelector('.container');
    const submitButton = document.querySelector('.enter');
    const titleContainer = document.querySelector('h1');
    
    
    modalContainer.appendChild(buttonChange)
    let colorState = 0;
    
    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
          alert(textInput.value)
          
        }
    });
    
    submitButton.addEventListener('click', function() {
        colorState = (colorState + 1) % 3;
        switch (colorState) {
            case 0: 
                container.style.backgroundColor = 'white';
                textInput.style.color = 'black';
                titleContainer.style.color = 'black';
                break;
            case 1: 
                container.style.backgroundColor = 'black';
                textInput.style.color = 'white';
                titleContainer.style.color = 'white'
                break;
            case 2: 
                container.style.backgroundColor = 'lightblue';
                textInput.style.color = 'red';
                titleContainer.style.color = 'red';
                break;
        }
    });
});