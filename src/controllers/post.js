const User = require( '#models/user')
const config = require( '#config')

const { IgApiClient } = require('instagram-private-api');
const axios = require('axios');
const CronJob = require("cron").CronJob;
const InstagramGetPosts = require('instagram-get-posts');


exports.post =  async function (req ,res){
    const ig = new IgApiClient();

    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const imageBuffer = await axios.get('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg', {
        responseType: 'arraybuffer'
    });

    console.log("sfdgfhgjhkkjgfdsa");
    // await ig.publish.photo({
    //     file: imageBuffer.data,
    //     caption: 'Really nice photo from the internet!',
    // });    
}