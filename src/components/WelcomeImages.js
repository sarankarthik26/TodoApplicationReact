import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';

const itemData = [
    {
        img: process.env.PUBLIC_URL + `pexels1.jpg`,
        title: 'tools'
    },
    {
        img: process.env.PUBLIC_URL + `pexels2.jpg`,
        title: 'painting'
    },
    {
        img: process.env.PUBLIC_URL + `pexels3.jpg`,
        title: 'sketching'
    },
    {
        img: process.env.PUBLIC_URL + `pexels5.jpg`,
        title: 'jogging'
    },
    {
        img: process.env.PUBLIC_URL + `pexels6.jpg`,
        title: 'gaming'
    },
    {
        img: process.env.PUBLIC_URL + `pexels7.jpg`,
        title: 'gardening'
    },
    {
        img: process.env.PUBLIC_URL + `pexels8.jpg`,
        title: 'cooking'
    },
    {
        img: process.env.PUBLIC_URL + `pexels9.jpg`,
        title: 'pet'
    },
]

const WelcomeImages = () => {
    return (
        <Grid sx={{ width: { xs: "42.4575vh", md: 425, lg:500 }, height: { xs: "37.4625vh", md: 375, lg:450 }, overflowY: 'scroll', backdropFilter: "blur(1px)" }} xs={10} sm={8} lg={6}>
            <ImageList variant="masonry" cols={2} gap={6}>
                {itemData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Grid>
    );
}

export default WelcomeImages;