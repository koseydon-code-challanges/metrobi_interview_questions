import React from "react";

export default function Question3() {
    return (
        <div className="container space-y-1">
            <div className="w-full h-10 bg-[#57d2ed] flex items-center justify-center">
                <span>Header</span>
            </div>
            <div className="flex h-64 space-x-1">
                <div className="flex-[1] flex-col flex space-y-1">
                    <div className="bg-[#d7c9e3] flex-[1] flex items-center justify-center">
                        <span>Hero</span>
                    </div>
                    <div className="bg-[#9fc363] flex-[1] flex items-center justify-center">
                        <span>Sidebar</span>
                    </div>
                </div>
                <div className="flex-[2] flex-col flex space-y-1">
                    <div className="bg-[#f5c632] flex-[3] flex items-center justify-center">
                        <span>Main Content</span>
                    </div>
                    <div className="bg-[#898989] flex-[1] flex items-center justify-center">
                        <span>Extra Content</span>
                    </div>
                </div>
            </div>
            <div className="flex space-x-1">
                <div className="w-full flex-[2] h-10 bg-[#29af6e] flex items-center justify-center">
                    <span>Related Images</span>
                </div>
                <div className="w-full flex-[1] h-10 bg-[#f1cadc] flex items-center justify-center">
                    <span>Related Posts</span>
                </div>
            </div>
            <div className="w-full h-10 bg-[#f4a905] flex items-center justify-center">
                <span>Footer</span>
            </div>
        </div>
    )
}