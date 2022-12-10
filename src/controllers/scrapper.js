
const Travel = require('#models/travel')
const config = require('#config')
const InstagramGetPosts = require('instagram-get-posts');

exports.scrapper = async () => {
    try {
        const instagramGetPosts = new InstagramGetPosts({
            'cookie': config.cookie,
            'user-agent': config.userAgent,
            'x-ig-app-id': config.x_ig_app_id
        });
    
        const accounts = [
            'travel.heavenss',
            'visit.the.america',
            'explorearizona',
            'hikingbangers',
            'maldiverss',
            'traveltobeautifulplacess',
            'belovedtravelz',
            'wonderofmaldives',
            'bestbeachspot',
            'travelingstraight',
            'explorearizona',
            'backpackerdestination',
            'travel.elegance'
        ]
    
        accounts.map(async account => {
            try {
                await setTimeout(() => {
                    console.log(account);
                }, 4000);
    
    
                let posts = await instagramGetPosts.getPosts({
                    profile: account, // profile from url instagram (https://www.instagram.com/rimemberchile/?hl=es-la)
                    maxPosts: 250,
                    postsType: 'all', // type of posts to get, possible values ​​are: image, video, all
                    getBase64: true // indicates if you want to get the image as base64
                })
        
                let newp = posts?.map((post) => {
                    let linksArr = []
        
                    if (post.type === "video") {
                        linksArr = [post?.videoUrl]
                    } else {
                        if (post?.imageUrl) {
                            linksArr = [post?.imageUrl]
                        } else {
                            linksArr = post?.images
                        }
                    }
        
                    let postReturn = {
                        type: post.type,
                        likes: post.likes,
                        caption: post.caption,
                        comments: post.comments,
                        links: linksArr
                    }
                    return postReturn
                })
        
                await Travel.create([...newp])  

            } catch (error) {
                
            }
           
    
    
        })
       
    
           
    } catch (error) {
       console.log(error);  
    }

   
}