"use client";

export default function ResumePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-[#fdf7f0]">
      <a
        href="https://drive.google.com/uc?export=download&id=1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO"
        className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        download
      >
        Download Resume
      </a>
      <div className="w-full max-w-4xl h-[90vh] rounded-xl shadow-2xl overflow-hidden bg-white">
        <iframe
          src="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/preview"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
          title="Resume">
          </iframe>
      </div>
      <footer className="absolute bottom-2 text-sm text-gray-500">
        © 2024 - All Rights Reserved
      </footer>
    </main>
  );
}