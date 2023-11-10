import back from '@/public/icons/pagination/back.png';
import forward from '@/public/icons/pagination/forward.png';

export default function Pagination() {
  return (
    <div className="Pagination">
      <div className="Pagination__back">
        <img src={back.src} alt="back icon" />
      </div>
      <div className="Pagination__index">
        <span>1</span>
        <span>2</span>
        <span>...</span>
      </div>
      <div className="Pagination__forward">
        <img src={forward.src} alt="forward icon" />
      </div>
    </div>
  )
}