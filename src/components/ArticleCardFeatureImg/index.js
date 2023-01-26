import React, {useEffect, useState} from 'react'
import axios from 'axios';

const ArticleCardFeatureImg = ({articleId}) => {

    const [featureImg, setFeatureImg] = useState()
    useEffect(() => {
        // let navigate = useNavigate();
        var API_KEY = '33067439-3b605051e237f2a21b012f74d';
        var URL = "https://pixabay.com/api/?key="+API_KEY+`&id=${articleId}`
        axios.get(URL).then((response) => {
            setFeatureImg(response.data.hits[0].largeImageURL)
          });
    }, [articleId])

    return (
            <div className="cardImg">
                <img src={featureImg} alt=""/>
            </div>
    )
}

export default ArticleCardFeatureImg;