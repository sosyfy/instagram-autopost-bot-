const Travel = require('#models/travel')
const config = require('#config')

const { IgApiClient } = require('instagram-private-api');
const axios = require('axios');
const CronJob = require("cron").CronJob;


exports.post = async function () {
    const ig = new IgApiClient();

    ig.state.generateDevice(config.userName);
    await ig.account.login(config.userName, config.password);



    // const cronInsta = new CronJob("30 5 * * *", async () => {
    //     postToInsta();
    // });

    const posts = await Travel.find().limit(2).sort({ likes: -1 })

    posts.map(async post => {

        let mediaBuffers = post.links.map( link => {
            return new Promise((resolve, reject) => {

                resolve( axios.get( link, { responseType: 'arraybuffer' }).then((res)=>{
                  return  res.data 
               }));
              });
             
        })

        Promise.all(mediaBuffers).then(results => {
            // results is an array of the resolved values
             mediaBuffers = results
        });

        // console.log( await mediaBuffers);
        if (post.type === "video") {
            await ig.publish.video({
                file: mediaBuffers[0],
                caption: post.caption
            })
        } else {
           let items = await mediaBuffers.map((med)=>{
                let item = {
                  file: med,
                } 
                return item
            })

            console.log(items);
            await ig.publish.album({
                items: items,
                caption: post.caption,
            })
        }
    })


}