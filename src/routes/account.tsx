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
import robinhoodCover from "@/assets/robinhood-cover.png.asset.json";
import logoAsset from "@/assets/amazon-logo.png.asset.json";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Profile: Howard Pyle: Amazon.co.uk" },
      { name: "description", content: "Author profile of Howard Pyle" },
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
    body: "I bought this book for my daughter and she loves it. She had been asking for the Robin Hood stories after seeing a film, and this edition is the perfect size for her to read on her own. Lovely illustrations too.",
    helpful: 14,
  },
  {
    name: "Treye",
    initial: "T",
    stars: 5,
    title: "Timeless classic, lovely edition",
    meta: "Reviewed in the United States on 28 November 2013",
    body: "Howard Pyle's version is still the best telling of the Robin Hood legend. Sherwood Forest, Little John, Friar Tuck and the Sheriff of Nottingham — it's all here and it reads beautifully out loud.",
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
    title: "Adventure classic",
    meta: "Reviewed in the United States on 14 April 2013",
    body: "This is a great book and it's worth what you're paying for. So if you're debating whether to buy it or not, you should definitely pick this up.",
    helpful: 6,
  },
  {
    name: "chuck",
    initial: "C",
    stars: 5,
    title: "Great read, finished in a night",
    meta: "Reviewed in the United States on 12 January 2013",
    body: "Hi this was really a great book of Robin Hood. Read half the book in on night an th other half on another",
    helpful: 4,
  },
  {
    name: "Megan H.",
    initial: "M",
    stars: 4,
    title: "Good introduction to the legend",
    meta: "Reviewed in the United Kingdom on 3 September 2015",
    body: "My class read this together and the children loved the adventures. A few of the older spellings needed explaining, but the stories themselves are exciting and the pictures help younger readers follow along.",
    helpful: 11,
  },
  {
    name: "Derp_Fan_99",
    initial: "D",
    stars: 5,
    title: "Merry men forever",
    meta: "Reviewed in Canada on 19 July 2016",
    body: "Bought this purely for the archery chapter and stayed for the whole thing. Pyle has a great ear for dialogue and the characters leap off the page.",
    helpful: 7,
  },
  {
    name: "Sophie",
    initial: "S",
    stars: 3,
    title: "Fun but a little dated",
    meta: "Reviewed in the United Kingdom on 4 October 2018",
    body: "The language is old-fashioned in places, which makes it harder for some children. But the adventure is still fun and the illustrations are a nice touch.",
    helpful: 5,
  },
  {
    name: "RageMaster",
    initial: "R",
    stars: 5,
    title: "Best Robin Hood edition",
    meta: "Reviewed in the United States on 22 February 2017",
    body: "Read this cover to cover twice. The Merry Adventures and this one are both on my shelf now. Please give us more illustrated classics Mr. Pyle.",
    helpful: 18,
  },
  {
    name: "Lukas B.",
    initial: "L",
    stars: 4,
    title: "Great gift",
    meta: "Reviewed in Germany on 8 December 2019",
    body: "Gave this to my little brother for his birthday. He devoured the chapters about the tournament and the golden arrow, so I'd call that a success.",
    helpful: 3,
  },
  {
    name: "Priya",
    initial: "P",
    stars: 5,
    title: "Perfect illustrated classic",
    meta: "Reviewed in India on 22 March 2022",
    body: "The Everlasting Illustrated Classics edition is durable and the illustrations are charming. A wonderful keepsake for any child's bookshelf.",
    helpful: 8,
  },
  {
    name: "Oscar W.",
    initial: "O",
    stars: 3,
    title: "Nice but small print",
    meta: "Reviewed in the United Kingdom on 10 June 2020",
    body: "Lovely stories, but the print is a little small for my old eyes. I'd recommend the larger paperback if you're reading aloud to a group.",
    helpful: 5,
  },
];

function AccountPage() {
  const [editOpen, setEditOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Howard Pyle",
    location: "",
    website: "",
    about: "",
  });
  const [draft, setDraft] = useState(profile);
  const openEdit = () => { setDraft(profile); setEditOpen(true); };
  const saveEdit = () => {
    setProfile(draft);
    setEditOpen(false);
    if (draft.website.trim()) {
      setConfirmOpen(true);
    }
  };
  return (
    <div className="min-h-screen bg-white text-[#0F1111] text-sm">

      {/* Top nav */}
      <header className="bg-[#131921] text-white">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-2 py-2 md:flex md:items-center md:h-[60px]">
          <Link to="/" className="shrink-0 flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <img src={logoAsset.url} alt="Amazon" className="h-9 w-auto" />
          </Link>
          <a className="hidden md:flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1 shrink-0" />
            <div className="leading-tight ml-1 min-w-0">
              <div className="text-xs text-[#cccccc]">Deliver to F.U.</div>
              <div className="text-sm font-bold">London SW1A 1AA</div>
            </div>
          </a>
          <div className="min-w-0 flex h-10 rounded-md overflow-hidden col-span-2 md:col-span-1 md:flex-1">
            <button className="hidden sm:flex shrink-0 bg-[#f3f3f3] text-[#0F1111] px-3 items-center gap-1 text-xs border-r border-gray-300 hover:bg-gray-200">
              All <ChevronDown className="w-3 h-3" />
            </button>
            <input className="flex-1 min-w-0 px-3 text-[#0F1111] outline-none bg-white" />
            <button className="shrink-0 bg-[#febd69] hover:bg-[#f3a847] w-12 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#0F1111]" />
            </button>
          </div>
          <a className="hidden md:flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm gap-1 shrink-0">
            <span className="text-base">🇬🇧</span>
            <ChevronDown className="w-3 h-3 mt-2 text-[#cccccc]" />
          </a>
          <div className="flex items-center gap-1 shrink-0 justify-self-end md:justify-self-auto">
            <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight shrink-0">
              <div className="text-xs">Hello, F.U.</div>
              <div className="font-bold flex items-center">
                <span className="hidden md:inline">Account & Lists</span>
                <span className="md:hidden">Account</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </div>
            </a>
            <a className="hidden md:flex px-2 h-[50px] flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight shrink-0">
              <div className="text-xs">Returns</div>
              <div className="font-bold">& Orders</div>
            </a>
            <a className="flex items-end h-[50px] border border-transparent hover:border-white rounded-sm shrink-0">
              <ShoppingCart className="w-8 h-8" />
              <span className="font-bold ml-1 mb-3">0</span>
              <span className="hidden md:inline font-bold mb-1">Cart</span>
            </a>
          </div>
        </div>
        <div className="bg-[#232f3e] flex items-center h-[39px] px-2 text-white text-sm overflow-x-auto">
          <button className="flex items-center px-3 h-full font-bold border border-transparent hover:border-white rounded-sm shrink-0">
            <Menu className="w-4 h-4 mr-1" /> All
          </button>
          {navLinks.map((l) => (
            <a key={l} className="px-3 h-full flex items-center border border-transparent hover:border-white rounded-sm whitespace-nowrap shrink-0">
              {l}
              {(l === "Browsing History" || l === "Prime") && <ChevronDown className="w-3 h-3 ml-1" />}
            </a>
          ))}
          <div className="hidden md:flex ml-auto pr-2 font-bold text-xs shrink-0">Author Central · Manage your books</div>
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
          <div className="h-36 sm:h-48 bg-gradient-to-b from-[#febd69]/60 to-[#fff3d6] rounded-t-md relative">
            <button className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center shadow">
              <Camera className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="bg-white px-4 sm:px-6 pb-6 pt-2 rounded-b-md border border-gray-200 border-t-0">
            <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 -mt-16 sm:-mt-20">
              <div className="relative self-center sm:self-auto shrink-0">
                <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white bg-[#dde4e6] flex items-center justify-center shadow">
                  <svg className="w-20 h-20 sm:w-28 sm:h-28 text-[#b8c4c7]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
                </div>
                <button className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between sm:pt-16 gap-3">
                <div className="min-w-0 text-center sm:text-left">
                  <h1 className="text-2xl sm:text-3xl font-normal flex items-center justify-center sm:justify-start gap-2 truncate">
                    {profile.name} <button onClick={openEdit} aria-label="Edit name"><Pencil className="w-5 h-5 text-gray-500 hover:text-gray-700 shrink-0" /></button>
                  </h1>
                  <div className="text-sm text-[#565959] mt-1">Author · Member since March 2011</div>
                </div>
                <button onClick={openEdit} className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full px-5 py-2 text-sm font-medium shadow-sm shrink-0">
                  Edit your public profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {/* Left: About */}
          <section className="md:col-span-1 bg-white border border-gray-200 rounded-md p-5">
            <h2 className="font-bold text-base">About <span className="text-xs text-[#565959] font-normal ml-1">Public</span></h2>
            <p className="text-sm mt-3 leading-5 whitespace-pre-wrap">
              {profile.about}
            </p>
            <h3 className="font-bold mt-5 text-sm">Author rank</h3>
            <p className="text-sm mt-1">#9,818 in Humour (Books)</p>
            <h3 className="font-bold mt-5 text-sm">Location</h3>
            <p className="text-sm mt-1">{profile.location}</p>
            <h3 className="font-bold mt-5 text-sm">Member since</h3>
            <p className="text-sm mt-1">March 2011</p>
            <h3 className="font-bold mt-5 text-sm">Website</h3>
            <p className="text-sm mt-1"><a className="text-[#007185] hover:text-[#C7511F] hover:underline">{profile.website}</a></p>
          </section>

          {/* Right column */}
          <div className="md:col-span-2 space-y-5">
            {/* Insights */}
            <section className="bg-white border border-gray-200 rounded-md p-5">
              <h2 className="font-bold text-base">Insights</h2>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-4 text-center">
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

      {editOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setEditOpen(false)}>
          <div className="bg-white rounded-md shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
              <h2 className="text-lg font-bold">Edit your public profile</h2>
              <button onClick={() => setEditOpen(false)} className="text-gray-500 hover:text-gray-800 text-xl leading-none">×</button>
            </div>
            <div className="px-5 py-4 space-y-4">
              <label className="block">
                <span className="text-sm font-bold">Display name</span>
                <input
                  value={draft.name}
                  onChange={(e) => setDraft({ ...draft, name: e.target.value })}
                  className="mt-1 w-full border border-gray-400 rounded px-3 py-2 text-sm outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#f6c177]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Location</span>
                <input
                  value={draft.location}
                  onChange={(e) => setDraft({ ...draft, location: e.target.value })}
                  className="mt-1 w-full border border-gray-400 rounded px-3 py-2 text-sm outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#f6c177]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">Website</span>
                <input
                  value={draft.website}
                  onChange={(e) => setDraft({ ...draft, website: e.target.value })}
                  className="mt-1 w-full border border-gray-400 rounded px-3 py-2 text-sm outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#f6c177]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-bold">About</span>
                <textarea
                  value={draft.about}
                  onChange={(e) => setDraft({ ...draft, about: e.target.value })}
                  rows={5}
                  className="mt-1 w-full border border-gray-400 rounded px-3 py-2 text-sm outline-none focus:border-[#e77600] focus:ring-2 focus:ring-[#f6c177]"
                />
              </label>
            </div>
            <div className="flex justify-end gap-2 px-5 py-3 border-t border-gray-200 bg-[#f7f7f7] rounded-b-md">
              <button onClick={() => setEditOpen(false)} className="px-4 py-1.5 border border-gray-400 rounded-full text-sm bg-white hover:bg-gray-50">Cancel</button>
              <button onClick={saveEdit} className="px-5 py-1.5 rounded-full text-sm font-medium bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] shadow-sm">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
