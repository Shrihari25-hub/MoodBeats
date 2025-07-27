function OfflineOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f] text-white text-center p-4">
      <div className="max-w-sm">
        <h1 className="text-2xl font-bold mb-4">You're Offline</h1>
        <p className="text-gray-400 mb-2">
          Please check your internet connection.
        </p>
      </div>
    </div>
  );
}

export default OfflineOverlay;
