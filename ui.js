class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }
//show profile....
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                 <div class="col-md-3">
                   <img class="img-fluid mb-3" src="${user.avatar_url
        }">
                   <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                 </div>
                 <div class="col-md-3">
                     <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                     <span class="badge badge-secondary">Public gists: ${user.public_gists}</span>
                     <span class="badge badge-success">Public followers: ${user.public_followers}</span>
                     <span class="badge badge-info">Public following: ${user.public_following}</span>
                 </div>
                 <br><br>
                 <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">website/blog: ${user.blog}</li>
                    <li class="list-group-item">Location : ${user.location}</li>
                    <li class="list-group-item">Member Since : ${user.created_at}</li>
                 </ul>
                 
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }


    //show repos......

    showRepos(repos){
        let output = '';
        repos.forEach(function(repo){
            output += `
            <div class="card card-body mb-2">
               <div class="row">
                  <div class="col-md-6">
                     <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                  </div>
                  <div class="col-md-6">
                     <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                     <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                     <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                  </div>
               </div>
            </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(msg,className){
        this.clearAlert();
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        const div = document.createElement('div');
        div.className = className;
        div.innerHTML = `<p>${msg}</p>`;
        container.insertBefore(div,search);
        setTimeout(function () {
            div.style.display = 'none';
        },3000);
    }


    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if (currentAlert){
            currentAlert.remove();
        }
    }


    clearProfile(){
        this.profile.innerHTML = '';
    }
}
