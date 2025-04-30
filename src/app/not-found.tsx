// No imports needed unless you add something new

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-xl w-full px-6 py-12 text-center">
        {/* Keep the headings as they are, they work well */}
        <h1 className="font-playfair text-6xl mb-4 text-amber-600">
          Coming Soon
        </h1>
        <h2 className="text-3xl font-playfair mb-6">
          Website Under Construction
        </h2>

        {/* Update the paragraph text */}
        <p className="text-gray-600 mb-10">
          This page is under construction. We are currently **revamping our website** to bring you a better experience. We appreciate your patience and ask you to please check back again shortly!
        </p>

       
      </div>
    </div>
  );
}