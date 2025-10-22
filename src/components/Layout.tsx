import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-200 py-8">
      {/* 모바일 박스 */}
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl overflow-hidden 
                      flex flex-col
                      h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)]">
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
