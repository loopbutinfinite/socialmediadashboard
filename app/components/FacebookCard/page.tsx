"use client"
import { FacebookData } from '@/lib/Interfaces/interfaces';
import { GetFacebookStats } from '@/lib/SocialPlatformFetches';
import { useEffect, useState } from 'react';

const FacebookCard = () => {

    const [facebookStats, setFacebookStats] = useState<FacebookData | null>(null);

    useEffect(() => {
        const fetchFacebook = async() => {
            const result = await GetFacebookStats();
            console.log(result)
            setFacebookStats(result);
        }
        fetchFacebook();
    }, []);

    const isPositive = (facebookStats?.followerChange ?? 0) >= 0;
  return (
    <div className="bg-slate-800 card rounded-xl p-6 text-center shadow-md border-t-2 border-blue-600 hover:bg-slate-700 hover:cursor-pointer">
            <div className="text-gray-400 text-sm mb-2">
                <div className="flex justify-center gap-2 mb-5">
                    <img src="images/icon-facebook.svg" className="w-[20px] h-[20px]" alt="Facebook Icon" />
                    <div className='font-bold'>
                        {facebookStats?.username}
                    </div>
                </div>
            </div>

            <h2 className="text-5xl font-bold">{facebookStats?.followers}</h2>
            <p className="text-gray-400 tracking-widest text-xs">FOLLOWERS</p>

            <p
                className={`mt-4 text-md font-semibold ${isPositive ? "text-green-400" : "text-red-400"
                    }`}
            >
                {isPositive ? "▲" : "▼"} {Math.abs(facebookStats?.followerChange ?? 0)} Today
            </p>
        </div>
  )
}

export default FacebookCard