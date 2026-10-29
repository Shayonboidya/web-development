import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
export const metadata: Metadata = {
  title: 'about',
  description: '...',
}
const AboutPage = () => {
    return (
        <div className='container mx-auto'>
            <p>hello i am shayon. i am larning web devolopment</p>
            {/* <img src="https://images.unsplash.com/photo-1793249970806-38f57f588ebc" width={500} height={600} alt="" /> */}
            <Image src='https://images.unsplash.com/photo-1793249970806-38f57f588ebc' width={500} height={600} alt='images'></Image>

            {/* <Image src={`/shayon.jpg`} width={300} height={400} alt='shayon'></Image> */}



        </div>
    );
};

export default AboutPage;