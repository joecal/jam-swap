users = User.create([{email:"amyers0@pen.io"},
{email:"esanchez1@craigslist.org"},
{email:"mwilliamson2@slideshare.net"},
{email:"hlittle3@ifeng.com"},
{email:"shawkins4@opensource.org"}]);

categories = Category.create([{name:"meetups"},
                              {name:"jobs"}]);

posts = Post.create([{title:"First post",description:"This is the first description in the first post.",category_id:1,user_id:1},
                      {title:"Second post",description:"This is the second description in the second post.",category_id:1,user_id:1},
                      {title:"Third post",description:"This is the third description in the third post.",category_id:2,user_id:2},
                      {title:"Fourth post",description:"This is the fourth description in the forth post.",category_id:2,user_id:2}]);

comments = Comment.create([{comment:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",category_id:1,post_id:1,user_id:1},
{comment:"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",category_id:1,post_id:2,user_id:2},
{comment:"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",category_id:2,post_id:3,user_id:3},
{comment:"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",category_id:2,post_id:4,user_id:4}]);
