//templates

function createPost(){
  //templates
  var pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  
  var postTemplate = _.template(document.getElementById("post-template").innerHTML);
  
  var commentsTemplate = _.template(document.getElementById("comments-template").innerHTML);
  
  //get values for templates
  var postTitle = document.getElementById("PostTitle").value;
  var postAuthor = document.getElementById("postAuthor").value;
  var post = document.getElementById("postBody").value
}