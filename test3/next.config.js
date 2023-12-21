/** @type {import('next').NextConfig} */
const nextConfig = {
    // images:{
    //     domains:['plus.unsplash.com']
    // }
    images:{
        remotePatterns:[
            // {
            //     protocol:'https',
            //     hostname:'plus.unsplash.com'
            // }
            {
                protocol:'https',
                hostname:'**'
            }
        ]
    }
}

module.exports = nextConfig
