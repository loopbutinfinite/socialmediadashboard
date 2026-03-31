"use client"
import { InstagramData } from '@/lib/Interfaces/interfaces';
import { GetInstagramStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react';

const InstagramCard = () => {

    const [instagramStats, setInstagramStats] = useState<InstagramData | null>(null);

    useEffect(() => {
        const fetchInstagram = async() => {
            const result = await GetInstagramStats();
            console.log(result)
            setInstagramStats(result);
        }
        fetchInstagram();
    }, []);

    const isPositive = (instagramStats?.followerChange ?? 0) >= 0;
  return (
    <div className="bg-slate-800 card rounded-xl p-6 text-center shadow-md border-t-2 border-pink-500 hover:bg-slate-700 hover:cursor-pointer">
            <div className="text-gray-400 text-sm mb-2">
                <div className="flex justify-center gap-2 mb-5">
                    <img src="images/icon-instagram.svg" className="w-[20px] h-[20px]" alt="Instagram Icon" />
                    <div className='font-bold'>
                        {instagramStats?.username}
                    </div>
                </div>
            </div>

            <h2 className="text-5xl font-bold">{instagramStats?.followers}</h2>
            <p className="text-gray-400 tracking-widest text-xs">FOLLOWERS</p>

            <p
                className={`mt-4 text-md font-semibold ${isPositive ? "text-green-400" : "text-red-400"
                    }`}
            >
                {isPositive ? "▲" : "▼"} {Math.abs(instagramStats?.followerChange ?? 0)} Today
            </p>
        </div>
  )
}

export default InstagramCard