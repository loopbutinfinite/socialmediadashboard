"use client";
import { YoutubeData } from '@/lib/Interfaces/interfaces';
import { GetYoutubeStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react'

const YoutubeTotalViewsCard = () => {
    const [youtubeStats, setYoutubeStats] = useState<YoutubeData | null>(null);

    useEffect(() => {
        const fetchYoutube = async () => {
            const result = await GetYoutubeStats();
            console.log(result)
            setYoutubeStats(result);
        }
        fetchYoutube();
    }, []);

    const isPositive = (youtubeStats?.viewsChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 card rounded-xl p-5 flex justify-between items-center shadow-md hover:dark:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Total Views</p>
                <h3 className="text-4xl font-bold">{youtubeStats?.views}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-8 w-[25px] h-[25px] ms-5" src="/images/icon-youtube.svg" alt="Youtube Icon" />
                <p className={`text-md font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(youtubeStats?.viewsChange ?? 0)}%
                </p>
            </div>
        </div>
    )
}

export default YoutubeTotalViewsCard