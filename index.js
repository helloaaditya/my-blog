
  document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const categoryFilter = document.getElementById("category-filter");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const allBlogs = document.querySelector(".all-blogs");

    // Filter the blogs based on category
    categoryFilter.addEventListener("change", function () {
      const selectedCategory = categoryFilter.value;
      const blogs = allBlogs.getElementsByClassName("blog");

      // Hide or show blogs based on the selected category
      for (let i = 0; i < blogs.length; i++) {
        const blogCategory = blogs[i].querySelector("h5");

        if (selectedCategory === "all" || blogCategory.innerText === `#${selectedCategory}`) {
          blogs[i].style.display = "block";
        } else {
          blogs[i].style.display = "none";
        }
      }
    });

    // Search functionality
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.toLowerCase();
      const blogs = allBlogs.getElementsByClassName("blog");

      // Hide or show blogs based on the search term
      for (let i = 0; i < blogs.length; i++) {
        const blogTitle = blogs[i].querySelector("h3");

        if (blogTitle.innerText.toLowerCase().includes(searchTerm)) {
          blogs[i].style.display = "block";
        } else {
          blogs[i].style.display = "none";
        }
      }
    });
  });


  // Get all the question containers
var questionContainers = document.getElementsByClassName('question');

// Add click event listener to each question container
for (var i = 0; i < questionContainers.length; i++) {
  questionContainers[i].addEventListener('click', function() {
    // Toggle the class 'show' on the corresponding answer
    var answer = this.nextElementSibling;
    answer.classList.toggle('show');
  });
}




// ________________________________________________________________________

    (function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
  //   $('html').click(function() {
  //     $('.nav-dropdown').hide();
  //   });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery