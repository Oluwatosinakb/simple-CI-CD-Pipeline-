import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Replace "digitaley-drive-logo.png" with the actual logo filename */}
      <Image
        src="/digitaley-drive-logo.png"
        alt="Digitaley Drive Logo"
        width={300}
        height={300}
        priority
      />
    </div>
  );
}
