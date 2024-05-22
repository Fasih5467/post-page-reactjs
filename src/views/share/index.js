import shareIcon from './share.png';

function Sharebtn() {
    return (
        <button style={{ width: '33%', border: 'none', height: '40px', backgroundColor: 'white' }}><img src={shareIcon} width={'30px'} height={'20px'} /> Share</button>
    )
}
export default Sharebtn;