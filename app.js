const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e) =>{
   const userText = searchUser.value;

   if(userText!== ''){
    github.getUser(userText).then(data => {
        if (data.profile.message === 'Not Found'){
            //show error()
            ui.showAlert('profile not found','alert alert-danger');
        }
        else{
            //show profile
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
        }
    });
   }

   else {
       //clear profile
       ui.clearProfile();


    }

   e.preventDefault();
});
