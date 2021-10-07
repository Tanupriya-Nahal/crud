import '../list/list.css';
const List = (props) => {
    const data = props.element;
    const getMarketValue = (quant, price) => {
        return parseFloat(quant * price).toFixed(2);
    }
    return (
        <div className="list">
            <div className="card">
                <div className="">
                    <div className="">
                        <span className="">{data.scrip}</span>
                        <span className="" ><strong>$</strong><span className=""><strong>{data.price}</strong></span></span>
                    </div>
                </div>
                <div className="">
                    <h3>{data.scrip}</h3>
                </div>
            </div>
            <div className="card">
                <div className="">
                    <div className="">
                        <span className=""><strong>Quantity</strong></span>
                    </div>
                    <div className="">
                        <span className=""><strong>{data.quantity}</strong></span>
                    </div>
                    <div className="">
                        <span className=""><strong>Avg Cost</strong></span>
                    </div>
                    <div className="">
                        <span className=""><strong>$ {data.avgCost}</strong></span>
                    </div>
                    <div className="">
                        <span className=""><strong>Invested Amt.</strong></span>
                    </div>
                    <div className="">
                        <span className=""><strong>${data.investedAmount}</strong></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="">
                    <div className="col-6">
                        <span className=""><strong>Market Value</strong></span>
                    </div>
                    <div className="col-6 ">
                        <span className=""><strong>${getMarketValue(data.quantity, data.price)}</strong></span>
                    </div>
                    <div className="col-8">
                        <span className="g"><strong>% of portfolio value</strong></span>
                    </div>
                    <div className="col-4">
                        <span className=""><strong>{data.portfolioValue}%</strong></span>
                    </div>
                    <div className="col-12">
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="">
                    <div className="col-6">
                        <span className=""><strong>Unre. P/L</strong></span>
                    </div>
                    <div className="col-6 ">
                        <span className=""><strong>${data.pandl}</strong></span>
                    </div>
                    <div className="col-6">
                        <span className=""><strong>% Return</strong></span>
                    </div>
                    <div className="col-6">
                        <span className=""><strong>{-(data.return)}%</strong></span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="">
                    <div className="">
                        <input type="button" className="btn primary btn-sm" value="BUY" />
                    </div>
                    <div className="">
                        <input type="button" className="btn primary btn-sm" value="SELL" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default List;