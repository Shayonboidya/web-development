import React from 'react';

const BlogsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <h3>fixed portion</h3>
            <div>{children}</div>
        </div>
    );
};

export default BlogsLayout;