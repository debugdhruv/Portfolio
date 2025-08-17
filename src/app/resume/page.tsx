"use client";

export default function ResumePage() {
  return (
    <main className="relative">
      <a
        href="https://drive.google.com/uc?export=download&id=1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO"
        className="absolute top-4 mt-96 right-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        download
      >
        Download Resume
      </a>
      <iframe
        src="https://drive.google.com/file/d/1QajQRx9Xu8NeX3yaG_dmtDn6XNjkS4YO/preview"
        className="w-full h-screen"
        frameBorder="0"
        allowFullScreen
        title="Resume"
      ></iframe>
    </main>
  );
}