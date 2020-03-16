import  React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class App extends Component{
    state = {
        image: {
                id: 0,
                name: 'Image0',   
                path: './assets/images/0.jpg',
            }
    }

    imageData = [ 
        {
            id: 0,
            name: 'Image0',
            path: './assets/images/0.jpg',
        },
        {
            id: 1,
            name: 'Image1',
            path: './assets/images/1.jpg',
        },
        {
            id: 2,
            name: 'Image2',
            path: './assets/images/2.jpg',
        },
        {
            id: 3,
            name: 'Image3',
            path: './assets/images/3.jpg',
        },
        {
            id: 4,
            name: 'Image4',
            path: './assets/images/4.jpg',
        },
        {
            id: 5,
            name: 'Image5',
            path: './assets/images/5.jpg',
        },
        {
            id: 6,
            name: 'Image6',
            path: './assets/images/6.jpg',
        },
        {
            id: 7,
            name: 'Image7',
            path: './assets/images/7.jpg',
        },
        {
            id: 8,
            name: 'Image8',
            path: './assets/images/8.jpg',
        },
    ]

    totalImages = this.imageData.length-1;

    updateImage = (current) => {
        if(this.imageData[current] === undefined){
            return;
        }

        this.setState({
            image: this.imageData[current]       
        });
    }


    render(){
        const { image } = this.state
        return(
            <div className="w-100 vh-100 no-overflow">
                {/* <Container> */}
                    {/* <Row>
                        <Col> */}
                            <Image className="w-responsive w-100" src={image.path} alt={image.name} fluid/>
                        {/* </Col>
                    </Row> */}
                {/* </Container> */}
                <ButtonGroup className="fixed-bottom" aria-label="Basic example">
                    <Container>
                    <Row>
                        <Col xs = {5}></Col>
                        <Col xs = {2}>
                            <Button id="next" value="Next" variant="link"
                                disabled={(image.id === this.totalImages)? true : false} 
                                onClick={() => this.updateImage((this.state.image.id + 1))}
                                >
                                <i class="fas fa-2x fa-chevron-up"></i>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs = {5}></Col>
                        <Col xs={2}>
                            <Button id="back" value="Back"  variant="link"
                                disabled={(image.id === 0)? true : false} 
                                onClick={() => this.updateImage((this.state.image.id - 1))}
                                >
                                <i class="fas fa-2x fa-chevron-down"></i>
                            </Button>
                        </Col>
                    </Row>
                    </Container>
                </ButtonGroup>
            </div>
        )
    }
}

export default App