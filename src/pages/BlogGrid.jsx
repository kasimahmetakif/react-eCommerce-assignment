import React from 'react';
import BlogBanner from "../components/BlogBanner";
import BlogArea from "../components/BlogArea";

function BlogGrid(props) {
    return (
        <div>
            <BlogBanner />
            <BlogArea />
        </div>
    );
}

export default BlogGrid;