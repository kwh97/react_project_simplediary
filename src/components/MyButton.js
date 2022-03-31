const MyButton = ({ text, type, onClick }) => {

	//전달 받은 type이 밑의 배열에 있는 요소인 경우 type, 아닌 경우 default를 btnType에 할당
	const btnType = ['positive', 'negative'].includes(type)? type : "default";

	return(
		<button className={["MyButton", `MyButton_${btnType}`].join(" ")} 
		onClick={onClick}>
			{text}
		</button>
	);
}

MyButton.defaultProps = {
	type: 'default',
};

export default MyButton;