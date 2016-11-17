import React, { Component } from 'react'
// import {Dropdown,NavItem,Button} from 'react-materialize'
import {connect} from 'react-redux'
import {sortNone,sortPriceLow,sortPriceHigh,sortNameA,sortNameZ} from '../../../actions/SortAction'
import {loadProductList} from '../../../actions/ProductAction'
class Sort extends Component{
  componentWillMount(){
    this.props.onLoadProductList()
    this.sortByNone()
  }
  sortByNone(){
    this.props.sortNone(this.props.products)
  }
  sortByNameA(){
    this.props.sortNameA(this.props.products)
  }
  sortByNameZ(){
    this.props.sortNameZ(this.props.products)
  }
  sortByPriceLow(){
    this.props.sortPriceLow(this.props.products)
  }
  sortByPriceHigh(){
    this.props.sortPriceHigh(this.props.products)
  }
  render(){
    return(
      <div className="sort_container">
         <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Sort by</a>
         <ul id='dropdown1' className='dropdown-content'>
           <li><a href="#" onClick={()=>this.sortByNone()}>None</a></li>
           <li className="divider"></li>
           <li><a href="#" onClick={()=>this.sortByNameA()}>Name: A-Z</a></li>
           <li><a href="#" onClick={()=>this.sortByNameZ()}>Name: Z-A</a></li>
           <li><a href="#" onClick={()=>this.sortByPriceLow()}>Price: Low-High</a></li>
           <li><a href="#" onClick={()=>this.sortByPriceHigh()}>Price: High-Low</a></li>
         </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortNone: (products) => {
      dispatch(sortNone(products))
    },
    sortNameA: (products) => {
      dispatch(sortNameA(products))
    },
    sortNameZ: (products) => {
      dispatch(sortNameZ(products))
    },
    sortPriceLow: (products) => {
      dispatch(sortPriceLow(products))
    },
    sortPriceHigh: (products) => {
      dispatch(sortPriceHigh(products))
    },
    onLoadProductList: () => {
      dispatch(loadProductList())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sort)