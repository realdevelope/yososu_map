import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">
                <div className="container-fluid text-center bg-black pt-3">
                    <div className="row">
                        <div className="col">
                            <h5 className="text-uppercase text-white Title">SSAC(Seoul SoftWare Academy Cluster)</h5>
                            <p className="text-white Title">SSAC3기 - 웹 풀스택 융합 개발자 양성과정</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-2 text-white bg-black Title">© 2021 Copyright:
                    <a className="text-white Title" href="https://github.com/kebin0613/SSAC_Team/" style={{ textDecorationLine : 'none' }}> SSAC Team</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer