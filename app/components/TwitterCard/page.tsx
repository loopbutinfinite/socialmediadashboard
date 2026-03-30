"use client"
import { TwitterData } from '@/lib/Interfaces/interfaces';
import { GetTwitterStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react';

const TwitterCard = () => {

    const [twitterStats, setTwitterStats] = useState<TwitterData | null>(null);

    useEffect(() => {
        const fetchTwitter = async () => {
            const result = await GetTwitterStats();
            console.log(result)
            setTwitterStats(result);
        }
        fetchTwitter();
    }, []);

    const isPositive = (twitterStats?.followerChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-6 text-center shadow-md border-t-2 border-blue-400 hover:bg-slate-700 hover:cursor-pointer">
            <div className="text-gray-400 text-sm mb-2">
                <div className="flex justify-center gap-2 mb-5">
                    <img src="images/icon-twitter.svg" className="w-[20px] h-[20px]" alt="Youtube Icon" />
                    <div className="font-bold">
                        {twitterStats?.username}
                    </div>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-white">{twitterStats?.followers}</h2>
            <p className="text-gray-400 tracking-widest text-xs">FOLLOWERS</p>
            <p
                className={`mt-4 text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"
                    }`}
            >
                {isPositive ? "▲" : "▼"} {Math.abs(twitterStats?.followerChange ?? 0)} Today
            </p>
        </div>
    )
}

export default TwitterCard