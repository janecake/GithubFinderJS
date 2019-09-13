class Github {
  constructor(){
    this.client_id = 'e9515d338fbc44895a1c';
    this.client_secret = 'ca780b4302c9e6ef6fa870ff703c863d9fa3ab42';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  } 

  async getUser(user) {
    const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }

  }

}