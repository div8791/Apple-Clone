document.addEventListener('DOMContentLoaded', function() {
    const announcement = document.querySelector('.announcement');
    announcement.style.color = 'white';
    const macBookProImage = document.querySelector('.mac img');
    macBookProImage.addEventListener('click', function() {
      alert('You clicked the MacBook Pro image!');
    });
  });
  