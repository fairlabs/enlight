import Card from 'src/ui/Card';
import { Grid } from '@mui/material';

const ContentCard = ({post, index}) => {

  let arr = post.link.split('contents/')[1].split('/');
  let categoryArr = arr.slice(0, -1)
  let linkArr = ['post', ...arr]
  
  const category = categoryArr.join(' / ');
  const link = linkArr.join('/');

  return (
    <Grid key={`ContentCard_${index}`} item xs={4}>
      <Card 
        title={post.name.split('.')[0]}
        category={category}
        link={link}
      />
    </Grid>
  )
}

export default ContentCard;