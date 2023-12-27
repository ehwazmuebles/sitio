import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export type EhwazImage = {
  url: string,
  title?: string,
  rows?: number,
  cols?: number,
  width: number,
  height: number
}

type GalleryProps = {
  images: EhwazImage[],
  onClick: Function
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default (props: GalleryProps) => {
  return (
    <ImageList
        sx={{ width: "100%", height: 620 }}
        variant="quilted"
        cols={4}
        rowHeight={150}
      >
        {props.images.map((item) => (
          <ImageListItem key={item.url} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.url, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{cursor: "pointer"}}
              onClick={(ev) => { ev.preventDefault(); props.onClick(item) }}
            />
          </ImageListItem>
        ))}
      </ImageList>
  )
}