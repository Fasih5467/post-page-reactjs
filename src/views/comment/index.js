import commentIcon from './comment.png';

function Commentbtn() {
    return (
        <button style={{ width: '33%', border: 'none', height: '40px', backgroundColor: 'white' }}>
            <img src={commentIcon} width={'30px'} height={'20px'} /> Comment</button>
    )
}
export default Commentbtn;