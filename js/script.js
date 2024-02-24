/* typing animation */

const typed = new Typed(".typing", {
    strings: ["", "Software Engineer Jr.", "Front-end Developer.","Web Developer.", "Back-end Developer.", "Python Developer."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})

/* side nav bar */

const nav = document.querySelector("main nav");
const navList = nav.querySelectorAll("div");
const allSection = document.querySelectorAll("section");

navList.forEach(nav1 => {
    const a = nav1.querySelector("a");

    a.addEventListener("click", () => {
        removeBackSection();
        navList.forEach((nav2, index) => {
            if (nav2.querySelector("a").classList.contains("active")) {
                addBackSection(index);
            }
            nav2.querySelector("a").classList.remove("active");
        });
        a.classList.add("active");
        showSection(a);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }
    });
});

function addBackSection(index) {
    allSection[index].classList.add("back-section");
}

function removeBackSection() {
    allSection.forEach(section => {
        section.classList.remove("back-section");
    });
}

function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];

    allSection.forEach(section => {
        section.classList.remove("active");
    });
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    navList.forEach(nav => {
        nav.querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === nav.querySelector("a").getAttribute("href").split("#")[1]) {
            nav.querySelector("a").classList.add("active");
        }
    });
}

const hireBtn = document.querySelector(".hire-me");
hireBtn.addEventListener("click", () => {
    const sectionIndex = hireBtn.getAttribute("data-section-index");
    console.log(sectionIndex)
    showSection(hireBtn);
    updateNav(hireBtn);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector("aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSection.forEach(section => {
        section.classList.toggle("open");
    });
}


/* contact me form handling */

const btn = document.querySelector("section.contact .btn");
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const subject = document.querySelector("#subject").value;
            const message = document.querySelector("#message").value;
            const body = `
            <html>
                <strong>Name</strong>: ${name}<br/>
                <strong>Email</strong>: ${email}<br/>
                <strong>Subject</strong> ${subject}<br/>
                <Strong>Message</strong>: ${message}<br/>
            </html>`;

            Email.send({
                SecureToken : "a4cdcb78-b925-4643-a06b-fce572758b6d",
                To : 'mekonnenyohannes91@gmail.com',
                From : "mekonnenyohannes91@gmail.com",
                Subject : subject,
                Body : body
            }).then(
              message => alert(message)
            );
        });
