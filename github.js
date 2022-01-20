class Github {

  constructor() {
    this.client_id = '0ecd77e1770c0db5c228';
    this.client_secret = '59108c8ff48235fedd06acebc5a3071d77fe2c99';
    this.page_count = 5;
    this.sort = 'created: asc';


  }

  async getUser(username) {
    const headers = {
      "Authorization": `Token   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`

      // this token is exposed intentionally
    }
    const profileurl = `https://api.github.com/users/${username}`;

    let user_response = await fetch(profileurl, {
      "method": "GET",
      "headers": headers
    });
    let profile = await user_response.json();

    let repo_url = `https://api.github.com/users/${username}/repos?per_page=${this.page_count}&sort=${this.sort}`;
    let repo_response = await fetch(repo_url, {
      "method": "GET",
      "headers": headers
    });

    let repos = await repo_response.json();



    return {
      profile,
      repos
    }
  }


}
