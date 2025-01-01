import { useParams } from "react-router-dom";

const Diary = () => {

    //구조분해할당해주셈
    const {id}=useParams();
    
    return( 
    <div>
        <div>{id}번 일기</div>
        <div>Diary 페이지입니다</div>
    </div>
    );
};

export default Diary;