import { createFileRoute } from "@tanstack/react-router";
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
import coverImg from "@/assets/rage-comics-cover.jpg";

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
  "Indian language eBooks",
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
            <span className="text-2xl font-bold">amazon</span>
            <span className="text-xs mt-3">.in</span>
          </a>
          <a className="flex items-end px-2 h-[50px] border border-transparent hover:border-white rounded-sm">
            <MapPin className="w-4 h-4 mb-1" />
            <div className="leading-tight ml-1">
              <div className="text-xs text-[#cccccc]">Delivering to Mumbai 400001</div>
              <div className="text-sm font-bold">Update location</div>
            </div>
          </a>
          <div className="flex flex-1 h-10 rounded-md overflow-hidden">
            <button className="bg-[#f3f3f3] text-[#0F1111] px-3 flex items-center gap-1 text-xs border-r border-gray-300 hover:bg-gray-200">
              Kindle Store <ChevronDown className="w-3 h-3" />
            </button>
            <input
              className="flex-1 px-3 text-[#0F1111] outline-none"
              placeholder="Search Amazon.in"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] w-12 flex items-center justify-center">
              <Search className="w-5 h-5 text-[#0F1111]" />
            </button>
          </div>
          <a className="flex items-center px-2 h-[50px] border border-transparent hover:border-white rounded-sm gap-1">
            <span className="text-base">🇮🇳</span>
            <span className="font-bold text-sm">EN</span>
            <ChevronDown className="w-3 h-3 mt-2 text-[#cccccc]" />
          </a>
          <a className="px-2 h-[50px] flex flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight">
            <div className="text-xs">Hello, sign in</div>
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
              MADE IN INDIA<br />
              <span className="text-white text-[10px]">A TITAN STORY</span>
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
              {(s === "Categories" || s === "Best Sellers" || s === "Indian language eBooks") && <ChevronDown className="inline w-3 h-3 ml-0.5" />}
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
            src={coverImg}
            alt="Rage Comics - The Definitive Collection, Vol. 2"
            width={1024}
            height={1536}
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
              <a className="text-[#007185] hover:text-[#C7511F] hover:underline font-bold">F.U. Derpstein</a>
              <button className="px-6 py-1 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm">Follow</button>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Product details</h2>
            <dl className="mt-3 text-sm space-y-1.5">
              <div><dt className="inline font-bold">ASIN </dt><dd className="inline">: B007UJJDTS</dd></div>
              <div><dt className="inline font-bold">Accessibility </dt><dd className="inline">: <a className="text-[#007185] hover:text-[#C7511F] hover:underline">Learn more</a></dd></div>
              <div><dt className="inline font-bold">Publication date </dt><dd className="inline">: 14 April 2012</dd></div>
              <div><dt className="inline font-bold">Language </dt><dd className="inline">: English</dd></div>
              <div><dt className="inline font-bold">File size </dt><dd className="inline">: 77.5 MB</dd></div>
              <div><dt className="inline font-bold">Print length </dt><dd className="inline">: 324 pages</dd></div>
            </dl>
          </div>
        </div>

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
      </main>

      <footer className="mt-10 bg-[#232f3e] text-white text-xs text-center py-6">
        © 1996-2026, Amazon.com, Inc. or its affiliates
      </footer>
    </div>
  );
}
