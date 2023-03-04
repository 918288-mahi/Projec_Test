import React from "react";
import { connect } from "react-redux";
import m1 from '../Components/images/mobile3.png'
import { CartAction } from "../Actions/cartActions";
class Addcart extends React.Component {
    constructor(props){
        super(props)
    }
    // CartAction =()=>{
    //     this.props.CartAction[[]]
    // }
    render(){
    return (
        <>

            <section >
                <div className="container py-5">
                    <div className="row justify-content-right">
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <div className="card">
                                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                                    data-mdb-ripple-color="light">
                                    <img src={m1}
                                        className="img-fluid"
                                        alt="Laptop" />
                                    <a href="#!">
                                        <div className="mask"></div>
                                    </a>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p><a href="#!" className="text-dark">One Plues 250</a></p>
                                            <p className="small text-muted">Laptops</p>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="small text-muted">Rated 4.0/5</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body pb-0">
                                    <div className="d-flex justify-content-between">
                                        <p><a href="#!" className="text-dark">$3,999</a></p>
                                        <p className="text-dark">#### 8787</p>
                                    </div>
                                    <p className="small text-muted">VISA Platinum</p>
                                </div>
                                <hr className="my-0" />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center pb-2 mb-1">
                                        <a href="#!" className="text-dark fw-bold">Cancel</a>
                                        <button type="button" className="btn btn-primary" onClick={this.CartAction}>Add Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    }

}
export default Addcart;
// const  mapDispatchToProps=(dispatch)=>{
//     return{
//         CartAction:(product)=>{
//             dispatch(CartAction(product))
//         }
//     }
// }
// export default connect(null,mapDispatchToProps) (Addcart)
