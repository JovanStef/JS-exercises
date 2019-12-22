function User(firstName, lastName, aboutMe,profile) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.aboutMe = aboutMe;
    this.album = [];
    this.profile=profile;


    this.populateAlbum = function () {
        var random = getRandomNumber(1, 4);
         for (var x = 0; x < random; x++) {
             this.album.push(pictureArray[x]);
            
        }
    }
    this.setProfilePicture = function(){
        var randomPic = pictureArray[getRandomNumber(0,pictureArray.length-1)];
            this.profile=(new Picture(randomPic, true));
    }
    this.getProfile=function(){
        return this.profile;
    }
    this.getFirstName = function(){
        return this.firstName;
    }
    this.getLastName = function(){
        return this.lastName;
    }
    this.getAboutMe = function(){
        return this.aboutMe;
    }
   
}