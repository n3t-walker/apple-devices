window.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".device__tab");
    const tabsContent = document.querySelectorAll(".tabcontent");
    const tabsParent = document.querySelector(".device__category")

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(tab => {
            tab.classList.remove("tab__active");
        });
    };

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add("tab__active");
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {

        const target = event.target;

        if (target && target.classList.contains("device__tab")) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        };
    });
});