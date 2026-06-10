import { createFileRoute } from "@tanstack/react-router";
import {
  ChevronDown,
  ChevronRight,
  Star,
  Share2,
  FileText,
  Globe,
  Accessibility,
  CalendarDays,
  HardDrive,
  Flag,
  BadgeCheck,
  Download,
  BookOpen,
  Heart,
  Twitter,
  Instagram,
  Youtube,
  Users,
  Calendar,
  Layers,
} from "lucide-react";
import coverAsset from "@/assets/rage-comics-cover.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rage Comics — The Definitive Collection Vol. 2 | F.U. Derpstein Studios" },
      { name: "description", content: "Official creator edition: Over 400 creator-approved rage comics, remastered and archived by F.U. Derpstein." },
    ],
  }),
  component: Index,
});

const subNav = [
  "Collections",
  "Vol. 1",
  "Vol. 2",
  "Vol. 3",
  "Greatest Hits",
  "Rare Archive",
  "About the Creator",
  "Community",
  "Support",
];

const timeline = [
  { year: "2008", title: "First Rage Comics", text: "The original four-panel rage comic is born on early imageboards." },
  { year: "2010", title: "Viral Expansion", text: "Trollface, Forever Alone & Me Gusta sweep the internet." },
  { year: "2012", title: "Definitive Collection Vol. 2", text: "The first official curated archive is published." },
  { year: "2025", title: "Creator Archive Edition", text: "Remastered, restored and personally annotated." },
];

const community = [
  { quote: "The Vol. 2 cover trollface is burned into my soul.", fan: "@memehistorian", likes: "4.2k" },
  { quote: "Finally — the originals, in one place, the way they were meant to be read.", fan: "@derp_fan_88", likes: "3.1k" },
  { quote: "Bought a paperback for my nephew. He gets it now.", fan: "@uncle_rage", likes: "2.7k" },
  { quote: "FFFFFUUUUU- this brings me back to 2010.", fan: "@oldweb", likes: "5.6k" },
  { quote: "Author commentary is gold. Worth it alone.", fan: "@comicnerd", likes: "1.9k" },
  { quote: "Y U NO release Vol. 4?!", fan: "@y_u_no", likes: "6.8k" },
];

const related = [
  { title: "Rage Comics — Vol. 1", meta: "The Origins • 280 pages", rating: "4.6" },
  { title: "Rage Comics — Vol. 3", meta: "The Golden Age • 352 pages", rating: "4.7" },
  { title: "Greatest Hits", meta: "Best of 2008–2014 • 410 pages", rating: "4.9" },
  { title: "Rare Comics Archive", meta: "Lost & unreleased • 198 pages", rating: "4.5" },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#0F1111] text-sm">
      {/* Top header — author branded, Amazon-dark for familiarity */}
      <header className="bg-[#131921] text-white">
        <div className="flex items-center px-6 h-[60px] gap-6">
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-wide">F.U. DERPSTEIN STUDIOS</div>
            <div className="text-[11px] text-[#cccccc] -mt-0.5">The Home of Rage Comics</div>
          </div>
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {["Home", "Collections", "About", "Community", "Archive"].map((l) => (
              <a key={l} className="px-3 py-1.5 text-sm border border-transparent hover:border-white rounded-sm cursor-pointer">
                {l}
              </a>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a className="px-3 h-[40px] flex flex-col justify-center border border-transparent hover:border-white rounded-sm leading-tight cursor-pointer">
              <div className="text-xs text-[#cccccc]">Welcome back,</div>
              <div className="font-bold flex items-center text-sm">Your Library <ChevronDown className="w-3 h-3 ml-1" /></div>
            </a>
            <div className="w-8 h-8 rounded-full bg-[#febd69] text-[#131921] font-bold flex items-center justify-center text-xs">YU</div>
          </div>
        </div>
        {/* Sub nav */}
        <div className="bg-[#232f3e] flex items-center h-[39px] px-6 text-white text-sm gap-1 overflow-x-auto">
          {subNav.map((s, i) => (
            <a key={s} className={`px-3 h-full flex items-center border border-transparent hover:border-white rounded-sm whitespace-nowrap cursor-pointer ${i === 0 ? "font-bold" : ""}`}>
              {s}
              {(s === "Collections" || s === "About the Creator") && <ChevronDown className="w-3 h-3 ml-1" />}
            </a>
          ))}
          <span className="ml-auto text-[#febd69] font-bold text-xs">OFFICIAL CREATOR STORE</span>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="px-6 pt-3 text-xs text-[#565959] max-w-[1500px]">
        <a className="hover:text-[#C7511F] hover:underline cursor-pointer">Collections</a>
        <ChevronRight className="inline w-3 h-3 mx-1" />
        <a className="hover:text-[#C7511F] hover:underline cursor-pointer">Rage Comics</a>
        <ChevronRight className="inline w-3 h-3 mx-1" />
        <a className="hover:text-[#C7511F] hover:underline cursor-pointer">Vol. 2</a>
      </div>

      {/* Main product layout */}
      <main className="px-6 py-4 grid grid-cols-12 gap-6 max-w-[1500px]">
        {/* Image */}
        <div className="col-span-3">
          <img
            src={coverAsset.url}
            alt="Rage Comics - The Definitive Collection, Vol. 2"
            className="w-full h-auto border border-gray-200"
          />
          <div className="mt-3 flex gap-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-16 border border-gray-300 bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">pg {i}</div>
            ))}
          </div>
        </div>

        {/* Center details */}
        <div className="col-span-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-normal leading-tight">
              Rage Comics — The Definitive Collection Vol. 2
            </h1>
            <button className="border border-gray-300 rounded-full w-9 h-9 flex items-center justify-center shadow-sm">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-1 text-sm">
            <span>by </span>
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">F.U. Derpstein</a>
            <span> (Author & Creator)</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="font-bold">Format:</span> <span>Digital + Paperback</span>
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 bg-[#e7f4ea] text-[#067D62] text-xs font-bold px-2 py-1 rounded">
            <BadgeCheck className="w-4 h-4" /> Official Creator Edition
          </div>

          <div className="mt-3 flex items-center gap-4 text-sm flex-wrap">
            <div className="flex items-center gap-1">
              <span className="font-bold">4.8</span>
              <div className="flex text-[#DE7921]">
                {[0,1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-[#DE7921]" />)}
              </div>
              <ChevronDown className="w-3 h-3 text-[#007185]" />
            </div>
            <a className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">1,300 reviews</a>
            <span className="text-gray-300">|</span>
            <span><span className="font-bold">52,000+</span> readers</span>
            <span className="text-gray-300">|</span>
            <span><span className="font-bold">128,400+</span> downloads</span>
          </div>

          <hr className="my-3 border-gray-200" />

          <p className="text-sm leading-5">
            Over 400 creator-approved rage comics, remastered and archived by the original creator. Every panel personally selected, restored, and annotated by F.U. Derpstein.
          </p>

          {/* Details strip */}
          <div className="mt-4 border border-gray-200 rounded-md">
            <div className="grid grid-cols-5 p-4 text-center text-xs relative">
              {[
                { label: "Print length", icon: <FileText className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">324 pages <ChevronDown className="inline w-3 h-3" /></a> },
                { label: "Language", icon: <Globe className="w-5 h-5 mx-auto" />, value: <span className="font-bold">English</span> },
                { label: "Accessibility", icon: <Accessibility className="w-5 h-5 mx-auto" />, value: <a className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">Learn more</a> },
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

          <a className="block mt-3 text-[#007185] hover:text-[#C7511F] hover:underline text-sm cursor-pointer">See all details</a>

          <hr className="my-3 border-gray-200" />

          <p className="text-sm">Due to its large file size, this book may take longer to download</p>

          <a className="mt-3 inline-flex items-center gap-2 text-[#007185] hover:text-[#C7511F] hover:underline text-sm cursor-pointer">
            <Flag className="w-4 h-4" /> Report an issue with this product
          </a>

          {/* Product details */}
          <div className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Product details</h2>
            <dl className="mt-3 text-sm space-y-1.5">
              <div><dt className="inline font-bold">Edition </dt><dd className="inline">: Official Creator Edition</dd></div>
              <div><dt className="inline font-bold">ASIN </dt><dd className="inline">: B007UJJDTS</dd></div>
              <div><dt className="inline font-bold">Accessibility </dt><dd className="inline">: <a className="text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">Learn more</a></dd></div>
              <div><dt className="inline font-bold">Publication date </dt><dd className="inline">: 14 April 2012</dd></div>
              <div><dt className="inline font-bold">Language </dt><dd className="inline">: English</dd></div>
              <div><dt className="inline font-bold">File size </dt><dd className="inline">: 77.5 MB</dd></div>
              <div><dt className="inline font-bold">Print length </dt><dd className="inline">: 324 pages</dd></div>
            </dl>
          </div>

          {/* Creator Notes */}
          <section className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Creator Notes</h2>
            <div className="mt-3 border-l-4 border-[#febd69] bg-[#fff8e7] p-4 rounded-sm">
              <p className="text-sm leading-6 italic">
                "This collection contains my favorite rage comics from the early internet era. Every comic included was personally selected and restored for this edition."
              </p>
              <div className="mt-2 text-xs font-bold">— F.U. Derpstein</div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="border border-gray-200 rounded p-3">
                <div className="font-bold mb-1">On restoration</div>
                <p className="text-[13px] text-[#565959]">Every panel was rescanned from the original files and color-corrected by hand.</p>
              </div>
              <div className="border border-gray-200 rounded p-3">
                <div className="font-bold mb-1">On selection</div>
                <p className="text-[13px] text-[#565959]">Cut anything that didn't age well. Kept the comics that still make me laugh in 2025.</p>
              </div>
            </div>
          </section>

          {/* Archive Timeline */}
          <section className="mt-10 border-t border-gray-200 pt-5">
            <h2 className="text-lg font-bold">Archive Timeline</h2>
            <div className="mt-4 relative">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-300" />
              <div className="space-y-4">
                {timeline.map((t) => (
                  <div key={t.year} className="flex gap-4">
                    <div className="relative z-10 w-6 h-6 rounded-full bg-[#131921] text-white text-[10px] font-bold flex items-center justify-center mt-1 shrink-0">●</div>
                    <div className="flex-1 border border-gray-200 rounded p-3 bg-white">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-[#C7511F]">{t.year}</span>
                        <span className="font-bold">{t.title}</span>
                      </div>
                      <p className="text-[13px] text-[#565959] mt-1">{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Creator storefront buy box */}
        <aside className="col-span-3">
          <div className="border border-gray-300 rounded-md p-4">
            <div className="text-base font-bold mb-3">Support the Creator</div>
            <div className="text-xs text-[#565959] mb-3">In stock • Ships from F.U. Derpstein Studios</div>

            <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-2 text-sm font-medium shadow-sm flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> Download Digital Edition
            </button>
            <button className="mt-2 w-full bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-full py-2 text-sm font-medium shadow-sm flex items-center justify-center gap-2">
              <BookOpen className="w-4 h-4" /> Get Collector Paperback
            </button>
            <button className="mt-2 w-full bg-white hover:bg-gray-50 border border-gray-300 rounded-full py-2 text-sm font-medium shadow-sm">
              Read Free Sample
            </button>

            <div className="mt-4 text-[12px] text-[#565959] leading-5 border-t border-gray-200 pt-3">
              Every purchase directly supports F.U. Derpstein and future comic projects.
            </div>

            <ul className="mt-4 text-xs space-y-1.5 text-[#565959]">
              <li>✓ DRM-free download</li>
              <li>✓ Lifetime re-downloads</li>
              <li>✓ Signed bookplate with paperback</li>
            </ul>
          </div>
          <button className="mt-3 w-full border border-gray-300 rounded-lg py-2 text-sm bg-white hover:bg-gray-50 shadow-sm">
            Add to Wish List
          </button>

          {/* Quick stats */}
          <div className="mt-4 border border-gray-200 rounded-md p-4 text-xs">
            <div className="font-bold mb-2 text-sm">Creator Stats</div>
            <div className="flex justify-between py-1"><span className="text-[#565959]">Years creating</span><span className="font-bold">17</span></div>
            <div className="flex justify-between py-1"><span className="text-[#565959]">Comics published</span><span className="font-bold">2,400+</span></div>
            <div className="flex justify-between py-1"><span className="text-[#565959]">Community size</span><span className="font-bold">180k</span></div>
          </div>
        </aside>
      </main>

      {/* Author / About section */}
      <section className="px-6 max-w-[1500px] mt-6">
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold">About F.U. Derpstein</h2>
          <div className="mt-4 grid grid-cols-12 gap-6">
            <div className="col-span-2">
              <div className="w-32 h-32 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z"/></svg>
              </div>
              <button className="mt-3 w-full px-4 py-1.5 border border-gray-300 rounded-full text-sm bg-white hover:bg-gray-50 shadow-sm font-medium">Follow</button>
            </div>
            <div className="col-span-7">
              <div className="text-base font-bold">F.U. Derpstein</div>
              <div className="text-xs text-[#565959]">Creator • Curator • Internet Meme Historian</div>
              <p className="mt-3 text-sm leading-6">
                Creator of Rage Comics and curator of internet meme history. For nearly two decades, F.U. Derpstein has documented, restored, and preserved the comics that defined an era of the early web — from the first trollface to the last definitive collection.
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline flex items-center gap-1.5 cursor-pointer"><Twitter className="w-4 h-4" /> @derpstein</a>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline flex items-center gap-1.5 cursor-pointer"><Instagram className="w-4 h-4" /> @ragecomics</a>
                <a className="text-[#007185] hover:text-[#C7511F] hover:underline flex items-center gap-1.5 cursor-pointer"><Youtube className="w-4 h-4" /> /derpsteinstudios</a>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-2 gap-2 text-center">
              {[
                { icon: <Calendar className="w-4 h-4" />, label: "Years creating", value: "17" },
                { icon: <Layers className="w-4 h-4" />, label: "Comics published", value: "2,400+" },
                { icon: <Users className="w-4 h-4" />, label: "Community", value: "180k" },
                { icon: <Heart className="w-4 h-4" />, label: "Total likes", value: "9.1M" },
              ].map((s) => (
                <div key={s.label} className="border border-gray-200 rounded p-2">
                  <div className="text-[#007185] flex justify-center">{s.icon}</div>
                  <div className="font-bold text-sm mt-1">{s.value}</div>
                  <div className="text-[11px] text-[#565959]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Showcase */}
      <section className="px-6 max-w-[1500px] mt-10">
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold">Community Showcase</h2>
            <a className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">See all reactions</a>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {community.map((c, i) => (
              <div key={i} className="border border-gray-200 rounded-md p-3 bg-white">
                <div className="h-32 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-gray-400 text-xs">
                  Comic #{i + 1}
                </div>
                <p className="text-sm mt-3 leading-5">"{c.quote}"</p>
                <div className="mt-2 flex items-center justify-between text-xs text-[#565959]">
                  <span>{c.fan}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-[#C7511F] text-[#C7511F]" /> {c.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Collections */}
      <section className="px-6 max-w-[1500px] mt-10">
        <div className="border-t border-gray-200 pt-6">
          <h2 className="text-xl font-bold">Related Collections from F.U. Derpstein</h2>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {related.map((r) => (
              <div key={r.title} className="border border-gray-200 rounded-md p-3 hover:shadow-md transition-shadow">
                <div className="h-44 bg-[#FFB728] border border-gray-200 rounded flex items-center justify-center text-[#131921] font-extrabold text-center px-2">
                  {r.title.split("—")[1] ?? r.title}
                </div>
                <div className="mt-3 text-sm font-medium leading-tight">{r.title}</div>
                <div className="text-xs text-[#565959] mt-1">{r.meta}</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <div className="flex text-[#DE7921]">
                    {[0,1,2,3,4].map(i => <Star key={i} className="w-3 h-3 fill-[#DE7921]" />)}
                  </div>
                  <span className="text-[#007185]">{r.rating}</span>
                </div>
                <button className="mt-2 w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-full py-1 text-xs font-medium">View Collection</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-12 bg-[#232f3e] text-white text-center py-8">
        <div className="text-lg font-extrabold tracking-wide">F.U. DERPSTEIN STUDIOS</div>
        <div className="text-xs text-[#cccccc] mt-1">The Home of Rage Comics</div>
        <div className="text-[11px] text-[#cccccc] mt-4">© 2008–2026 F.U. Derpstein Studios. All comics author-owned.</div>
      </footer>
    </div>
  );
}
