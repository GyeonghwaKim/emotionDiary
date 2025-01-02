import Button from "../component/Button";
import Header from "../component/Header";

const Home = () =>{
//쿼리스트링 확인
    // const [searchParams,setSearchParams]=useSearchParams();
    // console.log(searchParams.get("sort"));

    return( 
        <div>
            <Header
                title={"Home"}
                leftChild={
                <Button
                type="positive"
                text={"positive 버튼"}
                onClick={() =>{
                    alert("positive button")
                }} />
                }
                rightChild={
<Button
            type="negative"
                text={"negative 버튼"}
                onClick={() =>{
                    alert("negative button")
                }} />
                }
                />
        </div>
    );
};

export default Home;