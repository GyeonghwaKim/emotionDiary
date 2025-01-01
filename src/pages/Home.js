import Button from "../component/Button";

const Home = () =>{
//쿼리스트링 확인
    // const [searchParams,setSearchParams]=useSearchParams();
    // console.log(searchParams.get("sort"));

    return( 
        <div>
            <Button
                text={"기본 버튼"}
                onClick={() =>{
                    alert("default button")
                }} />
            <Button
                type="positive"
                text={"positive 버튼"}
                onClick={() =>{
                    alert("positive button")
                }} />
            <Button
            type="negative"
                text={"negative 버튼"}
                onClick={() =>{
                    alert("negative button")
                }} />
        </div>
    );
};

export default Home;