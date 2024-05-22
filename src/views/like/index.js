import like from './like.png';
import selectlike from './selectlike.png';
import heart from './heartimage.jpg';
import Sad from './sademoji.png';
import smileyface from './smileyface.jfif';
import happyface from './happyface.jfif';
import Care from './care.jfif';


import { useState } from 'react';

function Likebtn() {
    const [divHide, setDivHide] = useState(true)
    const [image, setImage] = useState('')


    let imageSelect;
    let selectName = 'Like'
    let display;

    // Reaction Hide Or Show
    { divHide ? display = 'none' : display = '' }


    if (image === 'like') {
        imageSelect = selectlike;
        selectName = 'Like'
    } else if (image === 'heart') {
        imageSelect = heart;
        selectName = 'Love'
    }
    else if (image === 'sad') {
        imageSelect = Sad;
        selectName = 'Sad'
    } else if (image === 'smile') {
        imageSelect = smileyface;
        selectName = 'Smile'
    } else if (image === 'happy') {
        imageSelect = happyface;
        selectName = 'Happy'
    } else if (image === 'care') {
        imageSelect = Care;
        selectName = 'Care'
    } else {
        imageSelect = like;
        selectName = 'Like'
    }

    return (

        <>
            <div style={{ display: display, position: 'absolute', width: "250px", height: '30px', }} >
                <img src={selectlike} width={'40px'} height={'25px'} style={{ paddingLeft: '5px' }} onClick={() => {
                    { setImage('like') }
                    setDivHide(true)
                }} />
                <img src={heart} width={'40px'} height={'25px'} style={{ paddingLeft: '5px' }} onClick={() => {
                    { setImage('heart') }
                    setDivHide(true)
                }} />
                <img src={smileyface} width={'40px'} height={'25px'} style={{ paddingLeft: '5px' }} onClick={() => {
                    { setImage('smile') }
                    setDivHide(true)
                }} />
                <img src={Sad} width={'40px'} height={'25px'} style={{ paddingLeft: '5px' }} onClick={() => {
                    { setImage('sad') }
                    setDivHide(true)
                }} />
                <img src={Care} width={'40px'} height={'30px'} style={{ paddingLeft: '5px' }} onClick={() => {
                    { setImage('care') }
                    setDivHide(true)
                }} />

            </div>
            
            <br />

            <button onClick={() => {
                setDivHide(!divHide)
                setImage('')
            }} style={{ width: '33%', border: 'none', height: '40px', backgroundColor: 'white' }}>
                <img src={imageSelect} width={'30px'} height={'20px'} /> {selectName}</button>

        </>
    )
}
export default Likebtn;