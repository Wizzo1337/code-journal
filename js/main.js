var $profileForm = document.querySelector('form');
var $img = document.querySelector('img');

var handleInput = function (event) {
  var imgValue = event.target.value;
  if (event.target.name === 'avatarUrl') {
    $img.setAttribute('src', imgValue);
  }
};

function handleSubmit(event) {
  event.preventDefault();
  data.profile.username = $profileForm.elements.username.value;
  data.profile.fullName = $profileForm.elements.fullName.value;
  data.profile.location = $profileForm.elements.location.value;
  data.profile.avatarUrl = $profileForm.elements.avatarUrl.value;
  data.profile.bio = $profileForm.elements.bio.value;
  $profileForm.reset();
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
}

$profileForm.addEventListener('input', handleInput);
$profileForm.addEventListener('submit', handleSubmit);
