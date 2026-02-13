import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, HeartHandshake, Moon, Sparkles, HeartPulse, Smile  } from "lucide-react";
import { GiLips } from "react-icons/gi";



const clamp = (n, a, b) => Math.min(b, Math.max(a, n));

function Heart({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21s-7.2-4.7-9.7-9C.5 8.7 2.3 5.8 5.4 5.2c1.7-.3 3.4.4 4.5 1.7.3.3.9.3 1.2 0 1.1-1.3 2.8-2 4.5-1.7 3.1.6 4.9 3.5 3.1 6.8-2.5 4.3-9.7 9-9.7 9z" />
    </svg>
  );
}

function Sparkle({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2l1.6 6.1L20 12l-6.4 3.9L12 22l-1.6-6.1L4 12l6.4-3.9L12 2z" />
    </svg>
  );
}

function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 6,
        size: 16 + Math.random() * 22,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute -bottom-16"
          style={{ left: `${h.left}%`, opacity: h.opacity }}
          initial={{ y: 0, rotate: -10, scale: 0.9 }}
          animate={{ y: -900, rotate: 10, scale: 1.05 }}
          transition={{
            delay: h.delay,
            duration: h.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Heart className="text-pink-200" style={{ width: h.size, height: h.size }} />
        </motion.div>
      ))}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
      <Sparkle className="h-3.5 w-3.5 text-pink-200/90" />
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_-30px_rgba(0,0,0,.65)] backdrop-blur-xl " +
        className
      }
    >
      {children}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {subtitle ? <p className="mt-1 text-sm text-white/70">{subtitle}</p> : null}
    </div>
  );
}

export default function App() {
  const [entered, setEntered] = useState(false);
  // ✨ EDIT THESE (your lover details)
  const loverName = "Maha";
  const yourName = "Kirubakaran";
  const anniversary = "Forever & Always";
  const heroLine = `A tiny page for ${loverName}, with a huge heart.`;
  const note = `You are my favorite place to be. In every version of my life, I’d still choose you.`;

  const memories = [
    { title: "First Smile", text: "The moment you smiled, my world changed." },
    { title: "Our Talks", text: "Even silence feels romantic with you." },
    { title: "Little Things", text: "Your kindness is my daily magic." },
    { title: "Dreams", text: "I love planning a future where you’re always there." },
  ];

  const reasons = [
    "Your smile fixes my worst days.",
    "You make my world feel safe.",
    "Your voice is my comfort.",
    "You are my favorite person.",
    "With you, love feels easy.",
    "You’re my luck + my choice.",
  ];

  const letters = [
    {
      title: (<><div className="flex flex-row justify-start items-center gap-3"> A Love Note <Mail size={20} className="text-pink-300" /></div></>),

      body:
        "If love had a face, it would look like you. Thank you for being my calm, my chaos, my best friend, and my forever.",
    },
    {
                       
      title: (<><div className="flex flex-row justify-start items-center gap-3"> Promise <HeartHandshake size={20} className="text-pink-300" /></div></>),
      
      body:
        "I promise to hold your hand in public, and your heart in private. I’ll choose you on ordinary days and special nights.",
    },
    {
      title: (<><div className="flex flex-row justify-start items-center gap-3"> Forever <Mail size={20} className="text-pink-300" /></div></>),

      body:
        "Let’s be the kind of love that feels like home. Wherever we go, I want it to be with you.",
    },
  ];

  const [openLetter, setOpenLetter] = useState(null);
  const [openMemory, setOpenMemory] = useState(null);

  const [yes, setYes] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const noScale = clamp(1 - noCount * 0.08, 0.65, 1);
  const yesScale = clamp(1 + noCount * 0.12, 1, 1.85);

  const scrollToProposal = () => {
  document.getElementById("proposal")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

if (!entered) {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">
      {/* same animated premium background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#0b0610_0%,#0b0610_70%,#a21caf_85%,#0b0610_100%)] bg-[length:250%_250%] animate-[romanticMove_14s_ease_infinite]" />
      <div className="absolute inset-0 bg-black/35" />

      {/* same floating hearts */}
      <FloatingHearts />

      {/* center container */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-14">
        <motion.div
          initial={{ opacity: 0, y: 28, rotate: -1.2, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="w-full max-w-xl"
        >
          {/* same glass-card look */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-8 shadow-[0_30px_120px_-40px_rgba(0,0,0,.75)] backdrop-blur-2xl">
            {/* premium blobs like portfolio */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pink-500/25 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />

            {/* shimmer highlight */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -left-40 top-0 h-full w-40 rotate-12 bg-white/10 blur-xl"
              animate={{ x: [0, 900] }}
              transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            />

            {/* pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Pill>Private</Pill>
              <Pill>Just for {loverName}</Pill>
              <Pill>Tap to enter</Pill>
            </div>

            {/* title */}
            <div className="mt-6 text-center">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                Dear {loverName},
                <span className="block bg-gradient-to-r from-pink-200 via-rose-200 to-violet-200 bg-clip-text text-transparent">
                  This is for you.
                </span>
              </h1>

              <p className="mt-4 text-white/80">
                “In every version of my life, I had still choose you.”
              </p>

              {/* tiny animated icons */}
              <div className="mt-5 flex items-center justify-center gap-3 text-white/70">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                >
                  <Sparkles className="text-pink-200" size={18} />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >
                  <HeartPulse className="text-pink-200" size={18} />
                </motion.div>

                <span className="text-sm">From {yourName}</span>
              </div>
            </div>

            {/* enter button */}
            <div className="mt-7">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setEntered(true)}
                className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-4 text-sm font-bold shadow-lg shadow-pink-500/25"
                type="button"
              >
                Click humble
              </motion.button>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



  return (
    <div className="min-h-screen bg-[#0b0610] text-white">
      {/* Background */}
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_15%_10%,rgba(236,72,153,.25),transparent_55%),radial-gradient(700px_circle_at_85%_25%,rgba(244,63,94,.22),transparent_55%),radial-gradient(800px_circle_at_50%_100%,rgba(168,85,247,.22),transparent_60%)] animate-[romanticMove_1s_ease_infinite]" />
        <FloatingHearts />

        {/* Top */}
        <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <Pill>Valentine Mini Portfolio</Pill>
              <Pill>Made with love</Pill>
              <Pill>{anniversary}</Pill>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {loverName},
                  <span className="block bg-gradient-to-r from-pink-300 via-rose-300 to-violet-300 bg-clip-text text-transparent">
                    Happy Valentines Day!
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
                  {heroLine}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
                    <Heart className="h-4 w-4 text-pink-200" />
                    From: <span className="font-semibold">{yourName}</span>
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/75">
                    <Sparkle className="h-4 w-4 text-rose-200" />
                    Tap cards for surprises
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <Card className="relative overflow-hidden">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl " />
                  <div className="absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

                  <SectionTitle title="My message for you" subtitle="Short, sweet, honest." />
                  <p className="text-white/80">{note}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                      onClick={() => setOpenLetter(0)}
                    >
                      <div className="flex flex-row justify-center items-center gap-3">
                      Open a love note
                      <Mail size={18} className="text-pink-300" />
                      </div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                      onClick={() => setOpenLetter(1)}
                    >
                      <div className="flex flex-row justify-center items-center gap-3">
                       Read my promise 
                      <HeartHandshake size={18} className="text-pink-300" />
                      </div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                      onClick={() => setOpenLetter(2)}
                    >
                      <div className="flex flex-row justify-center items-center gap-3">
                       Our forever 
                      <Moon size={18} className="text-pink-300" />
                      </div>
                    </motion.button>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink-500/40 to-violet-500/40 px-4 py-3 text-center text-sm font-semibold text-white hover:from-pink-500/50 hover:to-violet-500/50"
                      onClick={scrollToProposal}
                    >
                      <div className="flex flex-row justify-center items-center gap-3">
                       Final question 
                      <Sparkles size={18} className="text-pink-300" />
                      </div>
                    </motion.a>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Memories */}
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <SectionTitle
                  title="Little memories"
                  subtitle="Tap each card (cute animation)."
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  {memories.map((m, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ y: -8, scale: 1.02, rotate: -0.3 }}
                      whileTap={{ scale: 0.97, rotate: 0.3 }}
                      transition={{ type: "spring", stiffness: 380, damping: 22 }}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-4 text-left hover:bg-white/10"
                      onClick={() => setOpenMemory(m)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white">{m.title}</p>
                          <p className="mt-1 text-sm text-white/70">{m.text}</p>
                        </div>
                        <Heart className="h-5 w-5 text-pink-200/70 transition group-hover:scale-110 group-hover:text-pink-200" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </Card>

              <Card>
                <SectionTitle
                  title="Why I love you"
                  subtitle="Because you are you. That is enough."
                />
                <div className="grid gap-2">
                  {reasons.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.03 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <Sparkle className="h-4 w-4 text-rose-200" />
                      <p className="text-sm text-white/80">{r}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Proposal */}
            <Card className="mt-2" id="proposal">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="flex items-center gap-2 text-2xl font-bold">
                    {yes ? (
                      <>
                        Yeii Thankyou Chellow!!!
                        <Smile className="text-yellow-400 animate-bounce" size={24} />
                        <HeartHandshake className="text-pink-400" size={24} />
                      </>
                    ) : (
                      "One last question…"
                    )}
                  </h2>
                  <p className="mt-2 text-white/75 flex items-center gap-2 flex-wrap">
                    {yes ? (
                      <>
                        You are my soul person. I love you soo much Ummjaa.
                        <Sparkles className="text-pink-400 text-xl" />
                      </>
                    ) : (
                      `Will you marry me, ${loverName}?`
                    )}
                  </p>

                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    style={{ scale: yesScale }}
                    whileHover={{ scale: yesScale * 1.03 }}
                    whileTap={{ scale: yesScale * 0.97 }}
                    className="rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-sm font-bold shadow-lg shadow-pink-500/20"
                    onClick={() => setYes(true)}
                  >
                    <div className=" flex items-center justify-center gap-2 text-sm text-white/55">
                      YES
                      <HeartPulse
                        size={16}
                        className="text-white/55 animate-pulse"
                      />
                    </div>

                  </motion.button>

                  {!yes && (
                    <motion.button
                      style={{ scale: noScale }}
                      whileHover={{ scale: noScale * 1.02 }}
                      whileTap={{ scale: noScale * 0.98 }}
                      className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 hover:bg-white/10"
                      onClick={() => setNoCount((c) => c + 1)}
                    >
                      No 🙈
                    </motion.button>
                  )}
                </div>
              </div>

              {!yes && noCount > 0 && (
                <p className="mt-4 text-sm text-white/70">
                  (Hehe… the “YES” button is getting stronger 😄)
                </p>
              )}
            </Card>

            {/* Footer */}
            <div className="pb-6 pt-2 flex items-center justify-center gap-2 text-sm text-white/55">
              Made with
              <HeartPulse
                size={16}
                className="text-pink-400 animate-pulse"
              />
              by <span className="text-white/75">{yourName}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Modal Letters */}
      <AnimatePresence>
        {openLetter !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenLetter(null)}
          >
            <motion.div
              className="w-full max-w-lg"
              initial={{ y: 14, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 10, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="relative">
                <button
                  className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:bg-white/10"
                  onClick={() => setOpenLetter(null)}
                >
                  Close
                </button>

                <h3 className="text-xl font-bold">{letters[openLetter].title}</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  {letters[openLetter].body}
                </p>

                <div className="mt-6 flex items-center justify-end gap-2">
                  <Heart className="h-5 w-5 text-pink-200" />
                  <span className="text-sm text-white/70">Always yours.</span>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
  {openMemory && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpenMemory(null)}
    >
      <motion.div
        className="w-full max-w-lg"
        initial={{ y: 40, scale: 0.95, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.97, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,.75)] backdrop-blur-2xl">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-pink-500/25 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-violet-500/25 blur-3xl" />

          <button
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 hover:bg-white/15"
            onClick={() => setOpenMemory(null)}
          >
            Close
          </button>

          <h3 className="text-xl font-bold">{openMemory.title}</h3>
          <p className="mt-3 text-white/85 leading-relaxed">{openMemory.text}</p>

          <div className="mt-6 flex items-center justify-end gap-2">
            <HeartPulse className="text-pink-300 animate-pulse" size={18} />
            <span className="text-sm text-white/70">That moment is special.</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
