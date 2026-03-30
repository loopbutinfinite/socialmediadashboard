import YoutubeCard from "./components/YoutubeCard/page";
import FacebookCard from "./components/FacebookCard/page";
import InstagramCard from "./components/InstagramCard/page";
import TwitterCard from "./components/TwitterCard/page";
import FacebookLikesCard from "./components/FacebookLikesCard/page";
import FacebookPageViewsCard from "./components/FacebookPageViewsCard/page";
import InstagramProfileViewsCard from "./components/InstagramProfileViewsCard/page";
import InstagramLikesCard from "./components/InstragramLikesCard/page";
import TwitterLikesCard from "./components/TwitterLikesCard/page";
import TwitterRetweetsCard from "./components/TwitterRetweetsCard/page";
import YoutubeLikesCard from "./components/YoutubeLikesCard/page";
import YoutubeTotalViewsCard from "./components/YoutubeTotalViewsCard/page";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen dark:bg-slate-900 dark:text-white p-8 lg:px-40 lg:py-30">
        <div className="mb-10 pb-5 lg:pb-0 border-b-2 border-gray-600 lg:border-none">
          <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
          <p className="text-gray-400">Total Followers: 23,004</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <FacebookCard></FacebookCard>
          <TwitterCard></TwitterCard>
          <InstagramCard></InstagramCard>
          <YoutubeCard></YoutubeCard>
        </div>
        <h2 className="text-2xl font-semibold mb-6">Overview - Today</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <FacebookPageViewsCard></FacebookPageViewsCard>
          <FacebookLikesCard></FacebookLikesCard>
          <InstagramLikesCard></InstagramLikesCard>
          <InstagramProfileViewsCard></InstagramProfileViewsCard>

          <TwitterRetweetsCard></TwitterRetweetsCard>
          <TwitterLikesCard></TwitterLikesCard>
          <YoutubeLikesCard></YoutubeLikesCard>
          <YoutubeTotalViewsCard></YoutubeTotalViewsCard>
        </div>
      </main>
    </div>
  );
}
