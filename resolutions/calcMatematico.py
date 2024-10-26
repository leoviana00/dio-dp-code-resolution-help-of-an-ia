# Vamos solicitar como entrada dois números e depois vamos realizar uma operação simples entre eles.

numero1 = float(input("Digite o primeiro número: "))
numero2 = float(input("Digite o segundo número: "))

# Solicitar a operação desejada
operacao = input("Escolha a operação (+, -, *, /): ").strip().lower()

# Realizar a operação com base na escolha do usuário
if operacao == "+":
    resultado = numero1 + numero2
    print(f"A soma de {numero1} e {numero2} é: {resultado}")
elif operacao == "-":
    resultado = abs(numero1 - numero2)  # Usa o valor absoluto da subtração
    print(f"A subtração de {numero1} e {numero2} é: {resultado}")
elif operacao == "*":
    resultado = numero1 * numero2
    print(f"A multiplicação de {numero1} e {numero2} é: {resultado}")
elif operacao == "/":
    if numero2 != 0:  # Verifica se o divisor não é zero
        resultado = numero1 / numero2
        print(f"A divisão de {numero1} por {numero2} é: {resultado}")
    else:
        print("Erro: Não é possível dividir por zero.")
else:
    print("Operação inválida. Por favor, escolha +, -, * ou /.")