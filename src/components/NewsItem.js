import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card bg-transparent " style={{width: '18rem'}}>
            <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body ">
                <h5 className="card-title text-white">{title}...</h5>
                <p className="card-text text-white">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Go somewhere</a>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItem
