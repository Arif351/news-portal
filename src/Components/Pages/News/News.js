import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { _id, title, details, author, image_url, rating, category_id, total_view } = news;
    console.log(title);

    return (
        <Card>
            <h1>news portal</h1>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title> {title} </Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">Similar More News</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;