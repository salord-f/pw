import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "../../style/plugin.scss"

export default function Plugin(props) {

    return (
        <Card className="card" style={{backgroundColor: "gray"}}>
            <CardActionArea href={"http://localhost:8000/plugins/" + props.id}>
                <CardContent>
                    <Typography gutterBottom variant="h5" className="title">
                        {props.title ? props.title : "Your plugin title."}
                    </Typography>
                </CardContent>

                <CardMedia className="media">
                    <img className="mediaImage"
                         src={props.image ? require('../../assets/images/' + props.image + '.png') : ""}
                         alt=""/>
                </CardMedia>

                <CardContent className="descriptionCard">
                    <Typography gutterBottom variant="subtitle1" className="description">
                        {props.description ? props.description : "There should be a description of your plugin here."}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}