import React from 'react';
import Card from 'react-bootstrap/Card'
export class MovieItem extends React.Component {//Returns below text when called
    render() {
        return (
            <div>
                <Card>
                    <Card.Header> <h4>{this.props.movie.Title}</h4></Card.Header> 
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img> 
                            <p>{this.props.movie.Year}</p>
                        </blockquote>
                    </Card.Body>
                </Card>


            </div>
            //Creates a card for movie
            //Sets info as title,img,year
        );
    }
}