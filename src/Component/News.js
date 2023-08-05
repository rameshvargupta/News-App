import React, { Component } from 'react'
import NewsItem from './NewsItem '
import Spining from './Spining';

export default class News extends Component {
    articles = [
    ]

    kapital = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }
        document.title = `${this.kapital(this.props.category)} - G News`

    }

    async componentDidMount() {
        this.props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c98b2e8ceb4f4a17bb5594ab9a0c1f5f&page=1 &pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        this.props.setProgress(30)
        let data = await fetch(url);
        this.props.setProgress(70)
        let parseData = await data.json()
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
        this.props.setProgress(100)
    }

    nextclick = async () => {
        if (!this.state.page + 1 < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c98b2e8ceb4f4a17bb5594ab9a0c1f5f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parseData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })

        }


    }
    previousclick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c98b2e8ceb4f4a17bb5594ab9a0c1f5f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json()


        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })



    }


    render() {
        return (
            <div>

                <div className='container my-3'>


                    <h1 style={{ color: "red", borderBottom: "5px solid black", display: "inline" }}>
                        <marquee behavior="" scrollamount="10" style={{ backgroundImage: "linear-gradient(to right, indigo,orange,yellow,green,blue,indigo,violet)" }}

                        >G News Top {this.kapital(this.props.category)}  Hedlines</marquee>
                    </h1>
                    <div style={{ paddingTop: "25px" }}>{this.state.loading && <Spining />}</div>

                    <div className="row" >


                        {!this.state.loading && this.state.articles.map((element) => {

                            return (<div className="col-md-4 my-2">
                                <NewsItem item={element.title ? element.title.slice(0, 60) : ""} desciption={element.description ? element.description.slice(0,40) : "Consuming nutrient-dense nuts, rich in  may have"} ImageUrl={element.urlToImage
                                } Newsurl={element.url} publish={element.publishedAt} company={element.source.name} />
                            </div>)


                        })}




                    </div>

                    <div className="container d-flex justify-content-between m-5">
                        <button disabled={this.state.page <= 1} onClick={this.previousclick} type="button" class="btn btn-primary">&#8592; Previous Page</button>
                        <button disabled={this.state.page + 1 > (this.state.totalResults / this.props.pageSize)}
                            onClick={this.nextclick} type="button" class="btn btn-primary mx-3"> Next Page &#8594;</button>
                    </div>



                </div>
            </div>
        )
    }
}
