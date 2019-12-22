
function days() {
    var facenotebook = new Social();
    facenotebook.addUsers50();
    console.log(facenotebook.users);
    // for (var x = 1; x < 51; x++) {
    //     // console.log('Day: ' + x);
    //     if (x % 10 === 0) {
    //         facenotebook.addNewUser();
    //     }
    // }
    facenotebook.prinAllUsers();
}
days();