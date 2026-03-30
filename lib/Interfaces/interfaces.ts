export interface FacebookData {
    id : number, 
    socialPlatform: string, 
    username: string, 
    followers: number,
    followerChange: number, 
    pageViews: number, 
    pageViewsChange: number, 
    likes: number,
    likesChange: number
}

export interface InstagramData {
    id: number, 
    socialPlatform: string,
    username: string, 
    followers: string,
    followerChange: number, 
    profileViews: string, 
    profileViewsChange: number,
    likes: number, 
    likesChange: number
}

export interface TwitterData {
    id: number, 
    socialPlatform: string, 
    username: string, 
    followers: number, 
    followerChange: number,
    retweets: number,
    retweetChange: number, 
    likes: number, 
    likesChange: number
}

export interface YoutubeData {
    id: number, 
    socialPlatform: string, 
    username: string,
    subscribers: number,
    subscriberChange: number, 
    views: number, 
    viewsChange: number, 
    likes: number, 
    likesChange: number
}