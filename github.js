class Github {

  constructor() {

    this.page_count = 5;
    this.sort = 'created: asc';


  }

  async getUser(username) {

    const profileurl = `https://api.github.com/users/${username}`;

    let user_response = await fetch(profileurl);
    let profile = await user_response.json();

    let repo_url = `https://api.github.com/users/${username}/repos?per_page=${this.page_count}&sort=${this.sort}`;
    let repo_response = await fetch(repo_url);

    let repos = await repo_response.json();



    return {
      profile,
      repos
    }
  }


}
