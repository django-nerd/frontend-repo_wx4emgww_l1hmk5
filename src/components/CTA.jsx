import React from 'react'

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 shadow-xl text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold">Stop zip-bombing your files, start encrypting them.</h3>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Protect your stuff without selling your soul to some shady cloud. PyKryptor runs local, fast, and keeps its hands to itself.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="https://github.com/Commonwealthrocks/PyKryptor"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-black/30 hover:bg-black/40 border border-white/20 font-semibold"
            >
              Get the damn code
            </a>
            <a
              href="https://github.com/Commonwealthrocks/PyKryptor#usage"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90"
            >
              Usage examples
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
