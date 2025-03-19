
document.addEventListener('DOMContentLoaded', function() {

    const modalContainer= document.createElement('dialog')
    modalContainer.style.width = '400px';  
    modalContainer.style.height = '300px'; 
    modalContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.91)';
    modalContainer.style.borderRadius = '8px';
    modalContainer.style.border = "none";

    const modalItems = document.createElement('div')
    modalItems.style.display = 'flex'
    modalItems.style.justifyContent = "space-between"
    modalItems.style.flexDirection = "column"
    modalItems.style.padding = "20px"
 
    const modalText = document.createElement('p');
    modalText.style.fontSize = "50px"
    modalText.style.textAlign = "center"
   
    const buttonChange = document.createElement('button');
    buttonChange.textContent = "click"
    buttonChange.style.cursor = "pointer"
    buttonChange.style.marginTop = "10px";
    buttonChange.style.bottom = "5px";
    buttonChange.style.padding = "10px 20px";
    buttonChange.style.color = "black";
    buttonChange.style.border = "1px solid black"; 
    buttonChange.style.borderRadius = "8px";

    const textInput = document.getElementById('textInput');
    const container = document.querySelector('.container');
    const submitButton = document.querySelector('.enter');
    const titleContainer = document.querySelector('h1');
    modalItems.appendChild(modalText)
   modalItems.appendChild(buttonChange)
    modalContainer.appendChild(modalItems)
    document.body.appendChild(modalContainer);

    let colorState = 0

    textInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            modalText.textContent = textInput.value;
            modalContainer.showModal();
        }
    });
    buttonChange.addEventListener('click', function() {
        colorState = (colorState + 1) % 3;
        switch (colorState) {
            case 0:
                modalContainer.style.backgroundColor = 'white';
                container.style.backgroundColor = 'white';
                modalText.style.color = 'black';
                titleContainer.style.color = 'black';
                break;
            case 1: 
                modalContainer.style.backgroundColor = 'black';
                container.style.backgroundColor = 'black';
                modalText.style.color = 'white';
                titleContainer.style.color = 'white';
                break;
            case 2: 
                modalContainer.style.backgroundColor = 'lightblue';
                container.style.backgroundColor = 'lightblue';
                modalText.style.color = 'red';
                titleContainer.style.color = 'red';
                break;
        }
    });
});