import React, { Component } from 'react'
import NewsItem from './NewsItem';


import './style.css';

export class News extends Component {
    constructor(){
        super();
        console.log("Hello I am a constructor");
        this.state = {
            articles: [],
            loading: false, 
            page:1
        }
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c8aac7e783bb4618ae582d8cb4697307&page=1&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles,totalResults: parsedData.totalResults})
    }
     handlePrevClick = async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c8aac7e783bb4618ae582d8cb4697307&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({page: this.state.page - 1,
            
    })
    }
    handleNextClick = async()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){}
        else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c8aac7e783bb4618ae582d8cb4697307&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({page: this.state.page + 1,
        articles: parsedData.articles
        })}
    console.log('resss');
}

  render() {
    return (
      <div className="container my-3">
        <h2 className='textcolorheadline textcenterd'>Top headlines</h2>
        <spinner/>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4 ' key={element.url} >
            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; previous</button>
        <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
        </div>
      </div> 
    )
  }
}

export default News
