import React from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'

const ArticleListCardStyle1 = ({article}) => {
    let navigate = useNavigate();

    return (
        
        <a className="articleListCardStyle1 articleCard" href={"http://localhost:3001/article/" + article.id}>
            <div className="cardImg">
                    <img src={article.feature_img_url !== "" ? article.feature_img_url : article.feature_img_base64} alt=""/>
            </div>
            <div className="articleCardMeta">
                <p className="articleCardCategory">{article.article_categories.split(",")[0]}</p>
                <p className="articleCardTitle articleListCardTitle">{article.title}</p>
            </div>
        </a>
    )
}

export default ArticleListCardStyle1;