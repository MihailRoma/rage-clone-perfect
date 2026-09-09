import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  ChevronDown,
  ChevronRight,
  Menu,
  ShoppingCart,
  Star,
  Share2,
  FileText,
  Globe,
  Accessibility,
  CalendarDays,
  HardDrive,
  Flag,
} from "lucide-react";
import coverAsset from "@/assets/robinhood-cover.png.asset.json";
import logoAsset from "@/assets/amazon-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Adventures of Robinhood : Pyle, Howard: Amazon.co.uk: Books" },
      { name: "description", content: "The Adventures of Robinhood by Howard Pyle — paperback classic edition from Ramesh Publishing House." },
      { property: "og:title", content: "The Adventures of Robinhood : Pyle, Howard" },
      { property: "og:description", content: "Howard Pyle's classic tale of Robin Hood and his merry men of Sherwood Forest." },
      { property: "og:type", content: "book" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  "Fresh",
  "MX Player",
  "Sell",
  "Bestsellers",
  "Today's Deals",
  "Mobiles",
  "Prime",
  "New Releases",
  "Customer Service",
  "Electronics",
  "Amazon Pay",
  "Fashion",
];

const subNav = [
  "Kindle e-Readers",
  "Free Kindle Reading Apps",
  "Kindle eBooks",
  "Kindle Unlimited",
  "Prime Reading",
  "Categories",
  "Best Sellers",
  "English eBooks",
  "Content and devices",
  "Kindle Support",
];

function Index() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#0F1111] text-sm">
      {/* Top nav */}
      <header className="bg-[#131921] text-white">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-2 py-2 md:flex md:items-center md:h-[60px]">
          <a className="shrink-0 flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <img src={logoAsset.url} alt="Amazon" className="h-9 w-auto" />
          </a>
          <a className="hidden md:flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1 shrink-0" />
            <div className="leading-tight ml-1 min-w-0">
              <div className="text-xs text-[#cccccc]">Deliver to F.U.</div>
              <div className="text-sm font-bold">London SW1A 1AA</div>
            </div>
          </a>
          <div className="min-w-0 flex h-10 rounded-md overflow-hidden col-span-2 md:col-span-1 md:flex-1">
            <button className="hidden sm:flex shrink-0 bg-[#f3f3f3] text-[#0F1111] px-3 items-center gap-1 text-xs border-r border-gray-300 hover:bg-gray-200">
              Books <ChevronDown className="w-3 h-3" />
            </button>
            <input
              className="flex-1 min-w-0 px-3 text-[#0F1111] outline-none bg-white placeholder:text-[#555555]"
              placeholder="Search Amazon.co.uk"
            />
            <button className="shrink-0 bg-[#febd69] hover:bg-[#f3a847] w-12 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#0F1111]" />
            </button>
          </div>
          <a className="hidden md:flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm gap-1 shrink-0">
            <span className="text-base">🇬🇧</span>
            <span className="font-bold text-sm">EN</span>
            <ChevronDown className="w-3 h-3 mt-2 text-[#cccccc]" />
          </a>
          <div className="flex items-center gap-1 shrink-0 justify-self-end md:justify-self-auto">
            <div className="relative group h-[50px]">
              <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent group-hover:border-white rounded-sm leading-tight cursor-pointer">
                <div className="text-xs">Hello, F.U.</div>
                <div className="font-bold flex items-center">
                  <span className="hidden md:inline">Account & Lists</span>
                  <span className="md:hidden">Account</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </div>
              </a>
              {/* Dropdown */}
              <div className="absolute right-0 top-full z-50 hidden group-hover:block text-[#0F1111]">
                <div className="w-3 h-3 bg-white rotate-45 absolute -top-1 right-24 border-t border-l border-gray-200" />
                <div className="bg-white shadow-2xl border border-gray-200 rounded-sm flex flex-col md:flex-row p-4 gap-6 min-w-[300px] md:min-w-[700px]">
                  {/* Your Lists */}
                  <div className="w-full md:w-48 md:border-r md:border-gray-200 md:pr-6">
                    <h3 className="font-bold text-base mb-2">Your Lists</h3>
                    <ul className="space-y-1.5 text-sm">
                      <li><a className="hover:text-[#C7511F] hover:underline cursor-pointer">Wish List</a></li>
                      <li className="pt-2"><a className="hover:text-[#C7511F] hover:underline cursor-pointer">Create a List</a></li>
                      <li><a className="hover:text-[#C7511F] hover:underline cursor-pointer">Find a List or Registry</a></li>
                      <li><a className="hover:text-[#C7511F] hover:underline cursor-pointer">AmazonSmile Charity Lists</a></li>
                      <li className="pt-1">
                        <a className="hover:text-[#C7511F] hover:underline cursor-pointer">Alexa Shopping List</a>
                        <div className="text-xs text-[#565959]">2 items</div>
                      </li>
                    </ul>
                  </div>
                  {/* Your Account */}
                  <div className="w-full md:w-60">
                    <h3 className="font-bold text-base mb-2">Your Account</h3>
                    <ul className="space-y-1.5 text-sm">
                      <li>
                        <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-medium">
                          Account
                        </Link>
                      </li>
                      {[
                        "Orders",
                        "Recommendations",
                        "Browsing History",
                        "Watchlist",
                        "Video Purchases & Rentals",
                        "Kindle Unlimited",
                        "Content & Devices",
                        "Subscribe & Save Items",
                        "Memberships & Subscriptions",
                        "Prime Membership",
                        "Amazon Credit Cards",
                        "Music Library",
                        "Start a Selling Account",
                        "Register for a Business Account",
                        "Switch Accounts",
                        "Sign Out",
                      ].map((item) => (
                        <li key={item}>
                          <a className="hover:text-[#C7511F] hover:underline cursor-pointer">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
        {/* Sub nav */}
        <div className="bg-[#232f3e] flex items-center h-[39px] px-2 text-white text-sm overflow-x-auto">
          <button className="flex items-center px-3 h-full font-bold border border-transparent hover:border-white rounded-sm shrink-0">
            <Menu className="w-4 h-4 mr-1" /> All
          </button>
          {navLinks.map((l) => (
            <a key={l} className="px-3 h-full flex items-center border border-transparent hover:border-white rounded-sm whitespace-nowrap shrink-0">
              {l}
              {(l === "Fresh" || l === "Prime") && <ChevronDown className="w-3 h-3 ml-1" />}
            </a>
          ))}
          <div className="hidden md:flex ml-auto items-center gap-3 pr-2 shrink-0">
            <span className="text-[#febd69] font-bold text-xs leading-tight">
              AMAZON UK<br />
              <span className="text-white text-[10px]">PRIME DELIVERY</span>
            </span>
            <span className="text-xs">STREAMING NOW ON</span>
            <span className="bg-white text-[#131921] text-xs font-bold px-2 py-0.5 rounded">▶ MX PLAYER</span>
          </div>
        </div>
      </header>

      {/* Category sub-nav */}
      <div className="border-b border-gray-200 bg-white">
        <div className="flex items-center gap-5 px-6 h-10 overflow-x-auto">
          {subNav.map((s, i) => (
            <a key={s} className={`whitespace-nowrap text-[13px] hover:text-[#C7511F] hover:underline ${i === 0 ? "font-bold" : ""}`}>
              {s}
              {(s === "Categories" || s === "Best Sellers" || s === "English eBooks") && <ChevronDown className="inline w-3 h-3 ml-0.5" />}
            </a>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="px-6 pt-3 text-xs text-[#565959]">
        <a className="hover:text-[#C7511F] hover:underline">Books</a>
        <ChevronRight className="inline w-3 h-3 mx-1" />
        <a className="hover:text-[#C7511F] hover:underline">Children's Books</a>
        <ChevronRight className="inline w-3 h-3 mx-1" />
        <a className="hover:text-[#C7511F] hover:underline">Literature & Fiction</a>
      </div>

      {/* Main product layout */}
      <main className="px-4 md:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-6 max-w-[1500px]">
        {/* Image */}
        <div className="md:col-span-3 order-1">
          <img
            src={coverAsset.url}
            alt="The Adventures of Robinhood by Howard Pyle"
            width={704}
            height={1024}
            className="w-full h-auto max-w-[280px] md:max-w-none mx-auto md:mx-0"
          />
        </div>

        {/* Center details */}
        <div className="md:col-span-6 order-2 min-w-0">
          <div className="flex justify-between items-start gap-3 min-w-0">
            <h1 className="text-xl md:text-2xl font-normal leading-tight min-w-0">
              The Adventures of Robinhood
            </h1>
            <button className="shrink-0 border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-1 text-sm flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>by </span>
            <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-medium">Howard Pyle</Link>
            <span className="text-gray-300">|</span>
            <span className="font-bold">Format:</span> <span>Paperback</span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-sm flex-wrap">
            <span className="font-bold">4.5</span>
            <div className="flex text-[#DE7921]">
              {[0,1,2,3].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
              <Star className="w-4 h-4 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
            </div>
            <ChevronDown className="w-3 h-3 text-[#007185]" />
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline ml-1">(126)</a>
          </div>

          {/* Mobile-visible action buttons */}
          <div className="mt-3 flex flex-wrap gap-2 md:hidden">
            <Link to="/account" className="flex-1 min-w-[140px] border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm text-center">
              Edit Information
            </Link>
            <Link to="/account" className="flex-1 min-w-[140px] border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm text-center">
              Edit profile
            </Link>
          </div>

          <hr className="my-3 border-gray-200" />

          <div className="text-sm leading-5">
            <p className={showMore ? "" : "line-clamp-3"}>
              The book is an 1883 novel consisting of a series of episodes in the story of the English outlaw Robin Hood and his band of merry men in Sherwood Forest. Retold and illustrated by Howard Pyle, it remains the classic introduction to the legend for young readers. Join Robin, Little John, Friar Tuck and Maid Marian in this timeless adventure of courage, friendship and justice in Nottinghamshire.
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-1 text-[#007185] hover:text-[#C7511F] hover:underline text-sm font-medium"
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          </div>

          {/* Details strip */}
          <div className="mt-4 border border-gray-200 rounded-md">
            <div className="grid grid-cols-2 md:grid-cols-5 p-4 text-center text-xs relative gap-y-4">
              {[
                { label: "Print length", icon: <FileText className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline">160 pages <ChevronDown className="inline w-3 h-3" /></a> },
                { label: "Language", icon: <Globe className="w-5 h-5 mx-auto" />, value: <span className="font-bold">English</span> },
                { label: "Accessibility", icon: <Accessibility className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Learn more</a> },
                { label: "Publication date", icon: <CalendarDays className="w-5 h-5 mx-auto" />, value: <span className="font-bold">1 January 2024</span> },
                { label: "Item weight", icon: <HardDrive className="w-5 h-5 mx-auto" />, value: <span className="font-bold">150 g</span> },
              ].map((d) => (
                <div key={d.label} className="px-2">
                  <div className="font-bold text-[#0F1111] mb-2">{d.label}</div>
                  <div className="text-[#007185] mb-2">{d.icon}</div>
                  <div>{d.value}</div>
                </div>
              ))}
              <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border border-gray-300 bg-white shadow flex items-center justify-center">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <a className="block mt-3 text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See all details</a>

          <hr className="my-3 border-gray-200" />

          <p className="text-sm">Part of the Indian Classic Library series for young readers</p>

          <a className="mt-3 inline-flex items-center gap-2 text-[#007185] hover:text-[#C7511F] hover:underline text-sm">
            <Flag className="w-4 h-4" /> Report an issue with this product
          </a>

          {/* Follow author */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold flex items-center gap-2">
              Follow the author
              <span className="w-4 h-4 rounded-full bg-[#888] text-white text-[10px] flex items-center justify-center">i</span>
            </h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-500" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
              </div>
              <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold">Howard Pyle</Link>
              <Link to="/account" className="px-6 py-1 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm">Edit profile</Link>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Product details</h2>
            <dl className="mt-3 text-sm space-y-1.5">
              <div><dt className="inline font-bold">Publisher </dt><dd className="inline">: Ramesh Publishing House</dd></div>
              <div><dt className="inline font-bold">Publication date </dt><dd className="inline">: 1 January 2024</dd></div>
              <div><dt className="inline font-bold">Edition </dt><dd className="inline">: 2024</dd></div>
              <div><dt className="inline font-bold">Language </dt><dd className="inline">: English</dd></div>
              <div><dt className="inline font-bold">Print length </dt><dd className="inline">: 160 pages</dd></div>
              <div><dt className="inline font-bold">ISBN-10 </dt><dd className="inline">: 938606331X</dd></div>
              <div><dt className="inline font-bold">ISBN-13 </dt><dd className="inline">: 978-9386063311</dd></div>
              <div><dt className="inline font-bold">Item Weight </dt><dd className="inline">: 150 g</dd></div>
              <div><dt className="inline font-bold">Dimensions </dt><dd className="inline">: 13.3 x 1.2 x 20.3 cm</dd></div>
              <div><dt className="inline font-bold">Best Sellers Rank </dt><dd className="inline">: #12,467 in <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Children's Literature & Fiction (Books)</a></dd></div>
              <div className="flex items-center gap-2 pt-1">
                <dt className="font-bold">Customer Reviews:</dt>
                <dd className="flex items-center gap-1">
                  <span>4.5</span>
                  <div className="flex text-[#DE7921]">
                    {[0,1,2,3].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                    <Star className="w-4 h-4 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
                  </div>
                  <ChevronDown className="w-3 h-3 text-[#007185]" />
                  <a className="text-[#007185] hover:text-[#C7511F] hover:underline">(126)</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* About the author */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">About the author</h2>
            <p className="text-sm mt-2">Follow authors to get new release updates, plus improved recommendations.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-5">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-full bg-[#dde4e6] flex items-center justify-center shrink-0">
                  <svg className="w-24 h-24 text-[#b8c4c7]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
                </div>
                <Link to="/account" className="px-6 py-1 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm">Edit profile</Link>
              </div>
              <div className="flex-1 min-w-0">
                <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold text-lg">Howard Pyle</Link>
                <p className="text-sm mt-2">Howard Pyle (1853-1911) was an American illustrator and author, best known for his retellings of classic legends including The Merry Adventures of Robin Hood and King Arthur.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy box stays in right col — close the center wrapper */}

        {/* Buy box */}
        <aside className="md:col-span-3 order-3">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="border border-gray-400 rounded-md p-3">
              <div className="font-bold">Paperback</div>
              <div className="text-[#565959]">—</div>
            </div>
            <p className="mt-6 text-center text-sm text-[#0F1111]">
              This edition of this title is not available for purchase in your country. Choose an available edition from the options above
            </p>
          </div>
          <Link to="/account" className="mt-3 block w-full border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm text-center">
            Edit Information
          </Link>
        </aside>

        {/* Customer reviews — full width */}
        <section className="md:col-span-12 order-4 mt-8 border-t border-gray-200 pt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold">Customer reviews</h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-[#DE7921]">
                {[0,1,2,3].map(i => <Star key={i} className="w-5 h-5 fill-[#DE7921]" />)}
                <Star className="w-5 h-5 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
              </div>
              <span className="font-bold">4.5 out of 5</span>
            </div>
            <p className="text-xs text-[#565959] mt-1">126 global ratings</p>

            <div className="mt-4 space-y-1.5 text-sm">
              {[
                { s: 5, p: 68 },
                { s: 4, p: 21 },
                { s: 3, p: 7 },
                { s: 2, p: 2 },
                { s: 1, p: 2 },
              ].map((r) => (
                <div key={r.s} className="flex items-center gap-2">
                  <a className="text-[#007185] hover:text-[#C7511F] hover:underline w-12">{r.s} star</a>
                  <div className="flex-1 h-5 bg-[#f0f2f2] border border-gray-300 rounded-sm overflow-hidden">
                    <div className="h-full bg-[#FFA41C]" style={{ width: `${r.p}%` }} />
                  </div>
                  <span className="w-10 text-right">{r.p}%</span>
                </div>
              ))}
            </div>

            <a className="block mt-4 text-[#007185] hover:text-[#C7511F] hover:underline text-sm">How are ratings calculated?</a>

            <h3 className="font-bold text-base mt-8">Review this product</h3>
            <p className="text-sm mt-1">Share your thoughts with other customers</p>
            <button className="mt-3 w-full border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm">
              Write a product review
            </button>
          </div>

          <div className="md:col-span-9">
            <h3 className="font-bold text-base">Top reviews from United Kingdom</h3>
            <div className="mt-4 space-y-8">
              {[
                {
                  name: "mrs lock",
                  stars: 5,
                  title: "Great",
                  meta: "Reviewed in the United Kingdom on 28 January 2014",
                  body: "I bought this book for my daughter and she loves it. She had been asking for the Robin Hood stories after seeing a film, and this edition is the perfect size for her to read on her own. Lovely illustrations too.",
                },
                {
                  name: "Treye",
                  stars: 5,
                  title: "Timeless classic, lovely edition",
                  meta: "Reviewed in the United States on 28 November 2013",
                  body: "Howard Pyle's version is still the best telling of the Robin Hood legend. Sherwood Forest, Little John, Friar Tuck and the Sheriff of Nottingham — it's all here and it reads beautifully out loud.",
                },
                {
                  name: "Alexander",
                  stars: 5,
                  title: "cooool",
                  meta: "Reviewed in Germany on 30 November 2024",
                  body: "cooool",
                },
                {
                  name: "javier",
                  stars: 5,
                  title: "Robin Hood review",
                  meta: "Reviewed in the United States on 14 April 2013",
                  body: "This is a wonderful book and it's worth what you're paying for. So if you're debating whether to buy it or not, you should definitely buy this.",
                },
                {
                  name: "chuck",
                  stars: 5,
                  title: "Great read, finished it in a night",
                  meta: "Reviewed in the United States on 12 January 2013",
                  body: "Hi this was really a great book. Read half of Robin Hood's adventures in one night and the other half on another.",
                },
              ].map((r) => (
                <article key={r.name}>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-600">
                      {r.name.slice(0,1).toUpperCase()}
                    </div>
                    <span className="font-bold text-sm">{r.name}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-[#DE7921]">
                      {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                    </div>
                    <span className="font-bold text-sm">{r.title}</span>
                  </div>
                  <div className="text-xs text-[#565959] mt-1">{r.meta}</div>
                  <div className="text-xs text-[#C7511F] font-bold mt-1">Verified Purchase</div>
                  <p className="text-sm mt-2 leading-5">{r.body}</p>
                  <button className="text-xs text-[#565959] mt-2 hover:text-[#C7511F]">Report</button>
                </article>
              ))}
            </div>
            <a className="inline-block mt-6 text-[#007185] hover:text-[#C7511F] hover:underline text-sm">See more reviews</a>
          </div>
        </section>
      </main>


      <footer className="mt-10 bg-[#232f3e] text-white text-xs text-center py-6">
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </footer>
    </div>
  );
}
