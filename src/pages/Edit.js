import { useNavigate, useSearchParams } from 'react-router-dom';

const Edit = () => {
	const navigate = useNavigate();


	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get("id");
	const mode = searchParams.get("mode");

	console.log("id: ", id);
	console.log("mode: ", mode);

	return(
		<div className="Edit">
			<h2>Edit</h2>
			<p>일기 수정 페이지 입니다.</p>
			
			<button onClick={()=>{
				setSearchParams({
					who: "kwon",

				});
			}}>QS 바꾸기</button>
			
			<button onClick={()=>{
				navigate("/");
			}}>홈으로가기</button>

			<button onClick={()=>{
				navigate(-1);
			}}>뒤로 가기</button>
		</div>
	);
}

export default Edit;

//const navigate = useNavigate(); 링크 이동시킬때 이용함. (활용: 로그인 여부 검사해서 안한 사람 강제로 로그인 페이지 보내버리기 등에 사용)