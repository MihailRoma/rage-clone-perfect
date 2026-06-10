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
import coverAsset from "@/assets/rage-comics-cover.png.asset.json";
import logoAsset from "@/assets/amazon-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rage Comics - The Definitive Collection, Vol. 2 (400+ comics) eBook : Derpstein, F.U.: Amazon.co.uk: Kindle Store" },
      { name: "description", content: "Rage Comics - The Definitive Collection, Vol. 2 (400+ comics) Kindle Edition by F.U. Derpstein." },
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
  return (
    <div className="min-h-screen bg-white text-[#0F1111] text-sm">
      {/* Top nav */}
      <header className="bg-[#131921] text-white">
        <div className="flex items-center px-2 h-[60px] gap-2">
          <a className="flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <img src={logoAsset.url} alt="Amazon" className="h-9 w-auto" />
          </a>
          <a className="flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1" />
            <div className="leading-tight ml-1">
              <div className="text-xs text-[#cccccc]">Deliver to F.U.</div>
              <div className="text-sm font-bold">London SW1A 1AA</div>
            </div>
          </a>
          <div className="flex flex-1 h-10 rounded-md overflow-hidden">
            <button className="bg-[#f3f3f3] text-[#0F1111] px-3 flex items-center gap-1 text-xs border-r border-gray-300 hover:bg-gray-200">
              Kindle Store <ChevronDown className="w-3 h-3" />
            </button>
            <input
              className="flex-1 px-3 text-[#0F1111] outline-none bg-white placeholder:text-[#555555]"
              placeholder="Search Amazon.co.uk"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] w-12 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#0F1111]" />
            </button>
          </div>
          <a className="flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm gap-1">
            <span className="text-base">🇬🇧</span>
            <span className="font-bold text-sm">EN</span>
            <ChevronDown className="w-3 h-3 mt-2 text-[#cccccc]" />
          </a>
          <div className="relative group h-[50px]">
            <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent group-hover:border-white rounded-sm leading-tight cursor-pointer">
              <div className="text-xs">Hello, F.U.</div>
              <div className="font-bold flex items-center">Account & Lists <ChevronDown className="w-3 h-3 ml-1" /></div>
            </a>
            {/* Dropdown */}
            <div className="absolute right-0 top-full z-50 hidden group-hover:block text-[#0F1111]">
              <div className="w-3 h-3 bg-white rotate-45 absolute -top-1 right-24 border-t border-l border-gray-200" />
              <div className="bg-white shadow-2xl border border-gray-200 rounded-sm flex p-4 gap-6 min-w-[700px]">
                {/* Your Lists */}
                <div className="w-48 border-r border-gray-200 pr-6">
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
                <div className="w-60">
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
        {/* Sub nav */}
        <div className="bg-[#232f3e] flex items-center h-[39px] px-2 text-white text-sm">
          <button className="flex items-center px-3 h-full font-bold border border-transparent hover:border-white rounded-sm">
            <Menu className="w-4 h-4 mr-1" /> All
          </button>
          {navLinks.map((l) => (
            <a key={l} className="px-3 h-full flex items-center border border-transparent hover:border-white rounded-sm whitespace-nowrap">
              {l}
              {(l === "Fresh" || l === "Prime") && <ChevronDown className="w-3 h-3 ml-1" />}
            </a>
          ))}
          <div className="ml-auto flex items-center gap-3 pr-2">
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
        <a className="hover:text-[#C7511F] hover:underline">Comics & Mangas</a>
        <ChevronRight className="inline w-3 h-3 mx-1" />
        <a className="hover:text-[#C7511F] hover:underline">Comics</a>
      </div>

      {/* Main product layout */}
      <main className="px-6 py-4 grid grid-cols-12 gap-6 max-w-[1500px]">
        {/* Image */}
        <div className="col-span-3">
          <img
            src={coverAsset.url}
            alt="Rage Comics - The Definitive Collection, Vol. 2"
            className="w-full h-auto"
          />
        </div>

        {/* Center details */}
        <div className="col-span-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-normal leading-tight">
              Rage Comics - The Definitive Collection, Vol. 2 (400+ comics)
            </h1>
            <button className="border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-1 text-sm">
            <span>by </span>
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline">F.U. Derpstein</a>
            <span> (Author)</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="font-bold">Format:</span> <span>Kindle Edition</span>
          </div>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <span className="font-bold">4.4</span>
            <div className="flex text-[#DE7921]">
              {[0,1,2,3].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
              <Star className="w-4 h-4 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
            </div>
            <ChevronDown className="w-3 h-3 text-[#007185]" />
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline ml-1">(188)</a>
          </div>

          <hr className="my-3 border-gray-200" />

          <p className="text-sm leading-5">
            Over 400 Rage Comics in this digital collection, all are author approved and represent the best and funniest. Vol. 1 2 and 3 are also available in paperback.
          </p>

          {/* Details strip */}
          <div className="mt-4 border border-gray-200 rounded-md">
            <div className="grid grid-cols-5 p-4 text-center text-xs relative">
              {[
                { label: "Print length", icon: <FileText className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline">324 pages <ChevronDown className="inline w-3 h-3" /></a> },
                { label: "Language", icon: <Globe className="w-5 h-5 mx-auto" />, value: <span className="font-bold">English</span> },
                { label: "Accessibility", icon: <Accessibility className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Learn more</a> },
                { label: "Publication date", icon: <CalendarDays className="w-5 h-5 mx-auto" />, value: <span className="font-bold">14 April 2012</span> },
                { label: "File size", icon: <HardDrive className="w-5 h-5 mx-auto" />, value: <span className="font-bold">77.5 MB</span> },
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

          <p className="text-sm">Due to its large file size, this book may take longer to download</p>

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
              <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold">F.U. Derpstein</Link>
              <button className="px-6 py-1 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm">Follow</button>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Product details</h2>
            <dl className="mt-3 text-sm space-y-1.5">
              <div><dt className="inline font-bold">Publisher </dt><dd className="inline">: Createspace Independent Pub</dd></div>
              <div><dt className="inline font-bold">Publication date </dt><dd className="inline">: 2 November 2011</dd></div>
              <div><dt className="inline font-bold">Language </dt><dd className="inline">: English</dd></div>
              <div><dt className="inline font-bold">Print length </dt><dd className="inline">: 324 pages</dd></div>
              <div><dt className="inline font-bold">ISBN-10 </dt><dd className="inline">: 1466481722</dd></div>
              <div><dt className="inline font-bold">ISBN-13 </dt><dd className="inline">: 978-1466481725</dd></div>
              <div><dt className="inline font-bold">Item Weight </dt><dd className="inline">: 249 g</dd></div>
              <div><dt className="inline font-bold">Dimensions </dt><dd className="inline">: 14.61 x 2.54 x 23.5 cm</dd></div>
              <div><dt className="inline font-bold">Best Sellers Rank </dt><dd className="inline">: #9,818 in <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Humour (Books)</a></dd></div>
              <div className="flex items-center gap-2 pt-1">
                <dt className="font-bold">Customer Reviews:</dt>
                <dd className="flex items-center gap-1">
                  <span>4.4</span>
                  <div className="flex text-[#DE7921]">
                    {[0,1,2,3].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
                    <Star className="w-4 h-4 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
                  </div>
                  <ChevronDown className="w-3 h-3 text-[#007185]" />
                  <a className="text-[#007185] hover:text-[#C7511F] hover:underline">(188)</a>
                </dd>
              </div>
            </dl>
          </div>

          {/* About the author */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">About the author</h2>
            <p className="text-sm mt-2">Follow authors to get new release updates, plus improved recommendations.</p>
            <div className="mt-5 flex gap-5">
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-full bg-[#dde4e6] flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#b8c4c7]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
                </div>
                <button className="px-6 py-1 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm">Follow</button>
              </div>
              <div className="flex-1">
                <Link to="/account" className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold text-lg">F.U. Derpstein</Link>
                <p className="text-sm mt-2">Discover more of the author's books, see similar authors, read book recommendations and more.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buy box stays in right col — close the center wrapper */}

        {/* Buy box */}
        <aside className="col-span-3">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="border border-gray-400 rounded-md p-3">
              <div className="font-bold">Paperback</div>
              <div className="text-[#565959]">—</div>
            </div>
            <p className="mt-6 text-center text-sm text-[#0F1111]">
              This edition of this title is not available for purchase in your country. Choose an available edition from the options above
            </p>
          </div>
          <button className="mt-3 w-full border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm">
            Add to Wish List
          </button>
        </aside>

        {/* Customer reviews — full width */}
        <section className="col-span-12 mt-8 border-t border-gray-200 pt-6 grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <h2 className="text-xl font-bold">Customer reviews</h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-[#DE7921]">
                {[0,1,2,3].map(i => <Star key={i} className="w-5 h-5 fill-[#DE7921]" />)}
                <Star className="w-5 h-5 fill-[#DE7921]" strokeWidth={0} style={{clipPath:"inset(0 50% 0 0)"}} />
              </div>
              <span className="font-bold">4.4 out of 5</span>
            </div>
            <p className="text-xs text-[#565959] mt-1">188 global ratings</p>

            <div className="mt-4 space-y-1.5 text-sm">
              {[
                { s: 5, p: 72 },
                { s: 4, p: 12 },
                { s: 3, p: 11 },
                { s: 2, p: 2 },
                { s: 1, p: 3 },
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

          <div className="col-span-9">
            <h3 className="font-bold text-base">Top reviews from United Kingdom</h3>
            <div className="mt-4 space-y-8">
              {[
                {
                  name: "mrs lock",
                  stars: 5,
                  title: "Great",
                  meta: "Reviewed in the United Kingdom on 28 January 2014",
                  body: "I bought this book for my daughter and she loves it. She's a big fan of the meme characters so I thought this would be a good idea for a Christmas gift and give her eyes a rest from reading the comic strips on the computer. You'd definitely have to be a fan of the rage characters to enjoy the book.",
                },
                {
                  name: "Treye",
                  stars: 5,
                  title: "Great rage comic collection!",
                  meta: "Reviewed in the United States on 28 November 2013",
                  body: "Rage comics are undoubtedly my favourite thing on the Interwebz! Whoever F.U. Derpstein is collected the best rage comics and slapped them into one book that I have rated 5 STARRZZZ!",
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
                  title: "Rage comics review",
                  meta: "Reviewed in the United States on 14 April 2013",
                  body: "This is a hilarious book and it's worth what you're paying for. So if you're debating whether to buy it or not, you should definitely buy this.",
                },
                {
                  name: "chuck",
                  stars: 5,
                  title: "Great read, finished it in a night",
                  meta: "Reviewed in the United States on 12 January 2013",
                  body: "Hi this was really a great book of rage. Read half the book in one night and the other half on another.",
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
