const SessaoDia = ({ weekday, date, showtimes }) => {
    return (
        <>
            <div className="sessao-data">
                <h2>{weekday} - {date}</h2>                
            </div>
            <div className="container-botoes" >
                {
                    showtimes.map((showtime, key) =>                        
                        <button className="botoes-hora" key={key}>
                            {showtime.name}
                        </button>                        
                    )
                }
            </div>            
        </>
    )
}
export default SessaoDia;