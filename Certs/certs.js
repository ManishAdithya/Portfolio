function toggleCert(certId) {
    const certContent = document.getElementById(certId);
    const arrow = certContent.previousElementSibling.querySelector('.arrow');

    if (certContent.style.display === 'block') {
        certContent.style.display = 'none';
        arrow.classList.remove('active');
    } else {
        certContent.style.display = 'block';
        arrow.classList.add('active');
    }
}
