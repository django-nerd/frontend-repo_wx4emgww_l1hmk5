import React from 'react'

const Feature = ({ title, desc }) => (
  <div className="p-6 rounded-2xl bg-slate-800/60 border border-white/10 hover:border-blue-400/40 transition group">
    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-200">{title}</h3>
    <p className="text-blue-200/80 text-sm leading-relaxed">{desc}</p>
  </div>
)

const Features = () => {
  const items = [
    {
      title: 'AEAD that slaps',
      desc: 'AES-256-GCM or ChaCha20-Poly1305. Pick your poison. Both authenticated, both fast, both unapologetically secure.'
    },
    {
      title: 'Key derivation that doesn\'t suck',
      desc: 'Argon2id by default with sane parameters. PBKDF2 fallback if your CPU forgot what decade it is.'
    },
    {
      title: 'C extensions',
      desc: 'For secure memory wiping (shred it to oblivion) and AES-NI detection. Because some things belong close to the metal.'
    },
    {
      title: 'Archive & compression',
      desc: 'Bundle files and directories, compress with different rates. It\'s not 7‑Zip levels of wizardry, but it\'s damn convenient.'
    },
    {
      title: 'Your knobs, your call',
      desc: 'Every option is exposed. Tweak algorithms, memory cost, time cost, threads, compression—go wild.'
    },
    {
      title: 'Open-source goodness',
      desc: 'MIT licensed. One repo. Free forever. Go read the code, roast it, star it, fork it.'
    }
  ]

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f, i) => (
            <Feature key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
