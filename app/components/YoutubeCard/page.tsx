"use client"
import { YoutubeData } from '@/lib/Interfaces/interfaces';
import { GetYoutubeStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react';

const YoutubeCard = () => {

    const [youtubeStats, setYoutubeStats] = useState<YoutubeData | null>(null);

    useEffect(() => {
        const fetchYoutube = async () => {
            const result = await GetYoutubeStats();
            console.log(result)
            setYoutubeStats(result);
        }
        fetchYoutube();
    }, []);

    const isPositive = (youtubeStats?.subscriberChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-6 text-center shadow-md border-t-2 border-red-700 hover:bg-slate-700 hover:cursor-pointer">
            <div className="text-gray-400 text-sm mb-2">
                <div className="flex justify-center gap-2 mb-5">
                    <img src="images/icon-youtube.svg" className="w-[20px] h-[20px]" alt="Youtube Icon" />
                    <div className="font-bold">
                        {youtubeStats?.username}
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-white">{youtubeStats?.subscribers}</h2>
            <p className="text-gray-400 tracking-widest text-xs">FOLLOWERS</p>
            <p
                className={`mt-4 text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"
                    }`}
            >
                {isPositive ? "▲" : "▼"} {Math.abs(youtubeStats?.subscriberChange ?? 0)} Today
            </p>
        </div>
    )
}

export default YoutubeCard