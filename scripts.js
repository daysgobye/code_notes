let note = document.querySelector(".note")
const noteArea = document.querySelector('.content')
const htmlbtn = document.querySelector('.html')
const cssbtn = document.querySelector('.css')
let noteText = localStorage.getItem('note') || ""
emmet.require('textarea').setup({
	pretty_break: true, // enable formatted line breaks (when inserting 
			            // between opening and closing tag) 
    use_tab: true       // expand abbreviations by Tab key

});

function cssClass(){
    note.classList.toggle('emmet-syntax-CSS')
}
function htmlClass(){
    note.classList.toggle('emmet-syntax-HTML')
}
// this saves your work as you type
function saveNote(){
    noteText = note.value
    localStorage.setItem('note', noteText)
}

htmlbtn.addEventListener('click', htmlClass)
cssbtn.addEventListener('click', cssClass)
note.addEventListener('keyup', saveNote)
note.value = noteText