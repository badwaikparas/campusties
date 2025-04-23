import React from 'react'
import blogPic from '../../../../Assets/ProjectPhoto/ext.png'

function BlogsCard({ title, description }) {
    return (
        <div className="flex gap-4 items-start py-2 w-full max-w-md">
            <img src={blogPic} alt="Blog" className="w-24 rounded-sm object-cover" />
            <div className="flex flex-col overflow-hidden">
                <h1 className="text-[18px] font-bold leading-snug line-clamp-1 overflow-hidden">
                    {title}
                </h1>
                <span className="text-[14px] text-slate-500 overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {description}dasdasdassdassdasdasdasdasdasdasdasdasdas
                </span>
            </div>
        </div>
    );
}

export default BlogsCard