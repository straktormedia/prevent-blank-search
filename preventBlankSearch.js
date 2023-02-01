const preventBlankSearch = (searchFormInput, searchFormButton) => {
  searchFormInput.addEventListener("input", (e) => {
    // Check if the user has typed
    let hasText = e.target.value != "";

    // Style the icon accordingly
    searchFormButton.style.cursor = hasText ? "pointer" : "auto";

    // Assign the correct behavior
    searchFormButton.setAttribute("type", hasText ? "submit" : "button");
  });
};

// Declare Variables
const searchFormInput = document.querySelector(".search-form__input");
const searchFormButton = document.querySelector(".search-form__button");

// Call function
preventBlankSearch(searchFormInput, searchFormButton);
