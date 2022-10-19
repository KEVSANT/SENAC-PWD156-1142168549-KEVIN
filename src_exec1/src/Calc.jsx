import React, { Component } from "react";

function MessageIMC(imc) {
    if (imc < 18.50)
        return 'Voce está abaixo do peso ideal!'
    else if (imc <= 24.49)
        return 'Voce está no peso ideal!'
    if (imc <= 29.9)
        return 'Voce está com Sobrepeso!'
    else if (imc <= 34.9)
        return 'Voce está com Obesidade Grau 1!'
    if (imc <= 39.9)
        return 'Voce está com Obesidade Grau 2'
    else if (imc => 40.0)
        return 'Cuidado, voce está com Obesidade Grau 3'
}
class Calc extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imc: ""
        }
        this.handleImc = this.handleImc.bind(this);
        this.clickClasImc = this.clickClasImc.bind(this);
    }

    handleImc(event) {
        this.setState({ imc: event.target.value })
    }

    clickClasImc() {
        const imc = this.state;
        this.setState({ imc })

    }

    render() {
        var imc = this.state.imc;
        const messageIMC = MessageIMC(imc)

        return ( 
        <main>
            <div className="class">
            <top>
                <label htmlFor="imc">Informe o IMC:</label>
                <input type="number" onChange={this.handleImc} id="imc" placeholder="informe seu IMC..." />
                
                {imc > 0 &&
                    <p>{messageIMC}</p>
                }
    </top>
            </div>
            
            </main>
        
        )
    }
}
export default Calc;