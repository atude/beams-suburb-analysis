import React from 'react';
import '../components/SuburbNews.css'
import { getNews } from '../utils';
import { Paper, Divider } from '@material-ui/core';

class SuburbNews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    async componentDidMount() {
        const allArticles = await getNews(this.props.suburb, this.props.suburb_state);

        this.setState({
            isLoaded: true,
            articles: allArticles
        })

    }

    render() {
        let articles = this.state.articles;
        if (!this.state.isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="vertical-menu">
                    {articles.articles.map(
                        article =>
                        <div>
                        <Paper className="PaperBox">
                        <a href={article.url} key={article.id} target="_blank">
                            <b className="Title">{article.title}</b>
                            <br/>
                        </a>
                            <p className="Content">{article.description}</p>
                            <i className="Date">{article.publishedAt.split('T')[0]}</i>
                        </Paper>
                        <br></br>
                        </div>
                    )}
                </div>
            );
        }
    }
}

export default SuburbNews;