import { useState } from "react";
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
  ThumbsUp,
} from "lucide-react";
import coverAsset from "@/assets/rage-comics-cover.png.asset.json";
import logoAsset from "@/assets/amazon-logo.png.asset.json";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Profile: F.U. Derpstein: Amazon.co.uk" },
      { name: "description", content: "Author profile of F.U. Derpstein" },
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

type Review = {
  name: string;
  initial: string;
  stars: number;
  title: string;
  meta: string;
  body: string;
  helpful: number;
};

const reviews: Review[] = [
  {
    name: "mrs lock",
    initial: "M",
    stars: 5,
    title: "Great",
    meta: "Reviewed in the United Kingdom on 28 January 2014",
    body: "I bought this book for my daughter and she loves it. She's a big fan of the meme characters so I thought this would be a good Christmas gift and give her eyes a rest from reading the strips on the computer. You'd definitely have to be a fan of the rage crew to enjoy it.",
    helpful: 14,
  },
  {
    name: "Treye",
    initial: "T",
    stars: 5,
    title: "Great rage comic collection!",
    meta: "Reviewed in the United States on 28 November 2013",
    body: "Rage comics are undoubtedly my favourite thing on the Interwebz! Whoever F.U. Derpstein is collected the best rage comics and slapped them into one book that I have rated 5 STARRZZZ!",
    helpful: 9,
  },
  {
    name: "Alexander",
    initial: "A",
    stars: 5,
    title: "cooool",
    meta: "Reviewed in Germany on 30 November 2024",
    body: "cooool",
    helpful: 2,
  },
  {
    name: "javier",
    initial: "J",
    stars: 5,
    title: "Rage comics review",
    meta: "Reviewed in the United States on 14 April 2013",
    body: "This is a hilarious book and it's worth what you're paying for. So if you're debating whether to buy it or not, you should definitely pick this up.",
    helpful: 6,
  },
  {
    name: "chuck",
    initial: "C",
    stars: 5,
    title: "Great read, finished in a night",
    meta: "Reviewed in the United States on 12 January 2013",
    body: "Hi this was really a great book of rage. Read half the book in one night and the other half on another.",
    helpful: 4,
  },
  {
    name: "Megan H.",
    initial: "M",
    stars: 4,
    title: "Solid collection, slight repeats",
    meta: "Reviewed in the United Kingdom on 3 September 2015",
    body: "Massive nostalgia trip. Most of the classics are here — trollface, rage guy, me gusta, fffuuu — but a few panels show up more than once. Still worth it for the price.",
    helpful: 11,
  },
  {
    name: "Derp_Fan_99",
    initial: "D",
    stars: 5,
    title: "Trollface forever",
    meta: "Reviewed in Canada on 19 July 2016",
    body: "Bought this purely for the trollface chapter and stayed for the whole thing. Derpstein has really good taste in selecting which comics to include.",
    helpful: 7,
  },
  {
    name: "Sophie",
    initial: "S",
    stars: 3,
    title: "Fun but very 2012",
    meta: "Reviewed in the United Kingdom on 4 October 2018",
    body: "If you grew up on early 2010s internet humour you'll love it. If you didn't, a lot of the jokes won't land. It is exactly what it says on the tin though.",
    helpful: 5,
  },
  {
    name: "RageMaster",
    initial: "R",
    stars: 5,
    title: "Y U NO MAKE VOL 4",
    meta: "Reviewed in the United States on 22 February 2017",
    body: "Read this cover to cover twice. Vol. 1, 2 and 3 are all on my shelf now. Please give us a volume 4 Mr. Derpstein.",
    helpful: 18,
  },
  {
    name: "Lukas B.",
    initial: "L",
    stars: 4,
    title: "Great gift",
    meta: "Reviewed in Germany on 8 December 2019",
    body: "Gave this to my little brother for his birthday. He laughed for an hour straight, so I'd call that a success.",
    helpful: 3,
  },
];

function AccountPage() {
  const [editOpen, setEditOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "F.U. Derpstein",
    location: "Somewhere on the Interwebz",
    website: "derpstein.example",
    about:
      "F.U. Derpstein is the curator behind Rage Comics — The Definitive Collection, the bestselling anthology series preserving the golden age of internet meme comics. Three volumes. 1,200+ comics. Trollface approved.",
  });
  const [draft, setDraft] = useState(profile);
  const openEdit = () => { setDraft(profile); setEditOpen(true); };
  const saveEdit = () => { setProfile(draft); setEditOpen(false); };
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
          <Link to="/" className="flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <img src={logoAsset.url} alt="Amazon" className="h-9 w-auto" />
          </Link>
          <a className="flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1" />
            <div className="leading-tight ml-1">
              <div className="text-xs text-[#cccccc]">Deliver to F.U.</div>
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
            <div className="text-xs">Hello, F.U.</div>
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
          <div className="ml-auto pr-2 font-bold text-xs">Author Central · Manage your books</div>
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
            This is your private view of your public author profile.{" "}
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold">See what others see</a>
          </div>
        </div>

        {/* Banner + avatar */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-b from-[#febd69]/60 to-[#fff3d6] rounded-t-md relative">
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="bg-white px-6 pb-6 pt-2 rounded-b-md border border-gray-200 border-t-0">
            <div className="flex items-end gap-6 -mt-20">
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-white bg-[#dde4e6] flex items-center justify-center shadow">
                  <svg className="w-28 h-28 text-[#b8c4c7]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
                </div>
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 flex items-center justify-between pt-20">
                <div>
                  <h1 className="text-3xl font-normal flex items-center gap-2">
                    {profile.name} <button onClick={openEdit} aria-label="Edit name"><Pencil className="w-5 h-5 text-gray-500 hover:text-gray-700" /></button>
                  </h1>
                  <div className="text-sm text-[#565959] mt-1">Author · Member since March 2011</div>
                </div>
                <button onClick={openEdit} className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full px-5 py-2 text-sm font-medium shadow-sm">
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
              F.U. Derpstein is the curator behind <em>Rage Comics — The Definitive Collection</em>, the bestselling anthology series preserving the golden age of internet meme comics. Three volumes. 1,200+ comics. Trollface approved.
            </p>
            <h3 className="font-bold mt-5 text-sm">Author rank</h3>
            <p className="text-sm mt-1">#9,818 in Humour (Books)</p>
            <h3 className="font-bold mt-5 text-sm">Location</h3>
            <p className="text-sm mt-1">Somewhere on the Interwebz</p>
            <h3 className="font-bold mt-5 text-sm">Member since</h3>
            <p className="text-sm mt-1">March 2011</p>
            <h3 className="font-bold mt-5 text-sm">Website</h3>
            <p className="text-sm mt-1"><a className="text-[#007185] hover:text-[#C7511F] hover:underline">derpstein.example</a></p>
          </section>

          {/* Right column */}
          <div className="col-span-2 space-y-5">
            {/* Insights */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <h2 className="font-bold text-base">Insights</h2>
              <div className="grid grid-cols-5 gap-4 mt-4 text-center">
                {[
                  { n: 412, label: "books sold (k)", v: "Private" },
                  { n: 188, label: "reviews", v: "Public" },
                  { n: "4.4", label: "avg rating", v: "Public" },
                  { n: 3, label: "titles", v: "Public" },
                  { n: "2.1k", label: "followers", v: "Public" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-light">{s.n}</div>
                    <div className="text-xs mt-1">{s.label}</div>
                    <div className="text-xs text-[#565959] italic">{s.v}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Your books */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base">Your books <span className="text-xs text-[#565959] font-normal ml-1">Public</span></h2>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">Manage in Author Central</a>
              </div>
              <div className="mt-4 flex gap-4">
                <Link to="/" className="shrink-0">
                  <img src={coverAsset.url} alt="Rage Comics" width={96} height={144} className="w-24 h-auto border border-gray-200" loading="lazy" />
                </Link>
                <div className="flex-1">
                  <Link to="/" className="text-[#007185] hover:text-[#C7511F] hover:underline font-medium">
                    Rage Comics - The Definitive Collection, Vol. 2 (400+ comics)
                  </Link>
                  <div className="text-xs text-[#565959]">Kindle Edition & Paperback · Published 2 November 2011</div>
                  <div className="flex items-center gap-1 mt-2 text-[#DE7921]">
                    {[0,1,2,3].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                    <Star className="w-4 h-4 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
                    <span className="text-[#0F1111] text-sm ml-1">4.4 out of 5 · 188 ratings</span>
                  </div>
                  <p className="text-sm mt-2 leading-5">
                    The flagship volume. Over 400 author-approved rage comics covering trollface, rage guy, me gusta, fffuuu and the rest of the family.
                  </p>
                  <div className="text-xs mt-2">Best Sellers Rank: <span className="font-medium">#9,818 in Humour (Books)</span></div>
                </div>
              </div>
            </section>

            {/* Reader reviews of your book */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base">Reader reviews of your books</h2>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See all 188</a>
              </div>
              <div className="text-xs text-[#565959] mt-1">Rage Comics — The Definitive Collection, Vol. 2</div>

              <div className="mt-5 space-y-7">
                {reviews.map((r) => (
                  <article key={r.name} className="border-b border-gray-100 pb-5 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                        {r.initial}
                      </div>
                      <span className="font-bold text-sm">{r.name}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex text-[#DE7921]">
                        {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                        {Array.from({ length: 5 - r.stars }).map((_, i) => <Star key={`e${i}`} className="w-4 h-4 text-gray-300" />)}
                      </div>
                      <span className="font-bold text-sm">{r.title}</span>
                    </div>
                    <div className="text-xs text-[#565959] mt-1">{r.meta}</div>
                    <div className="text-xs text-[#C7511F] font-bold mt-1">Verified Purchase</div>
                    <p className="text-sm mt-2 leading-5">{r.body}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="text-xs text-[#565959] flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" /> {r.helpful} people found this helpful
                      </div>
                      <button className="text-xs text-[#007185] hover:text-[#C7511F] hover:underline">Reply as author</button>
                      <button className="text-xs text-[#565959] hover:text-[#C7511F]">Report</button>
                    </div>
                  </article>
                ))}
              </div>
              <a className="inline-block mt-4 text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See more reviews</a>
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
