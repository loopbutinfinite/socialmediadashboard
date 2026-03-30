"use client";
import { TwitterData } from '@/lib/Interfaces/interfaces';
import { GetTwitterStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react'

const TwitterLikesCard = () => {
    const [twitterStats, setTwitterStats] = useState<TwitterData | null>(null);

    useEffect(() => {
        const fetchTwitter = async () => {
            const result = await GetTwitterStats();
            console.log(result)
            setTwitterStats(result);
        }
        fetchTwitter();
    }, []);

    const isPositive = (twitterStats?.likesChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center shadow-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Likes</p>
                <h3 className="text-4xl font-bold text-white">{twitterStats?.likes}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-5 w-[25px] h-[25px] ms-7" src="/images/icon-twitter.svg" alt="Twitter Icon" />
                <p className={`text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(twitterStats?.likesChange ?? 0)}%
                </p>
            </div>
        </div>
    )
}

export default TwitterLikesCard