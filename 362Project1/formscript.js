//Javascript file for Project 1 by David Sobel
var phon = document.getElementById('phone').value;

for(i = 0;i++){
phon = phon.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
}