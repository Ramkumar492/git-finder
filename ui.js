class UI {

  constructor() {

    this.profile = document.querySelector('#profile');
    this.repos = document.querySelector('#repos');
  }

  showAlert(msg, className) {
    this.clearProfile();

    this.clearAlert();
    let div = document.createElement('div');
    div.className = className;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.searchContainer');
    container.prepend(div);

    setTimeout(this.clearAlert, 2000);



  }

  clearAlert() {

    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }

  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class= " card card-body mb-3">
           <div class= "row">
              <div class="col-md-3">
                <img src=${user.avatar_url} alt="" class="img-fluid mb-2">
                <a href=${user.html_url} target="_blank" class="btn btn-primary btn-block mb-5"> View Profile </a>
              </div>
              <div class="col-md-9">
                <span class="badge bg-primary"> Public Repos: ${user.public_repos} </span>
                  <span class="badge bg-secondary"> Public Gists: ${user.public_gists} </span>
                    <span class="badge bg-success"> Fol lowers: ${user.followers} </span>
                      <span class="badge bg-warning"> Following: ${user.following}</span>

                      <br /> <br>

                  <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company} </li>
                    <li class="list-group-item">Website/Blog:<a href='${user.blog}' target='_blank'> ${user.blog}</a></li>
                    <li class="list-group-item">Location: ${user.location} </li>
                    <li class="list-group-item">Member Since: ${user.created_at} </li>

                  </ul>

              </div>

           </div>

        </div>

        <h3 class="page-heading mb-3">Latest Repos</h3>

  `;
  }


  showRepos(repos) {

    let output = '';
    repos.forEach((repo) => {

      output += `
  <div class="card card-body mt-3 mb-3">
    <div class="row">
      <div class="col-md-6">

       <a href=${repo.html_url} target="_blank">${repo.name}</a>


      </div>
      <div class="col-md-6 ">
        <span class="badge bg-primary"> Stars: ${repo.stargazers_count} </span>
          <span class="badge bg-secondary"> Watchers: ${repo.watchers_count} </span>
            <span class="badge bg-success"> Forks: ${repo.forks_count} </span>
      </div>
    </div>

  </div>


  `;
    });

    this.repos.innerHTML = output;


  }

  clearProfile() {
    this.profile.innerHTML = '';
    this.repos.innerHTML = '';
  }
}
