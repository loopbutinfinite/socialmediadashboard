"use client";
import { TwitterData } from '@/lib/Interfaces/interfaces';
import { GetTwitterStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react'

const TwitterRetweetsCard = () => {
    const [twitterStats, setTwitterStats] = useState<TwitterData | null>(null);

    useEffect(() => {
        const fetchTwitter = async () => {
            const result = await GetTwitterStats();
            console.log(result)
            setTwitterStats(result);
        }
        fetchTwitter();
    }, []);

    const isPositive = (twitterStats?.retweetsChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 card rounded-xl p-5 flex justify-between items-center shadow-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Retweets</p>
                <h3 className="text-4xl font-bold">{twitterStats?.retweets}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-8 w-[25px] h-[25px] ms-7" src="/images/icon-twitter.svg" alt="Twitter Icon" />
                <p className={`text-md font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(twitterStats?.retweetsChange ?? 0)}%
                </p>
            </div>
        </div>
    )
}

export default TwitterRetweetsCard