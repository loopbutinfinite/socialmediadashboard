"use client";
import { InstagramData } from '@/lib/Interfaces/interfaces';
import { GetInstagramStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react'

const InstagramLikesCard = () => {
    const [instagramStats, setInstagramStats] = useState<InstagramData | null>(null)

    useEffect(() => {
        const fetchInstagram = async () => {
            const result = await GetInstagramStats();
            console.log(result)
            setInstagramStats(result);
        }
        fetchInstagram();
    }, []);

    const isPositive = (instagramStats?.likesChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center shadow-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Likes</p>
                <h3 className="text-4xl font-bold text-white">{instagramStats?.likes}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-5 w-[25px] h-[25px] ms-8" src="/images/icon-instagram.svg" alt="" />
                <p className={`text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(instagramStats?.likesChange ?? 0)}%
                </p>

            </div>

        </div>
    )
}

export default InstagramLikesCard