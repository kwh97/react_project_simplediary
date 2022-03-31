import { useParams } from "react-router-dom";

const Diary = () => {

	const {id} = useParams(); //url에 쓰여진 id 숫자를 전달받아온다.

	return(
		<div className="Diary">
			<h1>Diary</h1>
		</div>

	);
}

export default Diary;

// 1. useParams: custom Hook - 전달되는 path variable ("/diary/:id") 을 모아서 객체로 가져다 준다.