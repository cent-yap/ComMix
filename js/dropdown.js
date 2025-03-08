function toggleDropdown() {
    const dropdown = document.getElementById('dropdownList');
    // Toggle the dropdown visibility
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('show-status').addEventListener('click', function(event) {
    event.stopPropagation();
    const goList = document.querySelector('.go-list');
    if (goList.style.display === 'none' || goList.style.display === '') {
      goList.style.display = 'block';
    } else {
      goList.style.display = 'none';
    }
  });

  document.addEventListener('click', function(event) {
    const goList = document.querySelector('.go-list');
    const statusButton = document.getElementById('show-status');
    if (goList.style.display === 'block' && !goList.contains(event.target) && !statusButton.contains(event.target)) {
      goList.style.display = 'none';
    }
  });