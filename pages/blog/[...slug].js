//[...slug] catches all after /blog/ as an array (catch all) 

import { useRouter } from "next/router"

export default function BlogPostPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  )
}