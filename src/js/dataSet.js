let entrada = [
    'PRESENÇA DE ÁGUA', 
    'PENSENÇA PARCIAL DOS ELEMENTOS NECESSÁRIOS PARA MANUTENÇÃO DA VIDA', 
    'NÃO ABUNDÂNCIA DE MATERIAS PESADOS', 
    'TEMPERATURA SUPORTÁVEL', 
    'GRAVIDADE SUPORTÁVEL', 
    'PRESENÇA DE MARCADORES BIOLOGICOS', 
    'ALTA CONCENTRAÇÃO ROCHOSA', 
    'PRESENÇA DE ESPECTROS AINDA NÃO CONHECIDOS'
]

let vigens = [
    'Colonizacao', 
    'Expedicao', 
    'Ciencia',
    'Mineracao',
    'Exploracao'  
]


dataSet = [

  {
                input = [0,0,0,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,0,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,0,0,0,1,0],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,0,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,0,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,0,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,0,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,0,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,0,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,0,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,0,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,1,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,1,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,1,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,1,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,1,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,1,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,0,1,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,0,1,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,0,1,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,0,1,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,0,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,0,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,0,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,0,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,0,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,0,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,1,0,1,0,0],
                target = [0,0,0,0,0],
            },
  {
                input = [0,1,0,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,0,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,0,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,0,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,0,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,1,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,1,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,1,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,1,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,1,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,1,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [0,1,1,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [0,1,1,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [0,1,1,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1,1,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1111110],
                target = [0,1,0,0,0],
            },
  {
                input = [0,1111111],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,0,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,0,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,0,1,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,0,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,0,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,0,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,0,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,0,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,0,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,0,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,0,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,1,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,1,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,1,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,1,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,1,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,1,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,0,1,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,0,1,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,0,1,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,0,1,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,0,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,0,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,0,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,0,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,0,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,0,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,0,1,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,1,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,0,1,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,0,1,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,0,1,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,1,0,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,0,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,1,0,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,0,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,1,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,1,0,1,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,0,1,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,1,0,1,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,0,1,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,1,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,1,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,0,1,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,1,0,0,0,0],
                target = [0,0,0,0,1],
            },
  {
                input = [1,1,1,1,0,0,0,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,1,0,0,1,0],
                target = [0,0,0,1,0],
            },
  {
                input = [1,1,1,1,0,0,1,1],
                target = [0,0,1,0,0],
            },
  {
                input = [1,1,1,1,0,1,0,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,1,0,1,0,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,1,0,1,1,0],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,1,0,1,1,1],
                target = [0,1,0,0,0],
            },
  {
                input = [1,1,1,1,1,0,0,0],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,0,0,1],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,0,1,0],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,0,1,1],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,1,0,0],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,1,0,1],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,1,1,0],
                target = [1,0,0,0,0],
            },
  {
                input = [1,1,1,1,1,1,1,1],
                target = [1,0,0,0,0],
            },
]