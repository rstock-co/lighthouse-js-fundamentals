var facebookProfile = {
  name: "Richard Stock",
  friends: 1073,
  messages: ["Hey everyone!", "It is my birthday today!", "Wasssssup"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    facebookProfile.friends -= 1;
  },
};

console.log(facebookProfile.friends);
facebookProfile.removeFriend();
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.addFriend();
console.log(facebookProfile.friends);

console.log(facebookProfile.messages);
facebookProfile.postMessage("Wooooo!");
console.log(facebookProfile.messages);
facebookProfile.deleteMessage(3);
console.log(facebookProfile.messages);
