function toggleBlog(id) {
    const blogContent = document.getElementById(id);
    const arrow = blogContent.previousElementSibling.querySelector('.arrow');

    if (blogContent.style.display === "block") {
        blogContent.style.display = "none";
        arrow.classList.remove('active');
    } else {
        blogContent.style.display = "block";
        arrow.classList.add('active');
    }
}