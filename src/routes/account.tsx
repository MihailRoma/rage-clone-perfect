import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  ChevronDown,
  ShoppingCart,
  Menu,
  Pencil,
  Camera,
  Star,
} from "lucide-react";
import avatarImg from "@/assets/alex-avatar.jpg";
import coverAsset from "@/assets/rage-comics-cover.png.asset.json";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Profile: Alex Carter: Amazon.co.uk" },
      { name: "description", content: "Your Amazon profile" },
    ],
  }),
  component: AccountPage,
});

const profileTabs = [
  "Your Amazon.co.uk",
  "Your Browsing History",
  "Recommended For You",
  "Improve Your Recommendations",
  "Your Profile",
  "Learn More",
];

const navLinks = [
  "Customer Service",
  "Today's Deals",
  "Amazon Basics",
  "Kindle Books",
  "Browsing History",
  "Prime",
  "Gift Cards",
];

function AccountPage() {
  return (
    <div className="min-h-screen bg-white text-[#0F1111] text-sm">
      {/* SiteStripe */}
      <div className="bg-[#fcfcfc] border-b-2 border-[#febd69] text-xs">
        <div className="flex items-center px-4 h-12 gap-6">
          <div className="leading-tight">
            <div className="font-bold">Amazon Associates</div>
            <div className="text-[#007185] font-bold">SiteStripe</div>
          </div>
          <div className="leading-tight">
            <div className="text-[#565959]">Get Link:</div>
            <div className="flex gap-3"><span className="text-[#007185] font-bold">Text</span><span className="text-gray-400">Image</span><span className="text-gray-400">Text+Image</span></div>
          </div>
          <div className="leading-tight">
            <div className="text-[#565959]">Native Shopping Ads <span className="text-pink-500">(New)</span></div>
            <div className="text-gray-400">Custom</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#565959]">Share:</span>
            <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold">f</span>
            <span className="w-6 h-6 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center text-[10px]">𝕏</span>
          </div>
          <div className="text-[#565959]">Try Mobile GetLink, a tool to create associate link...</div>
          <div className="ml-auto flex items-center gap-4">
            <a className="text-[#007185]">Earnings</a>
            <a className="text-[#007185]">Help</a>
            <span>⚙</span>
          </div>
        </div>
      </div>

      {/* Top nav */}
      <header className="bg-[#131921] text-white">
        <div className="flex items-center px-2 h-[60px] gap-2">
          <Link to="/" className="flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <span className="text-2xl font-bold leading-none">amazon</span>
            <span className="text-xs text-[#febd69] ml-0.5 mb-1">prime</span>
          </Link>
          <a className="flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1" />
            <div className="leading-tight ml-1">
              <div className="text-xs text-[#cccccc]">Deliver to Alex</div>
              <div className="text-sm font-bold">London SW1A 1AA</div>
            </div>
          </a>
          <div className="flex flex-1 h-10 rounded-md overflow-hidden">
            <button className="bg-[#f3f3f3] text-[#0F1111] px-3 flex items-center gap-1 text-xs border-r border-gray-300 hover:bg-gray-200">
              All <ChevronDown className="w-3 h-3" />
            </button>
            <input className="flex-1 px-3 text-[#0F1111] outline-none" />
            <button className="bg-[#febd69] hover:bg-[#f3a847] w-12 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#0F1111]" />
            </button>
          </div>
          <a className="flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm gap-1">
            <span className="text-base">🇬🇧</span>
            <ChevronDown className="w-3 h-3 mt-2 text-[#cccccc]" />
          </a>
          <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight">
            <div className="text-xs">Hello, Alex</div>
            <div className="font-bold flex items-center">Account & Lists <ChevronDown className="w-3 h-3 ml-1" /></div>
          </a>
          <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight">
            <div className="text-xs">Returns</div>
            <div className="font-bold">& Orders</div>
          </a>
          <a className="px-2 h-[50px] flex items-end border border-transparent hover:border-white rounded-sm">
            <ShoppingCart className="w-8 h-8" />
            <span className="font-bold ml-1 mb-3">0</span>
            <span className="font-bold mb-1">Cart</span>
          </a>
        </div>
        <div className="bg-[#232f3e] flex items-center h-[39px] px-2 text-white text-sm">
          <button className="flex items-center px-3 h-full font-bold border border-transparent hover:border-white rounded-sm">
            <Menu className="w-4 h-4 mr-1" /> All
          </button>
          {navLinks.map((l) => (
            <a key={l} className="px-3 h-full flex items-center border border-transparent hover:border-white rounded-sm whitespace-nowrap">
              {l}
              {(l === "Browsing History" || l === "Prime") && <ChevronDown className="w-3 h-3 ml-1" />}
            </a>
          ))}
          <div className="ml-auto pr-2 font-bold text-xs">Shop with Prime perks</div>
        </div>
      </header>

      {/* Profile tabs sub-nav */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex items-center gap-6 px-6 h-10 overflow-x-auto">
          {profileTabs.map((t) => (
            <a key={t} className={`whitespace-nowrap text-[13px] hover:text-[#C7511F] hover:underline ${t === "Your Profile" ? "font-bold" : ""}`}>{t}</a>
          ))}
        </div>
      </div>

      <main className="max-w-[1100px] mx-auto px-6 py-4">
        {/* Private notice */}
        <div className="flex justify-center mb-3">
          <div className="border border-[#5a8b76] bg-[#f0f8f4] rounded px-4 py-2 text-sm">
            This is your private view of your public profile.{" "}
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold">See what others see</a>
          </div>
        </div>

        {/* Banner + avatar */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-b from-gray-300 to-gray-100 rounded-t-md relative">
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="bg-white px-6 pb-6 pt-2 rounded-b-md border border-gray-200 border-t-0">
            <div className="flex items-end gap-6 -mt-20">
              <div className="relative">
                <img
                  src={avatarImg}
                  alt="Alex Carter"
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full border-4 border-white object-cover bg-white"
                />
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-between pt-20">
                <h1 className="text-3xl font-normal flex items-center gap-2">
                  Alex Carter <Pencil className="w-5 h-5 text-gray-500" />
                </h1>
                <button className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full px-5 py-2 text-sm font-medium shadow-sm">
                  Edit your public profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          {/* Left: About */}
          <section className="col-span-1 bg-white border border-gray-200 rounded-md p-5">
            <h2 className="font-bold text-base">About <span className="text-xs text-[#565959] font-normal ml-1">Public</span></h2>
            <p className="text-sm mt-3 leading-5">
              Lifelong fan of internet humour, meme history and absurd webcomics. I collect rage comics, troll faces and other early-2010s classics. Currently reading my way through every volume of "The Definitive Collection". <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Read more</a>
            </p>
            <h3 className="font-bold mt-5 text-sm">Reviewer ranking</h3>
            <p className="text-sm mt-1">#4,812,309</p>
            <h3 className="font-bold mt-5 text-sm">Location</h3>
            <p className="text-sm mt-1">London, United Kingdom</p>
            <h3 className="font-bold mt-5 text-sm">Member since</h3>
            <p className="text-sm mt-1">March 2014</p>
          </section>

          {/* Right column */}
          <div className="col-span-2 space-y-5">
            {/* Insights */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <h2 className="font-bold text-base">Insights</h2>
              <div className="grid grid-cols-5 gap-4 mt-4 text-center">
                {[
                  { n: 3, label: "helpful votes", v: "Public" },
                  { n: 1, label: "reviews", v: "Public" },
                  { n: 0, label: "hearts", v: "Public" },
                  { n: 1, label: "idea lists", v: "Public" },
                  { n: 0, label: "followers", v: "Private" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-light">{s.n}</div>
                    <div className="text-xs mt-1">{s.label}</div>
                    <div className="text-xs text-[#565959] italic">{s.v}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent activity / Review */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base">Community activity <span className="text-xs text-[#565959] font-normal ml-1">Public</span></h2>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See all activity</a>
              </div>
              <div className="mt-4 flex gap-4">
                <Link to="/" className="shrink-0">
                  <img src={coverAsset.url} alt="Rage Comics" width={96} height={144} className="w-24 h-auto border border-gray-200" loading="lazy" />
                </Link>
                <div className="flex-1">
                  <Link to="/" className="text-[#007185] hover:text-[#C7511F] hover:underline font-medium">
                    Rage Comics - The Definitive Collection, Vol. 2 (400+ comics)
                  </Link>
                  <div className="text-xs text-[#565959]">Kindle Edition · by F.U. Derpstein</div>
                  <div className="flex items-center gap-1 mt-2 text-[#DE7921]">
                    {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                    <span className="text-[#0F1111] text-sm font-bold ml-1">An absolute meme masterpiece</span>
                  </div>
                  <div className="text-xs text-[#565959] mt-1">Reviewed on 12 February 2024</div>
                  <p className="text-sm mt-2 leading-5">
                    Brought back so much nostalgia. Over 400 comics, all properly curated — trollface, rage guy, me gusta, the whole crew. Honestly worth every page. 5 stars, would fap again.
                  </p>
                  <div className="text-xs text-[#565959] mt-2">3 people found this helpful</div>
                </div>
              </div>
            </section>

            {/* Idea list */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base">Idea lists <span className="text-xs text-[#565959] font-normal ml-1">Public</span></h2>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See all idea lists</a>
              </div>
              <div className="mt-4 flex gap-4 items-center">
                <div className="w-24 h-24 bg-[#fff3d6] flex items-center justify-center border border-gray-200">
                  <img src={coverAsset.url} alt="" className="w-16 h-auto" loading="lazy" />
                </div>
                <div>
                  <a className="text-[#007185] hover:text-[#C7511F] hover:underline font-medium">Essential Meme Reading List</a>
                  <div className="text-xs text-[#565959] mt-1">7 items · Updated April 2025</div>
                  <p className="text-sm mt-1">Rage Comics Vol. 1–3, troll face anthologies, and other internet history must-haves.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="mt-10 bg-[#232f3e] text-white text-xs text-center py-6">
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </footer>
    </div>
  );
}
