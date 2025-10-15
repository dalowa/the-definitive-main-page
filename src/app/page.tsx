import SearchBar from "@/components/features/SearchBar";
import TaskForm from "@/components/features/TaskForm";
import TaskList from "@/components/features/TaskList";
import TaskStats from "@/components/features/TaskStats";

export const metadata = {
  title: "The Definitive Main Page",
  description: "Dalowa's enhanced productivity hub - Task management and universal search",
  icons: {
    icon: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    shortcut: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    apple: "https://www.svgrepo.com/show/513371/macbook-pro.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⚡</span>
          </div>
          <h1 className="text-xl font-semibold text-white">Productivity Hub</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <span className="text-xl">🔔</span>
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <span className="text-xl">🌙</span>
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <span className="text-xl">⚙️</span>
          </button>
        </div>
      </header>

      {/* Search Section */}
      <div className="px-6 py-6">
        <SearchBar />
      </div>

      {/* Main Content */}
      <div className="px-6 pb-8">
        {/* Stats Row */}
        <TaskStats />
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Today's Focus */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-white">Today&apos;s Focus</h2>
              <TaskForm />
            </div>
            <TaskList />
          </div>
          
          {/* Right Column - Widgets */}
          <div className="space-y-6">
            {/* Focus Timer Widget */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Focus Timer</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent transform rotate-45"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold">25:00</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  Start
                </button>
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Weather</h3>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold">24°C</div>
                  <div className="text-gray-400 text-sm">New York, USA</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl mb-1">☀️</div>
                  <div className="text-sm text-gray-400">Sunny</div>
                </div>
              </div>
            </div>

            {/* World Clock Widget */}
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">World Clock</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">London, UK</span>
                  <span className="font-semibold">10:30 AM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tokyo, Japan</span>
                  <span className="font-semibold">06:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
