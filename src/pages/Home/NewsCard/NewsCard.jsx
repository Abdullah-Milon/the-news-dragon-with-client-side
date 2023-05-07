import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    return (
        <Card className=" mb-4" >
            <Card.Header className="d-flex align-items-center" >
                <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author.name}</p>
                    <p><small>{moment(author.published_date).format("yyyy-MM-D")} </small></p>
                </div>
                <div className=' '>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}...
                            <Link className='text-danger text-lg-start' to={`/news/${_id}`}>Read more</Link>
                        </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex text-muted">
                <div className="flex-grow-1">
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span>{rating?.number}</span>
                </div>
                <div className="gap-2">
                    <FaEye></FaEye>  {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;