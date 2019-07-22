// 1.

// let btnInput = document.getElementById('btn-input');

// btnInput.addEventListener ('click', () => {
// let attributevalue = "http://www.google.com";
// btn-input.innerText +=  attributevalue;
// })

// 2.
let select = document.getElementById('select')
let btnDeleteSelect = document.getElementById('btn-delete-select')
btnDeleteSelect.addEventListener('click', () =>{
    for( let i = 0; i < select.children.length; i++ ) {
        let select = select.children[i];
        if (select.textContent.toLocaleLowerCase() === btnDeleteSelect.value.toLocaleLowerCase()) {
        select.remove();
    }
  }

})