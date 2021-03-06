/* eslint-disable */
import React from 'react'
import { Icon } from 'react-fa'
import { Redirect } from 'react-router'
import styles from './index.css'

export default class CourseCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            path: ''
        }
    }

    getStarRate(rate) {
        let stars = []
        const [int, decimal] = rate.split('.')

        for(let i = 1; i <= parseInt(int); i++) {
            stars.push(<Icon name='star' />)
        }

        if(+decimal >= 5) {
            stars.push(<Icon name='star-half-o' />)
        }

        for(let i = stars.length; i < 5; i++) {
            stars.push(<Icon name='star-o' />)
        }

        return (
          <>
            { stars } { rate }
          </>
        )
    }

    handleClick(name) {
        name = name.split(' ').join('-')
        this.setState({
            redirect: true,
            path: name,
        })
    }

    render() {
        const { time, name, rate, img, price } = this.props
        const { redirect, path } = this.state
        return (
            <div className='card-container' onClick={ () => this.handleClick(name) }>
              { redirect ? <Redirect to={ `/course/${path}` } /> : null }
              <div className='card-image'>
                <img src={ img } alt='' />
              </div>
              <div className='card-footer'>
                <div className='card-footer-top'>
                  <div className='card-name'>
                    { name }
                  </div>
                  <div className='card-rate'>
                    { this.getStarRate(rate) }
                  </div>
                </div>
                <div className='card-footer-bot'>
                  <div className='card-time'>
                    <Icon name='clock-o' /> 
                    { time }
                  </div>
                  <div className='card-price'>
                    { price }
                  </div>
                </div>
              </div>
            </div>
        )
    }
}