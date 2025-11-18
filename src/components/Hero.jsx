import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-32 w-[28rem] h-[28rem] bg-cyan-400 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-xs text-blue-200/90 mb-6">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Open-source • MIT • Free as in beer and freedom
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
          PyKryptor
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Encrypt your files like you actually give a damn
          </span>
        </h1>

        <p className="mt-6 text-blue-200/90 text-lg md:text-xl max-w-3xl mx-auto">
          A spicy, no-nonsense file encryptor rocking AES-256-GCM or ChaCha20-Poly1305,
          with Argon2id key derivation (PBKDF2 if your rig is stuck in 2009). C bits for
          secure memory nuking and AES‑NI checks. Archive mode, compression, knobs, switches—
          you name it.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://github.com/Commonwealthrocks/PyKryptor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition"
          >
            <span>★ Star it on GitHub</span>
          </a>
          <a
            href="https://github.com/Commonwealthrocks/PyKryptor#readme"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition"
          >
            <span>Docs & Install</span>
          </a>
        </div>

        <div className="mt-10 bg-black/30 border border-white/10 rounded-xl p-4 text-left max-w-2xl mx-auto">
          <p className="text-blue-200/80 text-sm">Quickstart</p>
          <pre className="mt-2 text-blue-100 text-xs md:text-sm overflow-auto"><code>pip install pykryptor  # or whatever the README says
pykryptor encrypt --algo aes-256-gcm --compression medium ./your-stuff
pykryptor decrypt ./your-stuff.pyk --output ./your-stuff
</code></pre>
        </div>
      </div>
    </section>
  )
}

export default Hero
