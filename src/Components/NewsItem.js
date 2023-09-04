import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, url, author, publishedAt } = this.props
    return (
      <div className='my-3'>
        <div className="card">
          <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
             position:'absolute',
              right:0
            }
          } >
            <span class="badge rounded-pill bg-danger">{author}</span>
          </div>
         
          <img src={imageUrl === null ? 'https://www.kron4.com/wp-content/uploads/sites/11/2023/06/GettyImages-1489225404.jpg?w=1280https://www.kron4.com/wp-content/uploads/sites/11/2023/06/GettyImages-1489225404.jpg?w=1280' : imageUrl} className="card-img-top" alt="alternate card" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-muted"> Last updated {Date(publishedAt)}</small></p>
            <a href={url} target='_bank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
