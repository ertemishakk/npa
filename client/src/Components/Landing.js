import React, { Component } from 'react'
import {
    Col,
    Row,
    Button,
    Form,
    Input,
    FormGroup

} from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Landing extends Component {
    render() {
        return (
            <div className='position-relative'>
                <Fade>
                    <div className="masthead">
                        <div class="overlay text-center">
                            <Row>
                                <Col>
                                    <div className='container text-center text-light'>
                                        <h1 className='header'>WELCOME TO NATIONAL PARKS AUSTRALIA</h1>
                                        <Form className='w-50 mx-auto pt-3'>
                                            <FormGroup>
                                                <Input
                                                    className='text-center border-0'
                                                    type="search"
                                                    name="search"
                                                    placeholder="Search National Parks"
                                                />
                                            </FormGroup>
                                        </Form>
                                        <Button color='success' className='mr-1'>Search</Button>
                                        <Button outline color='light' >Read Our Stories</Button>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}
export default Landing