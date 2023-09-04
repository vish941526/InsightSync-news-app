import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    pageSize:5,
    country: "in",
    category: "general"
  }
   PropTypes={
    pageSize:PropTypes.number,
    country: PropTypes.string,
    category:PropTypes.string,
  }
  
  
constructor(props){
  super(props);
  this.state={
    articles :[],
    loading : false,
    page:1,
    totalResults:0
  }
  document.title=`${this.props.category}-InsightSync`
}



async updateNews(){
  this.props.setProgress(10);
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb685537f31c46c79d71a3ba5539707f&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  this.props.setProgress(30);
  let parsedData = await data.json()
  this.props.setProgress(70);
  this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults,
    loading:false
  })
  this.props.setProgress(100);
}
async componentDidMount(){
  this.updateNews();
}


fetchMoreData = async () => {
  this.setState({page:this.state.page+1})
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cb685537f31c46c79d71a3ba5539707f&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: this.state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    loading:false
  })
  }



  render() {
    return (
      <div className='container my-4'>
        <h1  className='text-center mb-4' style={{color: '#5f39cb'}}> Top {this.props.category} Headlines From InsightSync</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className="row">
          {this.state.articles.map((elements)=>{
              return  <div className='col-md-4'>
                  <NewsItem title={elements.title} discription={elements.description} publishedAt={elements.publishedAt} author={elements.author} imageUrl={elements.urlToImage} url={elements.url}/>
                </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    )
  }
}

export default News
