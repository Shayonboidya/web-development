import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'showcase',
  description: '...',
}
const ShowCasePage = () => {
    return (
        <div className='container mx-auto'>
            <h3>this is showcase</h3>
        </div>
    );
};

export default ShowCasePage;