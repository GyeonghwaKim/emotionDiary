import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";
import Button from "../component/Button";
import Header from "../component/Header";
import { getMonthRangeByDate, setPageTilte } from "../util";
import DiaryList from "../component/DiaryList";

const Home = () => {
  const data = useContext(DiaryStateContext);
  console.log(data)
  const [pivotDate, setPivotDate] = useState(new Date());
  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setPageTilte("Winterlood's Emotion Diary")
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};
export default Home;