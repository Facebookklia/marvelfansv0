document.getElementById("downloadButton1").addEventListener("click", function () {
    var link = document.createElement('a');
    link.setAttribute('href', 'https://objects.githubusercontent.com/github-production-release-asset-2e65be/690478291/547c70d0-f294-4119-83bc-2e5a8e0b89e5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230912%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230912T092144Z&X-Amz-Expires=300&X-Amz-Signature=e57349a0eafb85c0dc038e7cf514134e4b4f6e224d8ed2b1cc63e5ca56042262&X-Amz-SignedHeaders=host&actor_id=128955128&key_id=0&repo_id=690478291&response-content-disposition=attachment%3B%20filename%3Dmarvel.fans.apk&response-content-type=application%2Fvnd.android.package-archive'); // আপনার প্রয়োজনীয় লিঙ্ক এবং ফাইলের নাম যোগ করুন
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
