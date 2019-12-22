function Picture(url,flag){
    this.url =url
    this.isProfilePic = flag;
    
    this.getUrl = function(){
        return this.url;
    }
}