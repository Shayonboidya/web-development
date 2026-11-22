import { Suspense } from "react";
import Banner from "./component/Home page/Banner";
import Library from "./component/Home page/Library/Library";
import LibrarySkeleton from "./skeliton/WorkCardSkeleton";

export default function Home() {
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<LibrarySkeleton></LibrarySkeleton>}>
                <Library></Library>
            </Suspense>
        </div>
    );
}
