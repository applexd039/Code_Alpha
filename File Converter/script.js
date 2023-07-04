function convertFile() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
    
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var convertedText = e.target.result;
            var fileName = file.name;
            
            if (fileName.endsWith('.cpp')) {
                // Remove .cpp extension and replace with .txt
                fileName = fileName.replace('.cpp', '.txt');
                
                // Set the download attribute to trigger file download
                var convertedLink = document.createElement('a');
                convertedLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(convertedText);
                convertedLink.download = fileName;
                convertedLink.style.display = 'none';
                document.body.appendChild(convertedLink);
                convertedLink.click();
                document.body.removeChild(convertedLink);
                
                // Display the converted content on the web page
                var convertedTextElement = document.getElementById('converted-text');
                convertedTextElement.textContent = convertedText;
                document.getElementById('converted-content').style.display = 'block';
            } else {
                alert('Please select a C++ file (.cpp).');
                clearFileInput();
            }
        };
        reader.readAsText(file);
    } else {
        document.getElementById('converted-content').style.display = 'none';
    }
}

function clearFileInput() {
    document.getElementById('file').value = '';
}
