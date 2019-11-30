import React from 'react'
import Axios from 'axios';
import './app.css';
import Heading from './Heading'

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            news:[],
            err:"",
            isError:false
        }
    }

    componentDidMount(){
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7")
        .then(response=>{
            this.setState({
                news:response.data.articles
            })

            console.log(this.state.news);
        })
        .catch(err=>{
            this.setState({
                err:"Oops There was an error while fetching the data to server",
                isError:true
            })
        })
    }

    render(){
        return(
            <React.Fragment>
                <Heading />
                {
                    this.state.news.isError?(<h1>{this.state.news.err}</h1>):
                    (
                    <div className="main-page">
                    {
                        this.state.news.map(data=>{
                            return(
                              <div className="card" key={data.title}>
                                  <div className="card-head">
                                      <h2>
                                             {
                                                 data.title
                                             }
                                      </h2>
                                  </div>
                                  <div className="author">
                                    <p className="text-light">  Source: {data.source.name} &nbsp;&nbsp;&nbsp;  PublishedAt : {data.publishedAt.substr(0,10)} </p>
                                  </div>
                                  <div className="card-body">
                                      <h3>
                                          {
                                              data.description
                                          }
                                      </h3>
                                  </div>
 
                                  <div className="card-body">
                                          <h3>
                                              {
                                                  data.content.substr(0,200)+'...'
                                              }
                                          </h3>
                                          <button className="btn">
                                              <a href={data.url} target="__blank" rel="noopener">
                                                  Read More...
                                              </a>
                                          </button>
                                  </div>
                                 
                              </div>
                            )
                        })
                    }
                 </div>
                    )
                }
               
            </React.Fragment>
        )
    }
}

export default App;