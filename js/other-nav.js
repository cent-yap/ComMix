document.getElementById('show-others').addEventListener('click', function() {
    const othersSection = document.querySelector('.others');
    if (othersSection.style.display === 'none' || othersSection.style.display === '') {
      othersSection.style.display = 'flex';
    } else {
      othersSection.style.display = 'none';
    }
  });

