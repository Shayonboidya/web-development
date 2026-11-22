import React, { Suspense } from 'react';
import Library from '../component/Home page/Library/Library';
import LibrarySkeleton from '../skeliton/WorkCardSkeleton';

const ExcercisePage = () => {
    return (
        <Suspense fallback={<LibrarySkeleton></LibrarySkeleton>}>
            <Library></Library>
        </Suspense>
    );
};

export default ExcercisePage;