function uploadFiles(){
    const fileInput = document.getElementById("fileInput")
    const files = fileInput.files;
    const fileList = document.createElement("ul");
    for(let i=0; i < files.length; i++){
        const listItem = document.createElement("li");
        listItem.textContent = files[i].name;
        fileList.appendChild(listItem);
    }
    document.body.appendChild(fileList);  
}

function sendMail(){
    const emailInput = document.getElementById("emailInput").value;
    const subjectInput = document.getElementById("subjectInput").value;
    const messageInput = document.getElementById("messageInput").value;

    const mailtolink = `mailto:${emailInput}?subject=${encodeURIComponent(subjectInput)}&body=${encodeURI|CompositionEvent(messageInput)}`;
    window.location.href = mailtoLink;
    
}