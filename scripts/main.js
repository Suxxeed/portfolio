function changeProjects(project) {

    var elementMobile = document.getElementById('mobile');
    var elementDesktop = document.getElementById('desktopimg')

    //remove class for triggering animation
    elementDesktop.classList.remove("flip-in-diag-2-tl");

    //reading the property requires a recalc to re trigger animation
    void elementDesktop.offsetWidth;

    //change img path
    elementMobile.src="/assets/" + project + "_mobile.jpg";
    elementDesktop.src="/assets/" + project + "_desktop.jpg";

    //add css class for animations
    elementDesktop.classList.add("flip-in-diag-2-tl");
}