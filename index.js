function showData(data) {
    const pre = document.createElement('pre');
    pre.innerHTML = JSON.stringify(jsonData, null, 4);

    // Tạo nút Copy
    const copyBtn = document.createElement('button');
    copyBtn.innerHTML = 'Copy';
    copyBtn.classList.add('copy-btn');

    // Xử lý sự kiện click vào nút Copy
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(data);
        copyBtn.innerHTML = 'Copied';

        const timeOut = setTimeout(() => {
            copyBtn.innerHTML = 'Copy';
            clearTimeout(timeOut);
        }, 3000);
    });

    // Chèn thẻ <pre> và nút Copy vào container
    const jsonContainer = document.getElementById('jsonContainer');
    jsonContainer.appendChild(pre);
    jsonContainer.appendChild(copyBtn);
}