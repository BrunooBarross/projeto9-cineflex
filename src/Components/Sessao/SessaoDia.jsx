import { Link } from "react-router-dom";

const SessaoDia = (props) => {
    const { weekday, date, showtimes } = props;
    return (
        <>
            <div className="sessao-data">
                <h2>{weekday} - {date}</h2>                
            </div>
            <div className="container-botoes" >
                {
                    showtimes.map((showtime, key) =>
                    <Link className="Link" key={key} to={`/sessao/${showtime.id}`}>
                        <button className="botoes-hora" key={key}>
                            {showtime.name}
                        </button>
                    </Link>                                            
                    )
                }
            </div>            
        </>
    )
}
export default SessaoDia;