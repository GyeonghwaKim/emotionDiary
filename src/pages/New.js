import { useNavigate } from "react-router-dom";
import Header from "../component/Header";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Editor from './../component/Editor';
import Button from "../component/Button";

const New = () => {
    const naviate=useNavigate();
    const goBack = () => {
        naviate(-1);
    }

    const {onCreate} = useContext(DiaryDispatchContext);

    const onSubmit= (data) =>{
        const {date,content,emotionId} = data;
        onCreate(date,content,emotionId);
        naviate("/",{replace:true});
    }

    return <div>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button text="< 뒤로 가기" onClick={goBack}/>}
        />
        <Editor onSubmit={onSubmit} />
    </div>;
};
export default New;