const footer = () => {
    const currentYearUI = document.querySelector(".copyright-text span"), 
    currentYear = new Date().getFullYear();

    currentYearUI.textContent = currentYear;
};

export default footer;