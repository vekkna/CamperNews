$(document).ready(function () {
    $.getJSON('http://www.freecodecamp.com/stories/hotStories', data => {
        data.forEach(post => {
            console.log(post);
            const image = post.image || post.author.picture;
            $('#info').append(GenerateHTML(image, post.headline, post.link, post.upVotes.length, post.author.username));
        });
    });
});

function GenerateHTML(image, headline, link, numComments, author) {
    return '<a href=" ' + link + ' "><div class="entry"> <img class="image" src="' + image + '" alt = "entry image"><h5>' + headline + '</h5><p class = "comments"> ' + numComments + ' upvotes </p> <p class = "author"> ' + author + ' </p></div></a>';
}