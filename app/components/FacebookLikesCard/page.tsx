"use client"
import { FacebookData } from '@/lib/Interfaces/interfaces'
import { GetFacebookStats } from '@/lib/SocialPlatformFetches'
import { useEffect, useState } from 'react'

const FacebookLikesCard = () => {
    const [facebookStats, setFacebookStats] = useState<FacebookData | null>(null)

    useEffect(() => {
            const fetchFacebook = async() => {
                const result = await GetFacebookStats();
                console.log(result)
                setFacebookStats(result);
            }
            fetchFacebook();
        }, []);
        
    const isPositive = (facebookStats?.likesChange ?? 0) >= 0;
    return (
        <div className="bg-slate-800 rounded-xl p-5 flex justify-between items-center shadow-md hover:bg-slate-700 hover:cursor-pointer">
            <div className="">
                <p className="text-gray-400 text-sm font-bold mb-5">Likes</p>
                <h3 className="text-4xl font-bold text-white">{facebookStats?.likes}</h3>
            </div>
            <div className="justify-end">
                <img className="mb-5 w-[25px] h-[25px]" src="/images/icon-facebook.svg" alt="Facebook Icon" />
                <p className={`text-sm font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? "▲" : "▼"} {Math.abs(facebookStats?.likesChange ?? 0)}%
                </p>

            </div>

        </div>
    )
}

export default FacebookLikesCard