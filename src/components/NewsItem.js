import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      
         <div className="my-4">
                <div className="card" style={{width: "20rem"}}>
                    <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/25/600x338/3-0-97431674-iStock-834792042-0_1679787577110_1692958200491.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
    );
  }
}

export default NewsItem;
