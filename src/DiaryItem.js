const DiaryItem = ({id, author, content,  emotion}) => {

    return <div className="DiaryItem">
        <div className="info">
            <span>작성자 : {author} | 감정점수 : {emotion}</span>
            {/* <span className="date">{new Date(now).toLocaleTimeString}</span> */}
        </div>
        <div className="content">{content}</div>

    </div>;
};

export default DiaryItem;