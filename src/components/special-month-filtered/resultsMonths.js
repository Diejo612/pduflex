import React from "react";
import "./resultsMonths.css"
import getSpecialMonths from "../../functions/getSpecialMonths";

class ResultsMonths extends React.Component {
    render(){
        let specialMonths= [];
        if (this.props.formaPago === 'quincenal'){
            const months = getSpecialMonths(this.props.months, this.props.monthsQ)
            if (months.length > 0) {
                for (let i= 0; i < months.length; i++){
                    specialMonths[i]= (
                        <div className='special-month' key={months[i][0]}>
                            <label htmlFor="mes-especial">{months[i][0]}</label>
                            <input type="number" name="mes-especial" id="mes-especial" value={months[i][1]} disabled readOnly />
                            <input type="number" name="mes-especial" id="mes-especial" value={months[i][2]} disabled readOnly />
                        </div>
                    );
                }
                return (
                    <div className='special-months'>
                        {[specialMonths]}
                    </div>
                );
            } else {
                return 'No se eligieron meses especiales';
            }
            
        }else{
            const months = getSpecialMonths(this.props.months, null)
            if (months.length > 0) {
                for (let i= 0; i < months.length; i++){
                    specialMonths[i]= (
                        <div className='special-month' key={months[i][0]}>
                            <label htmlFor="mes-especial">{months[i][0]}</label>
                            <input type="number" name="mes-especial" id="mes-especial" value={months[i][1]} disabled readOnly />
                        </div>
                    );
                }
                return (
                    <div className='special-months'>
                        
                        {[specialMonths]}
                    </div>
                );
            } else {
                return 'No se eligieron meses especiales';
            }
        }
    }
}

export default ResultsMonths;