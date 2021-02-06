/* exported data */

var data = {
  view: 'edit-profile',
  profile: {
    username: '',
    fullName: '',
    location: '',
    avatarUrl: '',
    bio: ''
  },
  entries: []
};

var previousEntriesJSON = localStorage.getItem('local-storage');
if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}

var handleBeforeunload = function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('local-storage', dataJSON);
};

window.addEventListener('beforeunload', handleBeforeunload);
