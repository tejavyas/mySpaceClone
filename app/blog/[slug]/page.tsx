// first dynamic route
// bracketed portion is a dynamic route parameter, accessible from the URL
export const dynamic = 'force-dynamic';
export const revalidate = 420;

// typescript interface
interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: {slug:string};
}

export default async function BlogPostPage({params}:Props) {
    // Post is typed as an array of post objects
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json()
    );
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}