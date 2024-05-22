import FbImageLibrary from 'react-fb-image-grid';
import ReactRoundedImage from "react-rounded-image";
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

import Likebtn from '../like';
import Commentbtn from '../comment';
import Sharebtn from '../share';
import loading from './loadingimage.gif';

function Fbposts() {

    const [data, setData] = useState([])

    useEffect(function () {
        getdata()
    }, [])

    function getdata() {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                setData(res.products)

            })
    }

    // if no data then run this code
    if (!data.length) {
        return <div>
            <img src={loading} alt='loading' width={100} height={100} style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
        </div>
    }
    return (
        <>

            {data.map(function (item, index) {
                return (

                    <Card style={{ width: '50rem', margin: 'auto' }} className="mt-4">
                        <Card.Header style={{ display: 'inline-block' }}>
                        
                            <ReactRoundedImage
                                image={item.thumbnail}
                                imageWidth="50"
                                imageHeight="50"
                                roundedSize="13"

                            />

                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle>{item.brand}</Card.Subtitle>
                        </Card.Header>
                        <FbImageLibrary images={data[index].images} />

                        <div className="navigation-bottons">
                            <hr />
                            <Likebtn />
                            <Commentbtn />
                            <Sharebtn />
                        </div>

                    </Card>
                )
            })}
        </>
    );
}

export default Fbposts;