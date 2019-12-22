function Social() {
    this.users = [];

    this.addUsers50 = function () {
        for (var x = 0; x < 50; x++) {
            var newUser = new User('Name: ' + x, 'Surname: ' + x, 'About Me: ' + x);
            newUser.populateAlbum();
            newUser.setProfilePicture();
            this.users.push(newUser);
        }
    }
    this.prinAllUsers = function () {
        var rootId = document.getElementById('root');
        for (var x = 0; x < this.users.length; x++) {
            var divUser = document.createElement('div');
            divUser.className = 'wrapper flex';

            var profilePicHolder = document.createElement('div');
            profilePicHolder.className = 'pic-holder';

            var userProfilePic = document.createElement('img');
            userProfilePic.className = 'profile-picture';
            userProfilePic.src = this.users[x].getProfile().getUrl();

            var userFirstName = document.createElement('div');
            userFirstName.className = 'fName b50';
            userFirstName.innerHTML = this.users[x].getFirstName();

            var userLastName = document.createElement('div');
            userLastName.className = 'lName b50';
            userLastName.innerHTML = this.users[x].getLastName();

            var userAboutMe = document.createElement('div');
            userAboutMe.className = 'aboutMe';
            userAboutMe.innerHTML = this.users[x].getAboutMe();

            profilePicHolder.appendChild(userProfilePic);
            divUser.appendChild(profilePicHolder);
            divUser.appendChild(userFirstName);
            divUser.appendChild(userLastName);
            divUser.appendChild(userAboutMe);
            rootId.appendChild(divUser);
            console.log(this.users[x]);
        }
    }
    this.addNewUser = function () {
        this.users.push(new User('newName: ' + this.users.length, 'newSurname: ' + this.users.length, 'newDrndrn: ' + this.users.length));
    }
}