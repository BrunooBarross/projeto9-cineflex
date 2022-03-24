import "./style.css"

const Footer = (props) => {
    const { posterURL, title, day, time } = props;
    return (
        <footer className="footer">
            <div className="footer-poster">
                <img src={posterURL} alt={title} />
                
            </div>
            <div className="footer-info">
                <p>{title}</p>
                {
                    day === null ?
                        <></> :
                        <p>{day} - {time}</p>
                }
            </div>
        </footer>
    )
}

export default Footer;