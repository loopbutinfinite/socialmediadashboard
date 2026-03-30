"use client"
import { YoutubeData } from '@/lib/Interfaces/interfaces';
import { GetYoutubeStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react'

const YoutubeLikesCard = () => {
    const [youtubeStats, setYoutubeStats] = useState<YoutubeData | null>(null);

    useEffect(() => {
        const fetchYoutube = async () => {
            const result = await GetYoutubeStats();
            console.log(result)
            setYoutubeStats(result);
        }
        fetchYoutube();
    }, []);

    const isPositive = (youtubeStats?.likesChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center shadow-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Likes</p>
                <h3 className="text-4xl font-bold text-white">{youtubeStats?.likes}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-5 w-[25px] h-[25px] ms-3" src="/images/icon-youtube.svg" alt="" />
                <p className={`text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(youtubeStats?.likesChange ?? 0)}%
                </p>
            </div>
        </div>
    )
}

export default YoutubeLikesCard