"use client";


import { useRouter } from "next/navigation";

const PaginationControl = ({pagination, setPagination}) => {
    const {page, per_page} = pagination;
    const router = useRouter();

  const handlePrevPageClick = () => {
     const prevPage = Number(page) - 1;
     if(prevPage >= 1){
        setPagination({page: prevPage, per_page})
        router.push(`/?page=${prevPage}&per_page=${per_page}`);
        
     }
  };
  const handleNextPageClick = () => {
     const nextPage = Number(page) + 1;
     setPagination({page: nextPage, per_page})
     router.push(`/?page=${nextPage}&per_page=${per_page}`);
     
  };

  return (
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center" style={{marginTop: 10}}>
    <li className="page-item"><button onClick={handlePrevPageClick} disabled={page==='1'} className="page-link" href="#">Previous</button></li>
    <li className="page-item"><div className="page-link" href="#">{page}</div></li>
    <li className="page-item"><button onClick={handleNextPageClick} disabled={page==='3'} className="page-link" href="#">Next</button></li>
  </ul>
</nav>
  )
}

export default PaginationControl