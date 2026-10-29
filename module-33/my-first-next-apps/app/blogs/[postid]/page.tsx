
type PageProps = {
    params: Promise<{
        postid: string;
    }>;
};
// TODO : fatch data from an API instaed of using static data
const blogsData = [
    {
        id: 1,
        title: "Getting Started with React",
        author: "Shayon Boidya",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        description: "Learn the basics of React, including components, JSX, props, and state.",
        date: "2026-10-01",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "JavaScript Array Methods",
        author: "John Smith",
        category: "JavaScript",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Explore map, filter, reduce, and other useful JavaScript array methods.",
        date: "2026-10-03",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Understanding Tailwind CSS",
        author: "Sarah Johnson",
        category: "CSS",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
        description: "Build responsive user interfaces quickly using Tailwind CSS utility classes.",
        date: "2026-10-05",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Introduction to Data Structures",
        author: "Alex Brown",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        description: "Understand arrays, linked lists, stacks, queues, and their applications.",
        date: "2026-10-07",
        readTime: "8 min read",
    },
    {
        id: 5,
        title: "Mastering CSS Flexbox",
        author: "Emily Davis",
        category: "CSS",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        description: "Learn how to align, distribute, and arrange elements using Flexbox.",
        date: "2026-10-09",
        readTime: "4 min read",
    },
    {
        id: 6,
        title: "Git and GitHub for Beginners",
        author: "Michael Lee",
        category: "Tools",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
        description: "Learn version control, commits, branches, and how to push projects to GitHub.",
        date: "2026-10-10",
        readTime: "6 min read",
    },
    {
        id: 7,
        title: "Introduction to TypeScript",
        author: "Olivia Wilson",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        description: "Discover how static typing makes JavaScript applications easier to maintain.",
        date: "2026-10-12",
        readTime: "7 min read",
    },
    {
        id: 8,
        title: "Responsive Web Design",
        author: "Daniel Miller",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
        description: "Create websites that look great on mobile phones, tablets, and desktops.",
        date: "2026-10-14",
        readTime: "5 min read",
    },
    {
        id: 9,
        title: "Learning C++ for Competitive Programming",
        author: "Ryan Taylor",
        category: "Competitive Programming",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        description: "Explore essential C++ concepts and techniques for solving programming problems.",
        date: "2026-10-15",
        readTime: "9 min read",
    },
    {
        id: 10,
        title: "Understanding React Hooks",
        author: "Sophia Martin",
        category: "React",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        description: "Learn how useState and useEffect help you manage state and side effects.",
        date: "2026-10-17",
        readTime: "6 min read",
    },
    {
        id: 11,
        title: "How to Build a REST API",
        author: "David Anderson",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
        description: "Understand REST principles, HTTP methods, endpoints, and API responses.",
        date: "2026-10-19",
        readTime: "8 min read",
    },
    {
        id: 12,
        title: "Introduction to Artificial Intelligence",
        author: "Emma Thomas",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
        description: "Discover AI fundamentals and how intelligent systems solve real-world problems.",
        date: "2026-10-21",
        readTime: "7 min read",
    },
    {
        id: 13,
        title: "Database Fundamentals with SQL",
        author: "James White",
        category: "Database",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
        description: "Learn tables, queries, joins, and basic database design using SQL.",
        date: "2026-10-23",
        readTime: "6 min read",
    },
    {
        id: 14,
        title: "Essential Problem-Solving Techniques",
        author: "Isabella Moore",
        category: "Algorithms",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
        description: "Improve your coding skills through logical thinking and algorithmic patterns.",
        date: "2026-10-25",
        readTime: "5 min read",
    },
    {
        id: 15,
        title: "Deploy Your React App with Netlify",
        author: "William Harris",
        category: "Deployment",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        description: "Learn how to deploy a React application and connect it to a GitHub repository.",
        date: "2026-10-27",
        readTime: "4 min read",
    },
];

const Page = async ({ params }: PageProps) => {
    const { postid } = await params;
    const post = blogsData.find((post) => post.id === parseInt(postid));
    // console.log(post);

    return (
        <div>
            {/* <h2>Blog: {postid} </h2> */}
            {
                post && <div>
                    <h2>{post.category} </h2>
                    <h2>{post.title} </h2>
                    <h2>{post.description} </h2>
                </div>
            }
        </div>
    );
};

export default Page;