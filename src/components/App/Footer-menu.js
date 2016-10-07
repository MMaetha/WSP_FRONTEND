import React,{ Component } from 'react'
import {Row,Col,Well} from 'react-bootstrap'
import {Card,CardTitle} from 'react-materialize'
import './Footer.scss'
export default class FooterMenu extends Component {
  render(){
    return(
      <div>
      <Row>
        <Col md={4} xs={4}>
          {/* <Well>
            <img src="src/assets/1.jpg"/>
          </Well> */}
          <Card className='small'
            header={<CardTitle image='src/assets/1.jpg'/>}
            actions={[<a href='#' className="card-text">Design your brand</a>]}>
          </Card>
        </Col>
        <Col md={4} xs={4}>
          {/* <Well>
            <img rc="src/assets/2.jpg"/>
          </Well> */}
          <Card className='small'
            header={<CardTitle image='src/assets/2.jpg'/>}
            actions={[<a href='#' className="card-text">Go To Store</a>]}>
          </Card>
        </Col>
        <Col md={4} xs={4}>
          {/* <Well>
            <img src="src/assets/3.jpg"/>
          </Well> */}
          <Card className='small'
            header={<CardTitle image='src/assets/3.jpg'/>}
            actions={[<a href='#' className="card-text">Top Rate</a>]}>
          </Card>
        </Col>
      </Row>
      </div>
    )
  }
}