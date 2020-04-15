import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import parkshat from '../images/parkshat.webp'
import zion from '../images/zion.webp'
import carts from '../images/carts.jpeg'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <Row className='pt-3 '>
                    <Col>
                        <div class="img_container position-relative ml-3">
                            <a href='#'>
                                <img className='img-fluid' src={zion} alt="omg" />
                                <h2 className='px-3'> OUR STORY</h2>
                            </a>

                        </div>
                        <div class="img_container position-relative mt-3 ml-3 mb-3">
                            <a href='#'>
                                <img className='img-fluid' src={parkshat} alt="omg" />
                                <h2 className='px-5'> SHOP</h2>
                            </a>
                        </div>
                    </Col>
                    <Col>
                        <div class="img_container position-relative mr-3 mb-3">
                            <a href='#'>
                                <img className='img-fluid' src={carts} alt="omg" />
                                <h2 > GET INVOLVED</h2>
                            </a>
                        </div>
                    </Col>

                </Row>

            </div>
        )
    }
}
