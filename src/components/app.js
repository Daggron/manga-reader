import React from 'react'
import Axios from 'axios';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            news:[]
        }
    }

    componentDidMount(){
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=fabb056ff8594a2c9cd1ea680aa83aa7")
        .then(response=>{
            console.log(response.data)
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="main-page">
                    <h1>
                        This is working fine
                    </h1>
                </div>
            </React.Fragment>
        )
    }
}

export default App;