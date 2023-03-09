import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example" style={{
        position : 'absolute',right:0,marginRight:"30px"
      }}>
      <Button id='up' onClick={scrollToTop} >up</Button>
    </ButtonGroup>
  );
}

export default BasicExample;