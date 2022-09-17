import React, { useState } from 'react';
import {  Link, Button, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';


export default function Article({article}){

    const [more, setMore] = useState(false);

    return(
        <Card>
            <Link href={article.url} target='_blank'>
                <CardMedia
                    component='img'
                    to={article.url} 
                    image={article.urlToImage}
                    alt={article.source.name}
                />
            </Link>
            <CardContent>
                <Typography fontSize='1em' gutterBottom variant="h5" component="div">
                    {article.title}
                </Typography>
                {
                    more &&
                    <Typography fontSize='1em' gutterBottom variant="h5" component="div">
                        {article.description}
                    </Typography>
                }
                <Button onClick={()=>setMore(!more)}>
                    {more ? 'close' : 'More...'}
                </Button>
                <Typography color='text.secondary'>
                    {new Date(article.publishedAt).toLocaleDateString()}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={article.url} target='_blank'>
                    Read whole article
                </Link>
            </CardActions>
        </Card>
    )
}