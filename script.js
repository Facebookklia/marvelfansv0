document.getElementById("downloadButton1").addEventListener("click", function () {
    var link = document.createElement('a');
    link.setAttribute('href', 'https://raw.githubusercontent.com/mdrahad58/mdrahad58/main/Conf/Hide/DoraemonPuzzle_S.apk'); // আপনার প্রয়োজনীয় লিঙ্ক এবং ফাইলের নাম যোগ করুন
    link.setAttribute('download', 'file1.txt');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById("downloadButton2").addEventListener("click", function () {
    var link = document.createElement('a');
    link.setAttribute('href', 'https://raw.githubusercontent.com/mdrahad58/mdrahad58/main/Conf/Hide/EarnMoneyplugin_G.apk'); // আপনার প্রয়োজনীয় লিঙ্ক এবং ফাইলের নাম যোগ করুন
    link.setAttribute('download', 'file2.txt');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
