function noticeClick(object){
    const noticebox = document.getElementById('noticebox');
    const gallery = document.getElementById('gallery');
    
    if(object === noticebox){
        noticebox.style.backgroundColor = "#fff";
        gallery.style.backgroundColor = "#ededed";
    } else if(object === gallery){
        gallery.style.backgroundColor = "#fff";
        noticebox.style.backgroundColor = "#ededed";
    }
}