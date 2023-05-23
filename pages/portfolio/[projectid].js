import { useRouter } from 'next/router'

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query); // returns object projectid with value of url

  // send req to backend 
  // to fetch data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}
