let features = document.getElementById('features-btn');
let company = document.getElementById('company-btn');


features.addEventListener('click', () => {
    document.getElementById("mydropdown").classList.toggle("show");
})


company.addEventListener('click', () => {
    document.getElementById("secondDropdown").classList.toggle("show");
})

function sidedrop() {
  document.getElementById("sidedropdown").classList.toggle("sideshow")
}

function sidedrop2() {
  document.getElementById("sidedropdown-2").classList.toggle("sideshow")
}



window.onclick = function(event) {
    if (!event.target.matches('#features-btn') && !event.target.matches('#company-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


  function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

