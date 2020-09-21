import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const FlightCard = ({flightItem}) => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    
    return (<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={flightItem.photo}
					title={flightItem.title}
				/>
				<CardContent>
				<List dense={dense}>
							<ListItem>
								<ListItemText
									primary="Mission Ids"
									secondary={flightItem.id}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Launch Year"
									secondary={flightItem.year}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Successful Launch"
									secondary={flightItem.launchSuccess}
								/>
							</ListItem>
							<ListItem>
								<ListItemText
									primary="Successful Landing"
									secondary={flightItem.landSuccess}
								/>
							</ListItem>
					</List>
				</CardContent>
			</CardActionArea>
		</Card>);
};

export default FlightCard;

