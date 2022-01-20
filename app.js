let github = new Github();
const ui = new UI();
document.querySelector('#searchUser').addEventListener('keyup', (e) => {

  if (e.target.value !== '') {
    github.getUser(e.target.value)
      .then(data => {


        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'alert alert-danger');
        } else {
          //Display user
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        
        }

      })
      .catch(err => console.log(err));


  } else {
    ui.clearProfile();
  }
})
