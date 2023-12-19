document.addEventListener("DOMContentLoaded", () => {
    const numKeys = document.querySelectorAll(".num_key")
    const inputField = document.querySelector("#calc")
    numKeys.forEach(key => {
        key.addEventListener("click", e => {
            const value = e.target.dataset.value
            if (inputField.value.includes(".")&&value==="."){
                return null;
            }
            if (
                (inputField.value.includes("+")
                ||inputField.value.includes("-")
                ||inputField.value.includes("*")
                ||inputField.value.includes("/")
                )&&["*", "/", "+", "-"].includes(value)
            ){
                return null;
            }
            if (inputField.value === ""&&["*", "/", "+", "-"].includes(value)) {
                return null;
            }
            
            inputField.value += value
        })
    })

    const opButtons = document.querySelectorAll(".op_key")
    opButtons.forEach(opButton => { 
        opButton.addEventListener("click", e => {
            const action = e.target.dataset.action
            if (action === "result"){
                let operands;

                if (inputField.value.includes("/")) {
                    operands = inputField.value.split("/")
                    const operand1 = Number(operands[0]);
                    const operand2 = Number(operands[1]);
                    inputField.value = operand1/operand2;
                    return null;
                }

                if (inputField.value.includes("+")) {
                    operands = inputField.value.split("+")
                    const operand1 = Number(operands[0]);
                    const operand2 = Number(operands[1]);
                    inputField.value = operand1+operand2;
                    return null;
                }             

                if (inputField.value.includes("-")) {
                    operands = inputField.value.split("-")
                    const operand1 = Number(operands[0]);
                    const operand2 = Number(operands[1]);
                    inputField.value = operand1-operand2;
                    return null;
                }

                if (inputField.value.includes("*")) {
                    operands = inputField.value.split("*")
                    const operand1 = Number(operands[0]);
                    const operand2 = Number(operands[1]);
                    inputField.value = operand1*operand2;
                    return null;
                }
            
            }
            if (action === "clear") {
                inputField.value = ""
                return null;

            }
            if (action === "back") {
                inputField.value = inputField.value.slice(0, -1)
                return null;
            }
        })
    }
    )
})