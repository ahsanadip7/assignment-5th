function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}
function getInputFieldTextById (id){
    const inputValue = document.getElementById(id).innerText;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


function showSectionById(id){
    document.getElementById('donate-card-container').classList.add('hidden')
    document.getElementById('history-container').classList.add('hidden')

    // show the section

    document.getElementById(id).classList.remove('hidden');
 }