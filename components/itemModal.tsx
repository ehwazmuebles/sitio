import { EhwazImage } from "./gallery"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Image from 'next/image';

type ItemModalProps = {
  image: EhwazImage | null,
  onClose: Function
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  height: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default (props: ItemModalProps) => {
  return (
    <Modal
      open={props.image != null}
      onClose={() => { props.onClose() }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {
          (props.image != null) &&
          (<Image src={props.image.url} width={props.image.width} height={props.image.height} alt={props.image.title || ''}></Image>)
        }
      </Box>
    </Modal>
  )
}