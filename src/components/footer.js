import "./footerStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
            {/* <div className="top">
                <div>
                    <h1>School Name</h1>
                <p>
                A place where dreams becomes reality.
                </p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div> */}
            <div className="bottom">
                <div>
                    <h4>Address</h4>
                    <a href="/">Abc nituk mark Delhi road,Mirzapur park,</a>
                     <a href="/">Los Angles, 201002, UttarPradesh, India.</a>
                    <h4>REG NUMBER</h4>
                    <a href="/">-2130750</a>
                    
                </div>
                <div>
                    <h4>Phone No</h4>
                    <a href="/">+9154216654545</a>
                    <a href="/">+9156255654545</a>
                    <h4>Office CODE</h4>
                    <a href="/">-52148</a>
                </div>
                <div>
                    <h4>Email ID</h4>
                    <a href="/">FRONT OFFICE :</a>
                    <a href="/">frontoffice@gmail.com</a>
                    <a href="/">FOR QUERY </a>
                    <a href="/">qqtimesindia@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;