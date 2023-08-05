import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NewsItem extends Component {
    render() {
        let { item, desciption, ImageUrl, Newsurl, publish, company } = this.props
        return (
            <div className='my-3'>
               <Link to={Newsurl} style={{textDecoration:"none"}}>
                <div className="card" >



                    <img src={!ImageUrl ? "https://s.yimg.com/uu/api/res/1.2/HmsvtziJYdqRgOmp6rrD6w--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/f9ec6510-ffeb-11ed-bdff-a4f87fd8a5b3.cf.jpg" : ImageUrl} height={"220px"} alt="Image" />

                    <div className="card-body">
                        <h5 className="card-title">{item}....</h5>
                        <p className="card-text">{desciption}....</p>
                        <div class="d-flex justify-content-around"> 
                        <p>{new Date(publish).toGMTString()}</p><p style={{border
                        :"2px solid black" ,color
                        :"red" ,borderRadius:"5px",padding:"5px", fontSize:"bold"}}>{company}</p>
                        </div>
                        <Link to={Newsurl} className="btn btn-sm  btn-dark" target='blank'>Read More</Link>

                    </div>
                </div>
                </Link>
            </div>
        )
    }
}
